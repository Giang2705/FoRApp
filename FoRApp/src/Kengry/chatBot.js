import axios from "axios";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Voice from '@react-native-community/voice'
import OpenAI from "openai";


const KengryChatBOT = () => {
    const [messagesData, setMessagesData] = useState([]);
    const [userPrompt, setUserPrompt] = useState('');
    
    // Variables for Voice Recognition
    const [isRecording,setIsRecording] = useState(false)
    let tempt = userPrompt
    useEffect(()=>{
        voiceIsAvailable()
        Voice.onSpeechStart = speechStartHandler
        Voice.onSpeechEnd = speechEndHandler
        Voice.onSpeechResults = speechResultsHandler
        Voice.onSpeechError = speechErrorHandler
        createThread()


        return () => {
            Voice.destroy().then(Voice.removeEventListener);
        }
    },[])

    // HANDLE VOICE
    Voice.getSpeechRecognitionServices()
    const voiceIsAvailable = async() => {
        console.log('Voice Service Available: ',await Voice.isAvailable())
    }
    const speechStartHandler = () => {
        setIsRecording(true)
        console.log('(Handler) Speech Start')
    }
    const speechEndHandler = () => {
        setIsRecording(false)
        console.log('(Handler) Speech End')
    }
    const speechResultsHandler = r => {
        console.log('(Handler) Speech Result: ',r)
        tempt = r.value[0]
        setUserPrompt(tempt)
    }
    const speechErrorHandler = e => {
        console.log('(Handler) Speech Error: ',e)
        setUserPrompt('')
    }
    
    const startRecording = async() => {
        setIsRecording(true)
        try {
            console.log('Clciked', isRecording)
            await Voice.start('en-US',{
                "EXTRA_PARTIAL_RESULTS": true
            })
        } catch(e) {
            console.log("Start Error: ",e)
        }
    }
    const stopRecording = async() => {
        setIsRecording(false)
        try {
            console.log('Brake', isRecording)
            await Voice.stop()

        } catch(e) {
            console.log("Stop Error: ",e)
        }
    }


    // HANDLE BOT
    // Variables for AI apis
    const apiKey = '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'
    const assistantID = 'asst_JBPA46nmUDsH1j0xqt703OEh'
    const [threadID, setThreadID] = useState('');


    const handleSend = async() => {
        // const apiURL = 'https://api.openai.com/v1/chat/completions'
        // try {
        //     const params = {
        //         model: "gpt-3.5-turbo",
        //         max_tokens : 70,
        //         temperature: 0.5,
        //         messages:  [{content: userPrompt, role:'user' }] 
        //     }
        //     const header = {
        //         'Authorization': `Bearer ${apiKey}`,
        //     }
        //     const chatCompletion = await axios.post(apiURL,
        //         params,
        //         {headers: header})

        //     const textResponse = chatCompletion.data.choices[0].message.content
        //     setMessagesData([...messagesData,{role:'user', content: userPrompt },
        //                                 {role : 'assistant', content: textResponse }])
        //     setUserPrompt('');
        // } catch(e) {
        //     console.log(e)
        
        console.log("")
        setUserPrompt('');
        createUserMessage()
        listMessages()
        processRun()
    
    }
    
    async function createThread() {
        if (threadID != ''){
            return;
        }
        const threadCreateURL = 'https://api.openai.com/v1/threads'
        const emptyThread = await axios.post(threadCreateURL,
          '',
          {headers:{
              'Authorization': `Bearer ${apiKey}`,
              'OpenAI-Beta': 'assistants=v1'
          }})
        console.log("New thread created with id: ",emptyThread.data.id)
        setThreadID(emptyThread.data.id)
        listMessages()
    }

    async function listMessages() {
        console.log("Listing messages")
        const threadURL  = `https://api.openai.com/v1/threads/${threadID}/messages`
        const threadData = await axios.get(threadURL,
            {headers: {
                'Authorization': `Bearer ${apiKey}`,
                'OpenAI-Beta': 'assistants=v1'
            }})
        const threadMessages = threadData.data.data.reverse()
        setMessagesData(threadMessages)
        console.log("Updated bot conversation");

        return
    }
    
    async function createUserMessage() {
        const threadURL  = `https://api.openai.com/v1/threads/${threadID}/messages`
        const createMessage = await axios.post(threadURL,
          {
            role:'user',
            content: userPrompt
          },
          {headers: {
              'Authorization': `Bearer ${apiKey}`,
              'OpenAI-Beta': 'assistants=v1'
          }})
        console.log('Created a message for BOT',);
    }

    async function processRun() {
        console.log('Run BEGIN');
        const runURL  = `https://api.openai.com/v1/threads/${threadID}/runs`
        const run = await axios.post(runURL,
          {
            assistant_id: assistantID
          },
          {headers:{
            'Authorization': `Bearer ${apiKey}`,
            'OpenAI-Beta': 'assistants=v1'
          }})
        const runID = run.data.id
        console.log('Run START: ',runID);

        const runRetrieveURL = `https://api.openai.com/v1/threads/${threadID}/runs/${runID}`
        let isCompleted = null
        // Loop and Wait until the API response
        while(isCompleted === null){
            const runRetrieve = await axios.get(runRetrieveURL,
                {headers:{
                    'Authorization': `Bearer ${apiKey}`,
                    'OpenAI-Beta': 'assistants=v1'
                }})
            isCompleted = runRetrieve.data.completed_at
            
            // Handle FUNCTION CALLING
            if (runRetrieve.data.status === 'requires_action'){
                const tool_calls = runRetrieve.data.required_action.submit_tool_outputs.tool_calls
                // Iterate through the all possible functions ai thinks it can call
                for (let i = 0; i < tool_calls.length; i++){
                    if (tool_calls[i].function.name === 'order_food'){
                        const argus = JSON.parse(tool_calls[i].function.arguments)
                        funcOutput = order_food(argus.food,argus.restaurant)
                        
                        const submitToolsOutput = await axios.post(
                            `https://api.openai.com/v1/threads/${threadID}/runs/${runID}/submit_tool_outputs`,
                            {tool_outputs: [{
                                tool_call_id: tool_calls[i].id,
                                output: funcOutput
                                }]
                            },
                            {headers:{
                                'Authorization': `Bearer ${apiKey}`,
                                'OpenAI-Beta': 'assistants=v1'
                            }}
                        )
                    }
                }
            
            }       

            setTimeout(()=>{},1000);
        };
        listMessages()
    }


    function order_food(food,restaurant) {
        console.log("function order_food called HHUURAAAYY",food,restaurant)

        return "Food added to cart successfully"
    }

    return(
        <View>
            <Text>Kengry the BOT</Text>
            <FlatList
                data={messagesData}
                keyExtractor={(item,index)=>index.toString()}
                renderItem={({item}) => (
                    <View style = {{flexDirection:'row'}}>
                        <Text>{item.role==='assistant'?'BOT: ':'USER: '}</Text>
                        <Text>{item.content[0].text.value}</Text>
                    
                    </View>
                )}>
            </FlatList>
            <TextInput
                value= {userPrompt}
                placeholder="Insert what you want to ask here"
                onChangeText={text => setUserPrompt(text)}
            ></TextInput>
            <TouchableOpacity
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
                onPress={handleSend}>
                <Text>GO!</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={startRecording} >
                <Text>Start Recording</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={stopRecording}>
                <Text>Stop Recording</Text>
            </TouchableOpacity >
        </View>
    )
}

export default KengryChatBOT

const styles = StyleSheet.create({

})