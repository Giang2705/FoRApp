import React from 'react';
import { View, StyleSheet, ScrollView, Text, TouchableOpacity, Image, TextComponent } from "react-native";
import { IconButton } from "@react-native-material/core";
import Icon from 'react-native-vector-icons/Ionicons';
import OIcon from "react-native-vector-icons/Octicons";

const data = [
    { image: require("../../assets/sorrento.jpg"), name: 'fOOD1', price: 65000 , quantity: 1, situation: 'Already'},
    { image: require("../../assets/sorrento.jpg"), name: 'FOOD 123', price: 400000, quantity: 6, situation: 'Processing' },
    { image: require("../../assets/sorrento.jpg"), name: 'F', price: 250000, quantity: 4, situation: 'Processing' },
  ];

const colors = {
    button: '#C51606',
  };

export default function NotificationCustomer({ navigation }) {

    const movingOrderHistory = () => {
        navigation.navigate('OrderHistoryCustomer');
      };

    return ( 
        <View style={styles.container}>
            <View style = {styles.mainContainer}>
                <View style={styles.frameTittle}>
                    <TouchableOpacity onPress={movingOrderHistory}>
                        <Text style = {styles.orderText}>Order History</Text>
                    </TouchableOpacity>

                    <Text style = {styles.notificationText}>Notification</Text>
                </View>
                <ScrollView>
                    {data.map((item, index) => (
                        <View key={index} style={styles.boxView}>    
                            <View style={styles.frameBox}>
                                <Image source={item.image} resizeMode="contain" style={styles.foodImage}/>
                                <View style = {styles.textContent}>
                                    <Text style = {styles.textNameFood}>{item.name}</Text>
                                    <Text style = {styles.textPrice}>{item.quantity} * {item.price}</Text>
                                    <Text style = {styles.textPlace}>{item.situation}</Text>
                                </View>
                            </View>
                        </View>
                    ))}
                </ScrollView>
            </View>    
            <View style={styles.bottomContainer}>
                <View style={styles.bottomNav}>
                    <IconButton icon={props => <OIcon name="home" {...props} size={30}/>}
                                margin={8}
                                color="#AAACAE"
                                onPress={()=> navigation.navigate()} />
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
                    <IconButton icon={props => <Icon name="cart-outline" {...props} size={33}/>} 
                                color="#AAACAE"
                                margin={8}
                                onPress={()=>navigation.navigate("Cart")}/>
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
    frameTittle:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    notificationText: {
        padding: 10,
        paddingTop: 40,
        paddingLeft: 20,
        fontWeight: "bold",
        // fontFamily: "Montserrat-Bold",
        fontSize: 20,
        color: "#61481C",
        borderBottomColor: '#61481C',  // Set the border color here
        borderBottomWidth: 1,      // Set the border width
        paddingHorizontal: 20,
        paddingBottom:15,
    },
    orderText:{
        padding: 10,
        paddingTop: 40,
        paddingLeft: 20,
        fontWeight: "bold",
        // fontFamily: "Montserrat-Bold",
        fontSize: 20,
        color: "rgba(97, 72, 28, 0.5)",
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