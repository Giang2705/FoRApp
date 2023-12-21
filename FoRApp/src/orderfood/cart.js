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

const Cart = ({navigation}) => {
    const data = [{image: require("../../assets/sorrento.jpg"), name: "Sorento", itemsNum: 2, total: 40},
                    {image: require("../../assets/sorrento.jpg"), name: "Nine", itemsNum: 4, total: 100}]
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
                    <IconButton icon={props => <OIcon name="home" {...props} size={28}/>}
                                margin={8}
                                color="#AAACAE"
                                onPress={()=> navigation.navigate("HomepageCustomer")} />
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
                    <IconButton icon={props => <Icon name="cart"{...props} size={33}/>} 
                                color="#C51605"
                                margin={8}
                                onPress={()=>navigation.navigate("Cart")}/>
                </View>
            </View>
        </View>
    );
}


export default Cart;
