import React, { useState } from "react";
import {StyleSheet, Text, View, Image, TouchableOpacity, TextInput} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import KeyboardAvoidingWrapper from "../utils/KeyboardAvoiding";
import axios from "axios"

export default function LoginPage({ navigation }) {
  const [inputData, setInputData] = useState({
    email: "",
    password: ""
  });

  // const [user, setUser] = useState({
  //   _id: "",
  //   name: "",
  //   email: "",
  //   password: "",
  //   credit: 0,
  //   cart: [],
  //   orders: [],
  // });

  const handleLogin = async () => {
    // Perform login logic
    const url = "http://localhost:3000/api/auth/login"

    await axios.post(url, inputData).then((response) => {
        const result = response.data;

        if (response.status == 200 && response.data.userType == "customer"){
          console.log(response.data)
          // setUser(result._id, result.name, result.email, result.password, result.credit, result.cart, result.orders)
          navigation.navigate('HomepageCustomer', {...result});
        } else if (response.status == 200 && response.data.userType == "shopOwner"){
          navigation.navigate('HomepageShopOwner');
        } else if (response.status == 401){
          alert(response.data);
        }
    })
    .catch((err) =>{
      alert(err);
    })
  };

  const handleSignup = () => {
    // Navigate to SignupPage
    navigation.navigate('SignupPage');
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
            <Text style={styles.loginText}>Log in</Text>
            <TouchableOpacity style={styles.buttonSignUp} onPress={handleSignup}>
              <Text style={styles.signupText}>Sign up</Text>
            </TouchableOpacity>
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

        <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
          <Text style={styles.loginBtnText}>Log in</Text>
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
    height: 300,
    backgroundColor:"#FFFFFF",
    borderRadius: 20,
  },
  buttonnContainer:{
    flexDirection: 'row',
  },
  loginText: {
    fontSize: 24,
    color: "#61481C",
    marginRight:35,
    fontWeight: 'bold',
    borderBottomColor: '#61481C',  // Set the border color here
    borderBottomWidth: 1,      // Set the border width
    paddingHorizontal: 25,
    paddingBottom:15,
  },
  signupText: {
    fontSize: 20,
    color: "#61481C",
    marginLeft:20,
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
  accountContainer:{
    flexDirection: 'row',
    padding:25,
    marginTop:30,
  },
  passwordContainer:{
    flexDirection: 'row',
    padding:5,
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