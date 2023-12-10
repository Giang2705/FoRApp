import axios from "axios";
import { useState } from "react";
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';




const KengryTheBOT = () => {
    const apiKey = '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'
    const apiURL = 'https://api.openai.com/v1/chat/completions'
    const [messagesData, setMessages] = useState([]);
    const [userPrompt, setUserPrompt] = useState('');

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
        </View>
    )
}

export default KengryTheBOT

const styles = StyleSheet.create({

})