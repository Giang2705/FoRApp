import React, { useState } from "react";
import {StyleSheet, Text, View, Image, TouchableOpacity, TextInput} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import KeyboardAvoidingWrapper from "../utils/KeyboardAvoiding";
import axios from "axios";

export default function SignupPage({ navigation }) {
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
  });
  const [err, errMessage] = useState(null);

  const signupBtnPress = async () => {
    // Perform login logic
    const url = "http://localhost:3000/api/auth/register/customer"

    await axios.post(url, inputData).then((response) => {
        const result = response.data;
        if (response.status == 201){
          alert("Sign up successfully!");
          navigation.navigate('LoginPage');
        } else if (response.status == 401){
          alert(response.data);
        }
    })
    .catch((err) =>{
      alert(err);
    })
  };

  const loginBtnPress = () => {
    // Logic for button press
    navigation.navigate('LoginPage');
  };

  return (
    <KeyboardAvoidingWrapper>
<View style={styles.container}>
      <View style={styles.main}>
        <Image
            source={require("../../assets/logo.png")}
            style={styles.image}/>
        <Text style={styles.subtitle}>Fine words butter no parsnips</Text>
        <View style={styles.anothercontainer}>
          <View style={styles.buttonnContainer}>
          <TouchableOpacity style={styles.buttonSignUp} onPress={loginBtnPress}>
              <Text style={styles.loginText}>Log in</Text>
            </TouchableOpacity>
            <Text style={styles.signupText}>Sign up</Text>
          </View>
          
          <View style={styles.nameContainer}>
            <Icon name="id-card" size={23} style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Fullname"
              onChangeText={text => setInputData({...inputData, name: text})}
            />
          </View>
          <View style={styles.phoneNumContainer}>
            <Icon name="phone" size={25} style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Phone number"
              onChangeText={text => setInputData({...inputData, phoneNumber: text})}
            />
          </View>
          <View style={styles.accountContainer}>
            <Icon name="user" size={25} style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Email@rmit.edu.vn"
              onChangeText={text => setInputData({...inputData, email: text})}
            />
          </View>
          <View style={styles.passwordContainer}>
            <Icon name="lock" size={29} style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry
              onChangeText={text => setInputData({...inputData, password: text})}
            />
          </View>
        </View>

        <TouchableOpacity style={styles.loginBtn} onPress={signupBtnPress}>
          <Text style={styles.loginBtnText}>Sign up</Text>
        </TouchableOpacity>

      </View>
    </View>
    </KeyboardAvoidingWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    backgroundColor:"#F9F9C6",
  },
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    maxWidth: 960,
    marginHorizontal: "auto",

  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  subtitle: {
    fontSize: 20,
    padding: 16,
    color: "#38434D",
  },
  anothercontainer:{
    alignItems: "center",
    marginTop: 20,
    padding: 20,
    width: 300,
    height: 340,
    backgroundColor:"#FFFFFF",
    borderRadius: 20,
  },
  buttonnContainer:{
    flexDirection: 'row',
  },
  loginText: {
    fontSize: 20,
    color: "#61481C",
    marginLeft:15,
  },
  signupText: {
    fontSize: 24,
    color: "#61481C",
    marginLeft: 45,
    fontWeight: 'bold',
    borderBottomColor: '#61481C',
    borderBottomWidth: 1,      
    paddingHorizontal: 25,
    paddingBottom:15,
  },
  loginBtn: {
    marginTop: 50,
  },
  loginBtnText:{
    paddingHorizontal:25,
    paddingVertical:10,
    color: "#ffffff",
    fontSize: 24,
    fontWeight: 'bold',
    backgroundColor: "#C51605",
    borderRadius: 18,
  },
  nameContainer:{
    flexDirection: 'row',
    marginTop:30,
  },
  phoneNumContainer:{
    flexDirection: 'row',
    padding:10,
  },
  accountContainer:{
    flexDirection: 'row',
    padding:10,
  },
  passwordContainer:{
    flexDirection: 'row',
    padding:10,
  },
  icon:{
    color:"#860A35",
    marginRight:20,
  },
  input: {
    height: 40,
    width: 180,
    borderBottomColor: '#E4E2CF',
    borderBottomWidth: 1, 
    paddingHorizontal: 10,
  },
});