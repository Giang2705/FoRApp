import React,{ useState } from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image, TextInput} from "react-native";

export default function AddRestaurant({ navigation }) {
    
    const [restaurantEmail, setRestaurantEmail] = useState('');
    const [resPhoneNum, setResPhoneNum] = useState('');
    const [restaurantName, setRestaurantName] = useState('');
    const [restaurantRole, setRestaurantRole] = useState('');

    const adding = () => {
        navigation.navigate('RestaurantList');
    };
    const canceling = () => {
        navigation.navigate('RestaurantList');
    };
    

    return (
        <View style={styles.container}>
            <View style={styles.boxForm}>
                <View style={styles.frameInput}>
                    <Text style={styles.textView}>Restaurant Name</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Name"
                        onChangeText={text => setRestaurantName(text)}
                        value={restaurantName}/>
                </View>
                <View style={styles.frameInput}>
                    <Text style={styles.textView}>Email</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="restaurant@rmit.edu.vn"
                        onChangeText={text => setRestaurantEmail(text)}
                        value={restaurantEmail}/>
                </View>
                <View style={styles.frameInput}>
                    <Text style={styles.textView}>Phone Number</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Phone Number"
                        onChangeText={text => setResPhoneNum(text)}
                        value={resPhoneNum}/>
                </View>
                <View style={styles.frameInput}>
                    <Text style={styles.textView}>Role</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Role"
                        onChangeText={text => setRestaurantRole(text)}
                        value={restaurantRole}/>
                </View>
            </View>
            <View style={styles.containerBtns}>
                    <TouchableOpacity style={styles.cancelBtn} onPress={adding}>
                        <Text style={styles.cancalText}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.addBtn} onPress={canceling}>
                        <Text style={styles.addText}>Add</Text>
                    </TouchableOpacity>
                </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#F9F9C6",
        alignItems: "center",
        padding: 24,
    },
    boxForm:{
        alignItems: "center",
        marginTop: 100,
        padding: 40,
        width: 'auto',
        height: 'auto',
        backgroundColor:"#FFFFFF",
        borderRadius: 20,
    },
    frameInput: {
        flexDirection: 'row',
        padding: 20,
    },
    input: {
        flex: 1, 
        borderColor: 'gray',
        fontSize:20,
        borderWidth: 1,
        borderRadius: 5,
        height: 50,
        paddingHorizontal: 20,
    },
    textView: {
        width: 180,
        padding: 10,
        fontSize: 20,
    },
    containerBtns: {
        flexDirection: 'row',
        padding:20,
    },
    cancelBtn: {
        padding: 10,
        paddingHorizontal: 10,
    },
    cancalText: {
        backgroundColor: "#C51605",
        color: "#ffffff",
        fontSize: 24,
        padding: 8,
        borderRadius: 10,
    },
    addBtn: {
        padding: 10,
        paddingHorizontal: 10,
    },
    addText: {
        backgroundColor: "gray",
        color: "#ffffff",
        fontSize: 24,
        padding: 8,
        paddingHorizontal:25,
        borderRadius: 10,
    },

})