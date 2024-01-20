import React from 'react';
import { Stack, IconButton, Box, Avatar, Flex, Text } from '@react-native-material/core';
import {useTheme} from '@react-navigation/native';
import { View, TouchableOpacity, Button, Image } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import styles from './styles';
import axios from "axios";

export default function Setting({navigation, route})  {
    const colors = useTheme()
    const {email, name, credit, userType} = route.params;

    const handleLogout = async () => {
        // Perform login logic
        const url = "http://localhost:3000/api/auth/logout"

        await axios.post(url).then((response) => {
            if (response.status == 200){
                alert("Logged out!");
                navigation.navigate('LoginPage');
            } else if (response.status == 401){
                alert(response.data);
            }
        })
        .catch((err) =>{
            alert(err);
        })
    }
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
                    <TouchableOpacity style={styles.logoBackground} onPress={() => {userType == "customer" ? navigation.navigate("HomepageCustomer", {...route.params}) : userType == "shopOwner" ? navigation.navigate("HomepageShopOwner", {...route.params}) : userType == "staff" ? navigation.navigate("HomepageStaff", {...route.params}) : navigation.navigate("Dashboard", {...route.params})}}>
                        <Image source={require("../../assets/logo.png")} style={styles.logoButton}></Image>
                    </TouchableOpacity>
                    <IconButton icon={props => <Icon name="person" {...props} size={25} />} 
                                color='white'
                                backgroundColor="#C51606"
                                borderRadius={15}
                                style={styles.userButton}
                                onPress={() => navigation.navigate("Setting", {...route.params})}/>
                </View>
                <Stack spacing={8}>
                    <Box w="90%">
                        <Flex w="100%"
                            direction='row'>
                            <Box backgroundColor="white"
                            w="25%"
                            borderRadius={15}
                            elevation={3}
                            padding={10}>
                                <Image source={require("../../assets/avatar.jpg")} 
                                style={styles.imageAvatar}
                                />
                            </Box>
                            <Flex direction='column'
                                marginLeft={10}
                                paddingLeft={10}
                                paddingTop={20}
                                >
                                <Stack spacing={5}>
                                    <Text style={styles.userName}>{name || "May"}</Text>
                                    <Text style={styles.userInfo}>{email || "s3812345@rmit.edu.vn"}</Text>
                                    <Text style={styles.userInfo}>{"Credit points: " + (credit.toString() || 23) + " points"}</Text>
                                </Stack>
                            </Flex>
                        </Flex>
                    </Box>
                </Stack>
                <Stack spacing={15}>
                    <TouchableOpacity>
                        <Flex  marginLeft={7} direction='row'>
                                <Icon name="person-outline" color="#61481C" size={30} marginRight={10}/>
                                <Text style={styles.settingText}>Update Profile</Text>
                        </Flex>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("TopupCredit")}>
                        <Flex direction='row' marginLeft={7}>
                            <Icon name="card-outline" color="#61481C" size={30} marginRight={10}/>
                            <Text style={styles.settingText}>Add More Points</Text>
                        </Flex>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("UpdatePassword", {...route.params})}>
                        <Flex direction='row' marginLeft={7}>
                            <Icon name="lock-closed-outline" size={30} marginRight={10} color="#61481C"/>
                            <Text style={styles.settingText}>Change Password</Text>
                        </Flex>
                    </TouchableOpacity>
                </Stack>
                <Stack>
                    <TouchableOpacity onPress={handleLogout}> 
                        <Box backgroundColor="#C51605" style={styles.logoutButton}>
                            <Text style={styles.logoutText} color='white'>LOG OUT</Text>
                        </Box>
                    </TouchableOpacity>
                   
                </Stack>
            </Stack>
        </View>
    );
}