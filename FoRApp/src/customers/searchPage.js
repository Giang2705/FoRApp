import React, { useState } from 'react';
import {View, Image, TextInput,
        KeyboardAvoidingView, Platform} from 'react-native';
import styles from './styles';
import { IconButton, Stack, Text } from '@react-native-material/core';
import { useTheme } from '@react-native-material/core';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from "react-native-vector-icons/Ionicons"
import MIcon from "react-native-vector-icons/MaterialCommunityIcons"
import FIcon from 'react-native-vector-icons/Foundation'; 
import { Box, Flex } from '@react-native-material/core';

const SearchPage = ({navigation}) => {
    return (
        <View>
            <Stack
            // backgroundColor={colors.background}
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
                                color='#C51606'
                                backgroundColor="white"
                                borderRadius={15}
                                style={styles.userButton}
                                onPress={() => navigation.navigate("Setting")}/>
                </View>
                <Box 
                backgroundColor="white"
                borderRadius={25}
                w="90%">
                    <Flex direction='row'>
                        <Icon padding={8} name="search" size={20} color="#C51605"/>
                        <TextInput placeholder='Search' placeholderTextColor="#61481C" style={styles.searchText}/>
                    </Flex>
                </Box>
                <View marginLeft={5}>
                    <Text style={styles.header}>Recent Searches</Text>
                    <Stack spacing={8}
                    marginLeft={5}>
                        <TouchableOpacity>
                            <Flex direction='row' alignItems="center">
                                <MIcon name="history" size={25} color="#61481C"/>
                                <Text style={{
                                    alignContent: "center",
                                    fontFamily: "Montserrat-Medium",
                                    margin: 3,
                                    color: "#61481C"
                                }}>La Cantina</Text>
                            </Flex>
                        </TouchableOpacity>
                    </Stack>
                </View>
            </Stack>
            <View style={styles.bottomContainer}>
                <View style={styles.bottomNav}>
                    <IconButton icon={props => <FIcon name="home" {...props} size={30}/>}
                                margin={8}
                                color="#C51606"
                                onPress={()=> navigation.navigate()} />
                    <IconButton icon={props => <Icon name="chatbox-outline" {...props} size={30}/>}
                                margin={8}
                                color="#AAACAE"
                                onPress={()=> navigation.navigate()}/>
                    <IconButton icon={props => <Icon name="search" {...props} size={40}/>}
                        // backgroundColor={colors.button}
                        backgroundColor="#C51605"
                        padding={34}
                        color="white"
                        borderRadius={40}
                        // position="absolute"
                        marginBottom={10}
                        onPress={() =>navigation.goBack()}
                        />
                    <IconButton icon={props => <Icon name="notifications-outline" {...props} size={30}/>}
                                color='#AAACAE'
                                margin={8}
                                onPress={()=>navigation.navigate()}/>
                    <IconButton icon={props => <Icon name="cart-outline"{...props} size={33}/>} 
                                color="#AAACAE"
                                margin={8}
                                onPress={()=>navigation.navigate()}/>
                </View>
            </View>
        </View>
    );
}



export default SearchPage;
