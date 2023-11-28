import React, { useState } from "react";
import {StyleSheet, Text, View, Image, TouchableOpacity, TextInput} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

export default function SignupPage({ navigation }) {
  const [phoneNumber, setPhoneNum] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = () => {
    console.log('Username:', username);
    console.log('Password:', password);
  };

  const signupBtnPress = () => {
    // Logic for button press
    console.log('Signup button pressed');
  };

  const loginBtnPress = () => {
    // Logic for button press
    navigation.navigate('LoginPage');
  };

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Image
            source={require("../../images/logo.png")}
            style={styles.image}/>
        <Text style={styles.subtitle}>Fine words butter no parsnips</Text>
        <View style={styles.anothercontainer}>
          <View style={styles.buttonnContainer}>
          <TouchableOpacity style={styles.buttonSignUp} onPress={loginBtnPress}>
              <Text style={styles.loginText}>Log in</Text>
            </TouchableOpacity>
            <Text style={styles.signupText}>Sign up</Text>
          </View>
          
          <View style={styles.phoneNumContainer}>
            <Icon name="phone" size={25} style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Phone number"
              onChangeText={text => setPhoneNum(text)}
              value={phoneNumber}
            />
          </View>
          <View style={styles.accountContainer}>
            <Icon name="user" size={25} style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Email@rmit.edu.vn"
              onChangeText={text => setUsername(text)}
              value={username}
            />
          </View>
          <View style={styles.passwordContainer}>
            <Icon name="lock" size={29} style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry
              onChangeText={text => setPassword(text)}
              value={password}
            />
          </View>
        </View>

        <TouchableOpacity style={styles.loginBtn} onPress={signupBtnPress}>
          <Text style={styles.loginBtnText}>Sign up</Text>
        </TouchableOpacity>

      </View>
    </View>
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
  phoneNumContainer:{
    flexDirection: 'row',
    padding:15,
    marginTop:20,
  },
  accountContainer:{
    flexDirection: 'row',
    paddingBottom:10,
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
