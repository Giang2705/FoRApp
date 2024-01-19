import React,{ useState } from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image, TextInput, ImageBackground} from "react-native";
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

    console.warn = () => {};

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    } else {
      console.log("Image picker was cancelled");
    }
  };

  const updating = () => {
    navigation.navigate('');
  };
  
  const canceling = () => {
      navigation.navigate('');
  };

  return(
    <View style={styles.container}>
      {image ? (
      <ImageBackground source={{ uri: image  }} style={styles.backgroundImage}>
        <View style={styles.headerContainer}>
          <TouchableOpacity style={styles.updateIconImage} onPress={pickImage}>
            <Image source={require('../../assets/pork.jpeg')} style={styles.iconImage} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
      ) : ( 
      <ImageBackground source={require('../../assets/sorrento.jpg')} style={styles.backgroundImage}>
        <View style={styles.headerContainer}>
          <TouchableOpacity style={styles.updateIconImage} onPress={pickImage}>
            <Image source={require('../../assets/sorrento.jpg')} style={styles.iconImage} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
      )}
      <View style={styles.boxForm}>
        <TextInput 
          style={styles.input}
          placeholder="Name Restaurant"
          onChangeText={text => setNameRestaurant(text)}
          value={nameRestaurant}/>
        <View style={styles.framePhoneNum}>
          <Text style={styles.textContent}>+84</Text>
          <TextInput style={[styles.input, styles.inputNum]}
          placeholder="Number"
          onChangeText={text => setPhoneNum(text)}
          value={phoneNum}/>
        </View>
        <View style={styles.buttonView}>
          <TouchableOpacity style={styles.cancelBtn} onPress={canceling}>
              <Text style={styles.cancalText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.updateBtn} onPress={updating}>
              <Text style={styles.updateText}>Update</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#F9F9C6",
    alignItems: "center",
  },
  backgroundImage:{
    height: 250,
    width: "100%",
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },
  headerContainer:{
    alignItems: 'flex-end',
    padding: 10,
    marginEnd: 20,
  },
  updateIconImage: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 20,
    padding: 10,
  },
  iconImage: {
    width: 30,
    height: 30,
    tintColor: '#fff',
  },
  boxForm:{
    flex: 1,
    alignItems: "center",
    width: '100%',
    borderTopLeftRadius: 30, 
    borderTopRightRadius: 30,
    backgroundColor: 'white',
    padding: 20,
  },
  framePhoneNum:{
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  input:{
    height: 40,
    width: 235,
    borderWidth: 1,
    borderColor: '#C31B0A',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  textContent:{
    padding: 10,
    borderWidth: 1,
    borderColor: '#C31B0A',
    borderRadius: 10,
  },
  inputNum:{
    width: 180,
    marginLeft: 10,
  },
  buttonView: {
    flexDirection: 'row',
    padding:20,
  },
  cancelBtn: {
      paddingHorizontal: 10,
  },
  cancalText: {
      backgroundColor: "#C51605",
      color: "#ffffff",
      fontSize: 20,
      padding: 8,
      borderRadius: 10,
  },
  updateBtn: {
      paddingHorizontal: 10,
  },
  updateText: {
      backgroundColor: "gray",
      color: "#ffffff",
      fontSize: 20,
      padding: 8,
      paddingHorizontal:12,
      borderRadius: 10,
  },
});