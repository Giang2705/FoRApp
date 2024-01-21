import axios from "axios";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View, Image, ScrollView } from 'react-native';
import Voice from '@react-native-community/voice'
import { IconButton } from "@react-native-material/core";
import Icon from 'react-native-vector-icons/Ionicons';

const KengryChatBOT = ({navigation, route}) => {
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
        const runRetrieve = await axios.get(runRetrieveURL,
            {headers:{
                'Authorization': `Bearer ${apiKey}`,
                'OpenAI-Beta': 'assistants=v1'
            }})
        console.log('Run retrieved data: ',runRetrieve.data)

        let isCompleted = null
        // Loop and Wait until the API response
        while(isCompleted === null){
            setTimeout(()=>{},1000);
            const runRetrieve = await axios.get(runRetrieveURL,
                {headers:{
                    'Authorization': `Bearer ${apiKey}`,
                    'OpenAI-Beta': 'assistants=v1'
                }})
            console.log('is RUN Completed: ', runRetrieve.data.completed_at);
            isCompleted = runRetrieve.data.completed_at
             // Handle FUNCTION CALLING
             if (runRetrieve.data.status === 'requires_action'){
                const tool_calls = runRetrieve.data.required_action.submit_tool_outputs.tool_calls
                const submitToolsOutputURL = `https://api.openai.com/v1/threads/${threadID}/runs/${runID}/submit_tool_outputs`
                // Iterate through the all possible functions ai thinks it can call
                for (let i = 0; i < tool_calls.length; i++){
                    if (tool_calls[i].function.name === 'order_food'){
                        const argus = JSON.parse(tool_calls[i].function.arguments)
                        funcOutput = order_food(argus.food,argus.restaurant)

                        const submitToolsOutput = await axios.post(
                            submitToolsOutputURL,
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
        <View style={styles.container}>
        <View style = {styles.mainContainer}>
            <View style = {styles.header}>
                <View style={styles.rightGroup}>
                    <IconButton icon={props => <Icon name="arrow-back" {...props} size={30} />} 
                        style={styles.back} color='#61481C'
                        onPress={()=>navigation.navigate("MessageCustomer")} />
                    <Image source={require("../../assets/147137.png")} style= {styles.userImage}/>
                    <Text style={styles.username}>Kengry the Bot</Text>
                </View>
                <TouchableOpacity onPress={()=>{}}>
                    <Image source={require("../../assets/aichatbot.png")} style= {styles.botImage}/>
                </TouchableOpacity>
            </View>
            <View style={styles.frameChat}>
                <ScrollView contentContainerStyle={styles.messagesContainer}>
                    {messagesData.slice().map((item, index) => (
                        <View key={index} style={item.role==='assistant'?styles.chatView1:styles.chatView2}>    
                            <Text>{item.role==='assistant'?'BOT: ':'USER: '}</Text>
                            <Text style={styles.textView1}>{item.content[0].text.value}</Text>
                        </View>
                    ))}

                </ScrollView>
            </View>
        </View>
        <View style={styles.bottomContainer}>
            <View style={styles.frameTexting}>
                <TextInput
                    style={styles.input}
                    value= {userPrompt}
                    placeholder="Insert what you want to ask here"
                    onChangeText={text => setUserPrompt(text)}
                    />
                <TouchableOpacity onPress={handleSend}>    
                    <Icon name="send" size={24} color="#61481C" />
                </TouchableOpacity>
            </View>    
        </View>    
    </View>    
    )
}
export default KengryChatBOT

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#F9F9C6',
    },
    mainContainer: {
        flex: 1,
        paddingHorizontal: 5,
    },
    header:{
        padding:5,
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    rightGroup: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    userImage: {
        width: 65,
        height: 65,
    },
    username:{
        paddingHorizontal: 10,
        fontSize: 18,
        fontWeight: 'bold',
        color:'#61481C'
    },
    botImage: {
        justifyContent: 'flex-end',
        width: 65,
        height: 65,
    },
    bottomContainer: {
		height: 50,
        borderRadius: 50,
        backgroundColor: "white",
        padding: 10,
	},
    frameChat:{
        padding:7,
        flex: 1,
    },
    messagesContainer: {
        flexGrow: 1, 
        justifyContent: 'flex-end',
    },
    chatView1:{
        justifyContent: 'flex-end',
    },
    chatView1:{
        alignSelf: 'flex-start',
    },
    textView1: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        backgroundColor: 'white',
        height: 'auto',
        borderRadius: 20,
    },
    chatView2:{
        alignSelf: 'flex-end',
        justifyContent:'flex-end',
    },
    textView2: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        backgroundColor: 'white',
        height: 'auto',
        borderRadius: 20,
    },

	frameTexting: {
		width: "100%",
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
	},
    input: {
        flex: 1,
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 20,
        paddingHorizontal: 10,
        marginRight: 10,
    },
    sendIcon: {
        marginRight: 10,
    },

}); 