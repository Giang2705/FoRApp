import React, { useState } from 'react';
import {View, Image, TextInput,
        KeyboardAvoidingView, Platform} from 'react-native';
import styles from './styles';
import { IconButton, Stack, Text } from '@react-native-material/core';
import { useTheme } from '@react-native-material/core';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from "react-native-vector-icons/Ionicons"
import { Box, Flex } from '@react-native-material/core';

const UpdatePassword = ({navigation}) => {
    const colors = useTheme()
    return (
        <View>
            <Stack
            backgroundColor={colors.background}
            h="100%"
            w="100%"
            // items="center"
            paddingTop={45}
            marginLeft = {20}
            spacing={20}>
                <View>
                    <TouchableOpacity style={styles.logoBackground} onPress={() => navigation.navigate("HomepageCustomer")}>
                        <Image source={require("../../assets/logo.png")} style={styles.logoButton}></Image>
                    </TouchableOpacity>
                    <IconButton icon={props => <Icon name="person" {...props} size={25} />} 
                                color='white'
                                backgroundColor="#C51606"
                                borderRadius={15}
                                style={styles.userButton}
                                onPress={() => navigation.navigate("Setting")}/>
                </View>
                <Stack spacing={8}>
                    <Box backgroundColor="transparent"
                        w="25%"
                        borderRadius={15}
                        padding={10}
                        marginTop={-25}
                        style={{
                            alignSelf:"center"
                        }}>
                            <Image source={require("../../assets/avatar.jpg")} 
                            style={styles.imageAvatar}
                            />
                            
                    </Box>
                    <Text style={{
                        fontFamily: "Montserrat-Medium",
                        color: "#61481C",
                        alignSelf: "center",
                        fontSize: 14
                    }}>Credit points: 23 points</Text>
                </Stack>
                <Box
                backgroundColor="white"
                h="100%"
                marginLeft={-19}
                w="100%"
                elevation={4}
                borderRadius={30}>
                    <Stack spacing={10}
                    style={{
                        margin: 30,
                    }}>
                        <Text style={styles.passwordTitle}>Current Password</Text>
                        <TextInput secureTextEntry={true} placeholderTextColor='#61481C'
                        placeholder='Current password'
                        style={styles.passwordInput}
                        />
                        <Text style={styles.passwordTitle}>New Password</Text>
                        <TextInput secureTextEntry={true} placeholderTextColor='#61481C'
                        placeholder='New password'
                        style={styles.passwordInput}
                        />
                        <Text style={styles.passwordTitle}>Confirm New Password</Text>
                        <TextInput secureTextEntry={true} placeholderTextColor='#61481C'
                        placeholder='Confirm new password'
                        style={styles.passwordInput}
                        />
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Box 
                            style={{
                                backgroundColor: "#C51605",
                                borderRadius: 25,
                                width: "80%",
                                alignSelf: "center",
                                height: 40,
                                marginTop: 10
                            }}>
                                <Text style={{
                                    paddingTop: 5,
                                    paddingBottom:8,
                                    fontFamily: "Montserrat-SemiBold",
                                    fontSize: 18,
                                    // paddingRight: 10,
                                    // paddingLeft: 10,
                                    alignSelf: "center",
                                    color: "white",
                                    lineHeight: 30
                                }}>Save</Text>
                            </Box>
                        </TouchableOpacity>
                    </Stack>
                </Box>
            </Stack>
        </View>
    );
}


export default UpdatePassword;
