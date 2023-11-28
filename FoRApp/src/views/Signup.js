import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

const Signup = () => {
  return (
    <View style={styles.container}>
    <View>
        <Text>Email</Text>
        <TextInput placeholder="Enter your email"/>
    </View>
    <View>
        <Text>Password</Text>
        <TextInput placeholder="Enter your password"/>
    </View>
    <View>
        <Text>Forgot password?</Text>
    </View>
    <View>
        <Text>Signup</Text>
    </View>
    <View>
        <Text>Login</Text>
    </View>
</View>
  )
}

export default Signup

const styles = StyleSheet.create({})