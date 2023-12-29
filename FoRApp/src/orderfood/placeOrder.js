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

const PlaceOrder = ({navigation}) => {
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
                <View marginLeft={5}>
                    <Text style={styles.header}>Your Order</Text>
                    <Stack spacing={7}>
                        <Box>
                            <TouchableOpacity>
                                <Box style={{
                                    backgroundColor: "white",
                                    width: '20%',
                                    borderRadius: 15
                                }}>
                                    <Image source={require("../../assets/logo.png")} 
                                    style={{
                                        width: '100%',
                                        height: 50,
                                        resizeMode: "center",
                                        borderRadius: 10,
                                        marginTop: 8,
                                        marginBottom: 5
                                    }}/>
                                </Box>
                            </TouchableOpacity>
                        </Box>
                    </Stack>
                </View>
            </Stack>
        </View>
    );
}


export default PlaceOrder;
