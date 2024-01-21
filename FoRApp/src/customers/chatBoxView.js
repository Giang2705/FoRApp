import React from 'react';
import { View, StyleSheet, ScrollView, Text, TouchableOpacity, Image, TextInput } from "react-native";
import { IconButton } from "@react-native-material/core";
import Icon from 'react-native-vector-icons/Ionicons';

const data = [
    { name: 'John WWW', text: 'Hi' },
    { name: 'DDD Doe', text: 'Hello' },
    { name: 'John WWW', text: 'Do you wanna buy some?' },
  ];

const colors = {
    button: '#C51606',
  };

export default function ChatBoxView({ navigation, route }) {

    return ( 
        <View style={styles.container}>
            <View style = {styles.mainContainer}>
                <View style = {styles.header}>
                    <View style={styles.rightGroup}>
                        <IconButton icon={props => <Icon name="arrow-back" {...props} size={30} />} 
                            style={styles.back} color='#61481C'
                            onPress={()=>navigation.navigate("MessageCustomer", {...route.params})} />
                        <Image source={require("../../assets/restaurant1.jpg")} style= {styles.userImage}/>
                        <Text style={styles.username}>Sorrento</Text>
                    </View>
                    <TouchableOpacity onPress={'Logic for AI'}>
                        <Image source={require("../../assets/avatar.jpg")} style= {styles.botImage}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.frameChat}>
                    <ScrollView contentContainerStyle={styles.messagesContainer}>
                        {data.slice().reverse().map((item, index) => (
                            <View key={index} style={styles.chatView1}>    
                                <Text>{item.name}</Text>
                                <Text style={styles.textView1}>{item.text}</Text>
                            </View>
                        ))}
                        {data.map((item, index) => (
                            <View key={index} style={styles.chatView2}>    
                                <Text style={styles.textView2}>{item.text}</Text>
                            </View>
                        ))}
                    </ScrollView>
                </View>
            </View>
            <View style={styles.bottomContainer}>
                <View style={styles.frameTexting}>
                    <TextInput
                        style={styles.input}
                        placeholder="Type your message..."  // need to take input data 
                        />
                    <TouchableOpacity onPress={'Logic for store the data'}>    
                        <Icon name="send" size={24} color="#61481C" />
                    </TouchableOpacity>
                </View>    
            </View>    
        </View>    
    );
}

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