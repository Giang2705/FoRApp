import React, { useEffect, useState } from 'react'
import {View, Text} from 'react-native'
import Voice from '@react-native-community/voice'
import { TouchableOpacity } from 'react-native'
import { Permissions } from "expo";

const VoiceExtract = () => {
    const [message,setMessage] = useState('')
    const [isRecording,setIsRecording] = useState(false)
    
    Voice.getSpeechRecognitionServices()

    const SpeechStartHandler = () => {
        console.log(Voice.isAvailable())

        setIsRecording(true)
        console.log('(Handler) Speech Start')
    }
    const SpeechEndHandler = () => {
        setIsRecording(false)
        console.log('(Handler) Speech End')
    }
    const SpeechResultsHandler = r => {
        console.log('(Handler) Speech Result: ',r)
    }
    const SpeechErrorHandler = e => {
        console.log('(Handler) Speech Error: ',e)
    }
    
    const startRecording = async() => {
        try {
            await Voice.start('en-US')
        } catch(e) {
            console.log("Start Error: ",e)
        }
    }
    const stopRecording = async() => {
        try {
            await Voice.stop()
        } catch(e) {
            console.log("Stop Error: ",e)
        }
    }


    useEffect(() => {
        Voice.onSpeechStart = SpeechStartHandler
        Voice.onSpeechEnd = SpeechEndHandler
        Voice.onSpeechResults = SpeechResultsHandler
        Voice.onSpeechError = SpeechErrorHandler;
    })


    return (
        <View>
            <TouchableOpacity onPress={startRecording} >
                <Text>Start Recording</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={stopRecording}>
                <Text>Stop Recording</Text>
            </TouchableOpacity >
        </View>
    )
}
export default VoiceExtract 