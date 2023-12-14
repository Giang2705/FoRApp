import React from 'react';
import { Stack, IconButton, Box, Avatar, Flex, Text } from '@react-native-material/core';
import {useTheme} from '@react-navigation/native';
import { View, TouchableOpacity, Button, Image } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import styles from './styles';

export default function Setting({navigation})  {
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
                    <Box w="90%">
                        <Flex w="100%"
                            direction='row'>
                            <Box backgroundColor="white"
                            w="28%"
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
                                    <Text style={styles.userName}>May</Text>
                                    <Text style={styles.userInfo}>s3812345@rmit.edu.vn</Text>
                                    <Text style={styles.userInfo}>Credit points: 23 points</Text>
                                </Stack>
                            </Flex>
                        </Flex>
                    </Box>
                </Stack>
                <Stack spacing={5}>
                    <TouchableOpacity>
                        <Flex direction='row'>
                            <IconButton icon={props => <Icon name="person-outline" {...props} />}
                                        color="#61481C"></IconButton>
                            <Text style={styles.settingText}>Update Profile</Text>
                        </Flex>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Flex direction='row'>
                            <IconButton icon={props => <Icon name="card-outline" {...props} />}
                                        color="#61481C"></IconButton>
                            <Text style={styles.settingText}>Add More Points</Text>
                        </Flex>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Flex direction='row'>
                            <IconButton icon={props => <Icon name="lock-closed-outline" {...props} />}
                                        color="#61481C"></IconButton>
                            <Text style={styles.settingText}>Change Password</Text>
                        </Flex>
                    </TouchableOpacity>
                </Stack>
                <Stack>
                    <TouchableOpacity>
                        <Box backgroundColor="#C51605" style={styles.logoutButton}>
                            <Text style={styles.logoutText} color='white'>LOG OUT</Text>
                        </Box>
                    </TouchableOpacity>
                   
                </Stack>
            </Stack>
        </View>
    );
}