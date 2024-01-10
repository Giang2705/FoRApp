import React from 'react';
import { View, StyleSheet, ScrollView, Text, TouchableOpacity, Image, TextComponent } from "react-native";
import { IconButton } from "@react-native-material/core";
import Icon from 'react-native-vector-icons/Ionicons';
import OIcon from "react-native-vector-icons/Octicons";

const data = [
    { image: require("../../images/147137.png"), name: 'fOOD1', price: 65000 , quantity: 1, order: 'Orderred by user 1'},
    { image: require("../../images/147142.png"), name: 'FOOD 123', price: 400000, quantity: 6, order: 'Orderred by user 3' },
    { image: require("../../images/557643.png"), name: 'F', price: 250000, quantity: 4, order: 'Orderred by user 7' },
  ];

const colors = {
    button: '#C51606',
  };

export default function NotificationShopowner({ navigation }) {


    return ( 
        <View style={styles.container}>
            <View style = {styles.mainContainer}>
                <Text style = {styles.notificationText}>Notification</Text>
                <ScrollView>
                    {data.map((item, index) => (
                        <View key={index} style={styles.boxView}>    
                            <View style={styles.frameBox}>
                                <Image source={item.image} resizeMode="contain" style={styles.foodImage}/>
                                <View style = {styles.textContent}>
                                    <Text style = {styles.textNameFood}>{item.name}</Text>
                                    <Text style = {styles.textPrice}>{item.quantity} * {item.price}</Text>
                                    <Text style = {styles.textPlace}>{item.order}</Text>
                                </View>
                            </View>
                        </View>
                    ))}
                </ScrollView>
            </View>    
            <View style={styles.bottomContainer}>
                <View style={styles.bottomNav}>
                    <IconButton icon={props => <Icon name="chatbox-outline" {...props} size={30}/>}
                                margin={8}
                                color="#AAACAE"
                                onPress={()=> navigation.navigate()}/>
                    <IconButton icon={props => <Icon name="search" {...props} size={40}/>}
                        backgroundColor={colors.button}
                        padding={34}
                        color="white"
                        borderRadius={40}
                        marginBottom={10}
                        onPress={() =>navigation.navigate("SearchPage")}
                        />
                    <IconButton icon={props => <Icon name="notifications" {...props} size={30}/>}
                                color='#C51606'
                                margin={8}
                                onPress={()=>navigation.navigate()}/>
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
    notificationText: {
        padding: 10,
        paddingTop: 40,
        paddingLeft: 20,
        fontWeight: "bold",
        // fontFamily: "Montserrat-Bold",
        fontSize: 24,
        color: "#61481C"
    },
    boxView: {
        padding: 10,
    },
    frameBox: {
        backgroundColor: 'white',
        borderRadius: 20,
        flexDirection: 'row',
        padding: 10,
    },
    foodImage: {
        width: 80,
        height: 80,
    },
    textContent: {
        paddingLeft: 10,
    },
    textPrice: {
        padding: 5,
        marginTop: 5,
    },
    textPlace:{
        color: '#C51605',
        padding: 5,
    },
    textNameFood: {
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