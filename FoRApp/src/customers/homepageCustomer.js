import React from 'react';
import {  Image, View, ScrollView } from 'react-native';
import { useTheme } from '@react-navigation/native';
// import { ScrollView } from 'react-native-gesture-handler';
import styles from "./styles";
import { SimpleLineIcons } from '@expo/vector-icons';
import { Avatar, Box, Stack, Icon, Text, Flex, IconButton } from "@react-native-material/core";

export default function HomepageCustomer() {
    const {colors} = useTheme();
    return (
        <Stack
            backgroundColor={colors.background}
            h="100%"
            w="100%"
            // items="center"
            paddingTop={45}
            marginLeft = {20}
            spacing={20}
        >
            <Text>Restaurant</Text>
            <Stack w="100%" spacing={20} >
            <ScrollView horizontal={true}>
                
                    <Box elevation={3}
                        backgroundColor="white"
                        style={styles.cardContainer}
                        w="100%"
                        key="restaurant"
                        
                    >
                        <Flex w="100%"
                        items= "center"
                        direction="column"
                        >
                            <IconButton style={styles.image}
                                icon= {props => <SimpleLineIcons name="picture" size={50} color={colors.button} />}
                                imageStyle={{borderRadius: 10}} 
                            />
                            {/* <Image source={require("../../assets/sorrento.jpg")} style = {styles.image}/> */}
                            <View
                            spacing={5}
                            w="58%"
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
                                icon= {props => <SimpleLineIcons name="picture" size={50} color={colors.button} />}
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
               
                    
            
            <Text>What's New Today?</Text>
            
            <ScrollView style = {styles.listContainer}>
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
                            <IconButton style={styles.image}
                                icon= {props => <SimpleLineIcons name="picture" size={50} color={colors.button} />}
                                imageStyle={{borderRadius: 10}} 
                            />
                            {/* <Image source={require("../../assets/sorrento.jpg")} style = {styles.image}/> */}
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
                            <IconButton style={styles.image}
                                icon= {props => <SimpleLineIcons name="picture" size={50} color={colors.button} />}
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
                <View style={styles.bottomContainer}>
                    <View>
                        <IconButton></IconButton>
                    </View>
                </View>
        </Stack>
    );
}


