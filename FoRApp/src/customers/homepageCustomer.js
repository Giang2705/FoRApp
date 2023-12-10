import React from 'react';
import {  Image, View, ScrollView } from 'react-native';
import { useTheme } from '@react-navigation/native';
// import { ScrollView } from 'react-native-gesture-handler';
import styles from "./styles";
import SIcon from 'react-native-vector-icons/SimpleLineIcons';
import { Avatar, Box, Stack, Text, Flex, IconButton } from "@react-native-material/core";
import FIcon from 'react-native-vector-icons/Foundation'; 
import Icon from 'react-native-vector-icons/Ionicons'; 

export default function HomepageCustomer({navigation}) {
    const {colors} = useTheme();
    return (
        <View>
        <Stack
            backgroundColor={colors.background}
            h="100%"
            w="100%"
            // items="center"
            paddingTop={45}
            marginLeft = {20}
            spacing={20}
        >
            <ScrollView >
            <Text>Restaurant</Text>
            <Stack w="100%" spacing={20} >
            <ScrollView horizontal={true}>
                
                    <Box elevation={3}
                        backgroundColor="white"
                        // style={styles.cardContainer}
                        w="100%"
                        key="restaurant"
                        alignSelf="center"
                        
                    >
                        <Flex w="100%"
                        items= "center"
                        direction="column"
                        padding="5"
                        >
                            <IconButton style={styles.image}
                                icon= {props => <SIcon name="picture" size={25} color={colors.button} />}
                                imageStyle={{borderRadius: 10}} 
                            />
                            {/* <Image source={require("../../assets/sorrento.jpg")} style = {styles.image}/> */}
                            <View
                            spacing={10}
                            w="58%"
                            // padding="5"
                            >
                                <Text style={styles.header}>Sorrento</Text>
                                <Text style={styles.text}>Building 10 - Floor 2</Text>
                            </View>
                        </Flex>
                    </Box>
                    <Box elevation={3}
                        backgroundColor="white"
                        style={styles.cardContainer}
                        w="100%"
                        key="restaurant1"
                    >
                        <Flex w="100%"
                        items= "center"
                        direction="column"
                        >
                            <IconButton style={styles.image}
                                icon= {props => <SIcon name="picture" size={25} color={colors.button} />}
                                imageStyle={{borderRadius: 10}} 
                            />
                            {/* <Image source={require("../../assets/sorrento.jpg")}
                                    style = {styles.image}/> */}
                            <View
                            spacing={5}
                            w="58%"
                            >
                                <Text style={styles.header}>Lygon</Text>
                                <Text style={styles.text}>Building 1 - Floor 2</Text>
                            </View>
                        </Flex>
                    </Box>
                    </ScrollView>
                </Stack>
               
                    
            
            <Text padding={10}>What's New Today?</Text>
            
            
            <Stack w="100%" spacing={20} >
                    <Box elevation={3}
                        backgroundColor="white"
                        style={styles.cardContainer}
                        w="100%"
                        key="restaurant"
                        
                    >
                        <Flex w="100%"
                        items= "center"
                        direction="row"
                        >
                            <IconButton 
                                icon= {props => <SIcon name="picture" size={25} color={colors.button} />}
                                imageStyle={{borderRadius: 10}} 
                            />
                            {/* <Image source={require("../../assets/sorrento.jpg")} style = {styles.image}/> */}
                            <Stack
                            spacing={5}
                            w="58%"
                            >
                                <Text style={styles.header}>Chicken Pesto</Text>
                                <Text style={styles.text}>Sorrento</Text>
                                <Text style={styles.text}>Opening Hours: 10 AM - 4 PM</Text>
                            </Stack>
                        </Flex>
                    </Box>
                    <Box elevation={3}
                        backgroundColor="white"
                        style={styles.cardContainer}
                        w="100%"
                        key="restaurant1"
                    >
                        <Flex w="100%"
                        items= "center"
                        direction="row"
                        >
                            <IconButton 
                                icon= {props => <SIcon name="picture" size={25} color={colors.button} />}
                                imageStyle={{borderRadius: 10}} 
                            />
                            {/* <Image source={require("../../assets/sorrento.jpg")}
                                    style = {styles.image}/> */}
                            <View
                            spacing={5}
                            w="58%"
                            >
                                <Text style={styles.header}>Chicken Pesto</Text>
                                <Text style={styles.text}>Sorrento</Text>
                                <Text style={styles.text}>Opening Hours: 10 AM - 4 PM</Text>
                            </View>
                        </Flex>
                    </Box>
                    </Stack>
                
                
                </ScrollView>
        </Stack>
        <View style={styles.bottomContainer}>
                    <View style={styles.bottomNav}>
                        <IconButton icon={props => <FIcon name="home" {...props}/>}
                                    color="#C51605"
                                    style={{
                                        alignSelf:"center",
                                        // overflow: "hidden",
                                        padding: 25,
                                        backgroundColor: "transparent",
                                        borderRadius: 10,
                                        // margin: 10,
                                        // ...styles.shawdowBtn
                                    }}
                                    onPress={() => navigation.navigate("")} />
                        <IconButton icon={props => <Icon name="chatbox-outline" {...props}/>}
                                    color="#AAACAE"
                                    style={{
                                        alignSelf:"center",
                                        // overflow: "hidden",
                                        padding: 25,
                                        backgroundColor: "transparent",
                                        borderRadius: 10,
                                        // margin: 10,
                                        // ...styles.shawdowBtn
                                    }}
                                    onPress={() => navigation.navigate()} />
                    </View>
                </View>
        </View>
    );
}


