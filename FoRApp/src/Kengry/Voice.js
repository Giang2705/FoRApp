import React, { useEffect, useState } from 'react'
import {View, Text, TouchableOpacity } from 'react-native'
import Voice from '@react-native-community/voice'

const VoiceExtract = () => {
    const [message,setMessage] = useState('')
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
        console.log('(Handler) Speech Result: ',r)
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





    return (
        <View>
            <TouchableOpacity onPress={()=>(isRecording?stopRecording:startRecording)} >
                <Text>{isRecording? stopRecording:startRecording}</Text>
            </TouchableOpacity>
        </View>
    )
}
export default VoiceExtract 