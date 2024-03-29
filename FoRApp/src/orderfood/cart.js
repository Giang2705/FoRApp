import React, { useState } from 'react';
import {View, Image, TextInput,
        KeyboardAvoidingView, Platform} from 'react-native';
import styles from '../customers/styles';
import { IconButton, Stack, Text } from '@react-native-material/core';
import { useTheme } from '@react-native-material/core';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from "react-native-vector-icons/Ionicons";
import OIcon from "react-native-vector-icons/Octicons";
import { Box, Flex } from '@react-native-material/core';
import FIcon from 'react-native-vector-icons/Foundation'; 

const colors = {
    button: '#C51606',
  };

const Cart = ({navigation, route}) => {
    const data = [{image: require("../../assets/restaurant1.jpg"), name: "Sorento", itemsNum: 2, total: 40},
                    {image: require("../../assets/restaurant2.jpeg"), name: "Nine", itemsNum: 4, total: 100}]
    return (
        <View>
            <Stack
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
                <View>
                    <Stack spacing={10}>
                        {data.map((item, index) => (
                        <TouchableOpacity onPress={() => navigation.navigate("PlaceOrder")}>
                            <Box 
                            backgroundColor="white"
                            w="90%"
                            borderRadius={15}
                            key={index}>
                                <Flex items="center"
                                    direction='row'
                                    w="100%"
                                    padding={5}>
                                    <Image source={item.image} style={styles.imageFood}/>
                                    <Stack spacing={5} margin={10}>
                                        <Text style={{
                                            fontSize: 15,
                                            fontFamily: "Montserrat-SemiBold",
                                            color: "#61481C",
                                        }}>{item.name}</Text>
                                        <Text style={{
                                            fontSize: 13,
                                            color: "#61481C",
                                            fontFamily: "Montserrat",
                                        }}>{item.itemsNum} items</Text>
                                        <Text style={{
                                            fontSize: 13,
                                            color: "#C51605",
                                            fontFamily: "Montserrat-Medium"
                                        }}>{item.total} points</Text>
                                    </Stack>
                                </Flex>
                            </Box>
                        </TouchableOpacity>
                    ))}
                    </Stack>
                </View>
            </Stack>
            <View style={styles.bottomContainer}>
                <View style={styles.bottomNav}>
                <IconButton icon={props => <FIcon name="home" {...props} size={30}/>}
                                margin={8}
                                color="#AAACAE"
                                onPress={()=> navigation.navigate("HomepageCustomer", {...route.params})} />
                    <IconButton icon={props => <Icon name="chatbox-outline" {...props} size={30}/>}
                                margin={8}
                                color="#AAACAE"
                                onPress={()=> navigation.navigate("ChatBoxView", {...route.params})}/>
                    <IconButton icon={props => <Icon name="search" {...props} size={40}/>}
                        backgroundColor={colors.button}
                        padding={34}
                        color="white"
                        borderRadius={40}
                        // position="absolute"
                        marginBottom={10}
                        onPress={() =>navigation.navigate("SearchPage", {...route.params})}
                        />
                    <IconButton icon={props => <Icon name="notifications-outline" {...props} size={30}/>}
                                color='#C51606'
                                margin={8}
                                onPress={()=>navigation.navigate("NotificationCustomer", {...route.params})}/>
                    <IconButton icon={props => <Icon name="cart-outline"{...props} size={33}/>} 
                                color="#AAACAE"
                                margin={8}
                                onPress={()=>navigation.navigate("Cart", {...route.params})}/>
                </View>
            </View>
        </View>
    );
}


export default Cart;