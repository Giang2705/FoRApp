import React, { useState } from "react";
import {StyleSheet, Text, View, Image, TouchableOpacity, TextInput} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';


export default function AdminLoginPage({ navigation }) {
  const [adminAccount, setAdminAccount] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  
  const handleLogin = () => {
    // Perform login logic
    navigation.navigate('Dashbroad'); // Just for testing
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
            <Text style={styles.loginText}>Log in</Text>
          </View>
          
          <View style={styles.accountContainer}>
            <Icon name="user" size={25} style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Admin"
              onChangeText={text => setAdminAccount(text)}
              value={adminAccount}
            />
          </View>
          <View style={styles.passwordContainer}>
            <Icon name="lock" size={29} style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry
              onChangeText={text => setAdminPassword(text)}
              value={adminPassword}
            />
          </View>
        </View>

        <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
          <Text style={styles.loginBtnText}>Log in</Text>
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
    fontSize: 24,
    color: "#61481C",
    fontWeight: 'bold',
    borderBottomColor: '#61481C',  // Set the border color here
    borderBottomWidth: 1,      // Set the border width
    paddingHorizontal: 25,
    paddingBottom:10,
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
