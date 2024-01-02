import React,{ useState } from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image, TextInput} from "react-native";
import * as ImagePicker from 'expo-image-picker';


export default function EditRestaurant({ navigation }) {
    const [image, setImage] = useState(null);

    const [nameRestaurant, setNameRestaurant] = useState('');
    const [phoneNum, setPhoneNum] = useState('');
    

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.canceled) {
          setImage(result.assets[0].uri);
        }
      };

    return
}

const styles = StyleSheet.create({
    
});