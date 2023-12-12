import axios from "axios";
import { useState } from "react";
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Voice from '@react-native-community/voice'






const KengryTheBOT = () => {
    const apiKey = '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'
    const apiURL = 'https://api.openai.com/v1/chat/completions'
    const [messagesData, setMessages] = useState([]);
    const [userPrompt, setUserPrompt] = useState('');
    const [isRecording,setIsRecording] = useState(false)
    
    Voice.getSpeechRecognitionServices()
    const voiceIsAvailable = async() => {
        console.log('Voice Service Available: ',await Voice.isAvailable())
    }
    voiceIsAvailable()


    Voice.onSpeechStart = () => {
        setIsRecording(true)
        console.log('(Handler) Speech Start')
    }
    Voice.onSpeechEnd = () => {
        setIsRecording(false)
        console.log('(Handler) Speech End')
    }
    Voice.onSpeechResults = r => {
        // console.log('(Handler) Speech Result: ',r)
        result = r.value[0]
        setUserPrompt(result)
        console.log(result)
        console.log('User prompt: ', userPrompt)
    }
    Voice.onSpeechError = e => {
        console.log('(Handler) Speech Error: ',e)
    }
    
    const startRecording = async() => {
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
        try {
            console.log('Brake', isRecording)
            await Voice.stop()
        } catch(e) {
            console.log("Stop Error: ",e)
        }
    }

    const handleSend = async() => {
        try {
            const params = {
                model: "gpt-3.5-turbo",
                max_tokens : 70,
                temperature: 0.5,
                messages:  [{content: userPrompt, role:'user' }] 
            }
            const header = {
                'Authorization': `Bearer ${apiKey}`,
            }
            const chatCompletion = await axios.post(apiURL,
                params,
                {headers: header})

            const textResponse = chatCompletion.data.choices[0].message.content
            setMessages([...messagesData,{role:'user', content: userPrompt },
                                        {role : 'assistant', content: textResponse }])
            setUserPrompt('');


        } catch(e) {
            console.log(e)
        }

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
                        <Text>{item.content}</Text>
                    
                    </View>
                )}>
            </FlatList>
            <TextInput
                value= {userPrompt}
                placeholder="Insert what you want to ask here"
                onChangeText={text => setUserPrompt(text)}
            ></TextInput>
            <TouchableOpacity
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

export default KengryTheBOT

const styles = StyleSheet.create({

})