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
        createMessage()
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
    
    async function createMessage() {
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
        console.log('Run CALLED: ',runID);

        const runRetrieveURL = `https://api.openai.com/v1/threads/${threadID}/runs/${runID}`
        const runRetrieve = await axios.get(runRetrieveURL,
            {headers:{
                'Authorization': `Bearer ${apiKey}`,
                'OpenAI-Beta': 'assistants=v1'
            }})
        console.log('Run retrieved data: ',runRetrieve.data)
        
        let isCompleted = runRetrieve.data.completed_at
        while(isCompleted === null){
            setTimeout(()=>{},1000);
            const runRetrieve = await axios.get(runRetrieveURL,
                {headers:{
                    'Authorization': `Bearer ${apiKey}`,
                    'OpenAI-Beta': 'assistants=v1'
                }})
            console.log('is RUN Completed: ', runRetrieve.data.completed_at);
            isCompleted = runRetrieve.data.completed_at
        };
        listMessages()
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