import React from 'react';
import { View, StyleSheet, ScrollView, Text, TouchableOpacity, Image, TextComponent } from "react-native";
import { IconButton } from "@react-native-material/core";
import Icon from 'react-native-vector-icons/Ionicons';
import OIcon from "react-native-vector-icons/Octicons";
import FIcon from 'react-native-vector-icons/Foundation'; 


const data = [
    { image: require("../../assets/sorrento.jpg"), name: 'John WWW', text: '974897' },
    { image: require("../../assets/sorrento.jpg"), name: 'DDD Doe', text: '974897' },
    { image: require("../../assets/sorrento.jpg"), name: 'JJJ Doe', text: '974897' },
  ];

const colors = {
    button: '#C51606',
  };

export default function MessageCustomer({ navigation, route }) {

    const openedChatBox = () => {
        navigation.navigate('ChatBoxView');
      };

    return ( 
        <View style={styles.container}>
            <View style = {styles.mainContainer}>
                <Text style = {styles.messageText}>Message</Text>
                <ScrollView>
                    {data.map((item, index) => (
                        <View key={index} style={styles.chatBoxView}>    
                            <TouchableOpacity style={styles.btnChatBox} onPress={openedChatBox}>
                                <View style={styles.frameChatBox}>
                                    <Image source={item.image} resizeMode="contain" style={styles.userImage}/>
                                    <View style = {styles.textContent}>
                                        <Text style = {styles.textUsername}>{item.name}</Text>
                                        <Text style = {styles.textChat}>{item.text}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    ))}
                </ScrollView>
            </View>    
            <View style={styles.bottomContainer}>
                <View style={styles.bottomNav}>
                <IconButton icon={props => <FIcon name="home" {...props} size={30}/>}
                                margin={8}
                                color="#AAACAE"
                                onPress={()=> navigation.navigate("HomepageCustomer", {...route.params})} />
                    <IconButton icon={props => <Icon name="chatbox-outline" {...props} size={30}/>}
                                margin={8}
                                color="#C51606"
                                onPress={()=> navigation.navigate("ChatBoxView", {...route.params})}/>
                    <IconButton icon={props => <Icon name="search" {...props} size={40}/>}
                        backgroundColor={colors.button}
                        padding={34}
                        color="white"
                        borderRadius={40}
                        // position="absolute"
                        marginBottom={10}
                        onPress={() =>navigation.navigate("SearchPage", {...route.params})}
                        />
                    <IconButton icon={props => <Icon name="notifications-outline" {...props} size={30}/>}
                                color='#AAACAE'
                                margin={8}
                                onPress={()=>navigation.navigate("NotificationCustomer", {...route.params})}/>
                    <IconButton icon={props => <Icon name="cart-outline"{...props} size={33}/>} 
                                color="#AAACAE"
                                margin={8}
                                onPress={()=>navigation.navigate("Cart", {...route.params})}/>
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
        paddingHorizontal: 10,
    },
    messageText: {
        padding: 10,
        paddingTop: 40,
        paddingLeft: 20,
        fontWeight: "bold",
        // fontFamily: "Montserrat-Bold",
        fontSize: 24,
        color: "#61481C"
    },
    chatBoxView: {
        padding: 10,
    },
    btnChatBox: {
        backgroundColor: 'white',
        borderRadius: 20,
    },
    frameChatBox: {
        flexDirection: 'row',
        padding: 10,
    },
    userImage: {
        width: 80,
        height: 80,
    },
    textContent: {
        paddingLeft: 10,
    },
    textChat: {
        padding: 5,
        marginTop: 5,
    },
    textUsername: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#61481C',
    },
    bottomContainer: {
		height: 80,
        borderTopLeftRadius: 20, 
        borderTopRightRadius: 20,
        backgroundColor: "white",
	},
	bottomNav: {
		width: "100%",
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
	},
});