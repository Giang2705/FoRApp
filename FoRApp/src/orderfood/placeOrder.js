import React, { useState } from 'react';
import {View, Image, TextInput,
        KeyboardAvoidingView, Platform} from 'react-native';
import styles from '../customers/styles';
import { IconButton, Stack, Text } from '@react-native-material/core';
import { useTheme } from '@react-native-material/core';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from "react-native-vector-icons/Ionicons";
import OIcon from "react-native-vector-icons/Octicons";
import MIcon from "react-native-vector-icons/MaterialCommunityIcons";
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
                    <Stack spacing={20}>
                        <Box w="88%">
                            <TouchableOpacity>
                                <Flex
                                direction='row'
                                justifyContent='space-between'>
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
                                    <Stack spacing={5} 
                                    style={{
                                        marginLeft: -120,
                                        alignSelf: "center"
                                        }}>
                                            <Text style={{
                                                fontFamily: "Montserrat-Medium",
                                                color: "#61481C",
                                            }}>Hamburger</Text>
                                            <Text style={{
                                                fontFamily: "Montserrat-Medium",
                                                color: "#61481C",
                                            }}>1 * 45.000</Text>
                                    </Stack>
                                    <MIcon name="pencil" size={25} color="#61481C" style={{
                                        alignSelf: 'center',
                                    }} />
                                </Flex>
                            </TouchableOpacity>
                        </Box>
                        <Box w="88%">
                            <TouchableOpacity>
                                <Flex
                                direction='row'
                                justifyContent='space-between'>
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
                                    <Stack spacing={5} 
                                    style={{
                                        marginLeft: -120,
                                        alignSelf: "center"
                                        }}>
                                            <Text style={{
                                                fontFamily: "Montserrat-Medium",
                                                color: "#61481C",
                                            }}>Hamburger</Text>
                                            <Text style={{
                                                fontFamily: "Montserrat-Medium",
                                                color: "#61481C",
                                            }}>1 * 45.000</Text>
                                    </Stack>
                                    <MIcon name="pencil" size={25} color="#61481C" style={{
                                        alignSelf: 'center',
                                    }} />
                                </Flex>
                            </TouchableOpacity>
                        </Box>
                        <Stack spacing={8}>
                            <Text style={styles.header}>Pick-up Time Slot</Text>
                            <Flex direction='row'  w="88%" justifyContent="center" >
                                <TextInput placeholderTextColor='#61481C'
                                inputMode='numeric'
                                style={styles.timeSlotInput} />
                                <Text style={{
                                    fontFamily: "Montserrat-Bold",
                                    color: "#61481C",
                                    fontSize: 25,
                                    alignSelf: "center",
                                    paddingLeft: 10,
                                    paddingRight: 10
                                }}>:</Text>
                                <TextInput placeholderTextColor='#61481C'
                                inputMode='numeric'
                                style={styles.timeSlotInput} />
                            </Flex>
                        </Stack>
                       <Stack spacing={8}>
                        <Text style={styles.header}>Checkout</Text>
                        <Flex direction='row' w="88%" justifyContent="space-between">
                            <Text style={{
                                fontFamily: "Montserrat",
                                fontSize: 15,
                                color: "#61481C"
                            }}>Food Amount</Text>
                            <Text style={{
                                 fontFamily: "Montserrat-Bold",
                                 fontSize: 15,
                                 color: "#61481C"
                            }}>2</Text>
                        </Flex>
                        <Flex direction='row' w="88%" justifyContent="space-between">
                            <Text style={{
                                fontFamily: "Montserrat",
                                fontSize: 15,
                                color: "#61481C"
                            }}>Total price</Text>
                            <Text style={{
                                 fontFamily: "Montserrat-Bold",
                                 fontSize: 15,
                                 color: "#61481C"
                            }}>75.000 VND</Text>
                        </Flex>
                        <Flex direction='row' w="88%" justifyContent="space-between">
                            <Text style={{
                                fontFamily: "Montserrat-Bold",
                                fontSize: 15,
                                color: "#61481C"
                            }}>Total credits</Text>
                            <Text style={{
                                 fontFamily: "Montserrat-Bold",
                                 fontSize: 15,
                                 color: "#61481C"
                            }}>75</Text>
                        </Flex>
                       </Stack>
                       <Flex direction='row' style={{
                            marginTop: 140
                       }}>
                        <Text style={{
                            fontFamily: "Montserrat-Medium",
                            color: "#61481C"
                        }}>Your Credits: </Text>
                        <Text style={{
                            fontFamily: "Montserrat-Medium",
                            color: "#61481C"
                        }}>100</Text>
                       </Flex>
                       <View style={{}}>
                            <TouchableOpacity>
                                <Box 
                                    style={{
                                        backgroundColor: "#C51605",
                                        borderRadius: 25,
                                        width: "88%",
                                        alignItems: "center",
                                        height: 45
                                    }}>
                                        <Text style={{
                                            fontFamily: "Montserrat-SemiBold",
                                            fontSize: 18,
                                            color: "white",
                                            lineHeight: 30,
                                            paddingTop: 7,
                                            alignSelf: "center"
                                        }}>PLACE ORDER</Text>
                                    </Box>
                            </TouchableOpacity>
                        </View>
                    </Stack>
                </View>
                
            </Stack>
            
        </View>
    );
}


export default PlaceOrder;
