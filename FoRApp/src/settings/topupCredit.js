import React, { useState } from 'react';
import {View, Image} from 'react-native';
import styles from './styles';
import { IconButton, Stack, Text } from '@react-native-material/core';
import { useTheme } from '@react-native-material/core';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import Icon from "react-native-vector-icons/Ionicons"
import { Box, Flex } from '@react-native-material/core';

const TopupCredit = ({navigation}) => {
    const colors = useTheme()
    const [count, setCount] = useState(1)
    
    const handleIncrement = () => {
        setCount(count+1)
    }

    const handleDecrement = () => {
        if (count>1) {
            setCount(count-1)
        }
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
                <Box backgroundColor="white"
                    h="100%"
                    marginLeft={-19}
                    w="100%"
                    elevation={4}
                    borderRadius={30}>
                    <Box elevation={4}
                        h={120}
                        w="70%"
                        borderRadius={15}
                        style={{
                            alignSelf:"center",
                            justifyContent: "center",
                            borderColor: "#C51605",
                            marginTop: 20,
                            // borderRadius: 15,
                            paddingLeft: 10,
                            paddingRight: 10,
                            backgroundColor: "white"
                        }}>
                        <Flex direction='row'>
                            <Icon name="card-outline" color="#C51605" size={50}/>
                            <Text style={{
                                fontFamily: "Montserrat-SemiBold",
                                alignSelf: "center",
                                marginLeft: 20,
                                color: "#61481C"
                            }}>Visa</Text>
                            
                        </Flex>
                        <Flex direction='row-reverse'
                                marginTop={-35}>
                            <TouchableOpacity>
                                <Icon name="chevron-down" size={20} color="#C51605"/>
                            </TouchableOpacity>
                            <Text style={{
                                fontFamily: "Montserrat-SemiBold",
                                alignSelf: "center",
                                color: "#61481C",
                                marginRight: 5
                            }}>
                                1234
                            </Text>
                        </Flex>
                    </Box>
                    <Text style={{
                        fontFamily: "Montserrat",
                        fontSize: 14,
                        color: "#61481C",
                        alignSelf: "center",
                        marginTop: 10
                    }}>1 credit = 1000 VND</Text>
                    <Text style={{
                        fontFamily: "Montserrat-Bold",
                        marginLeft: 60,
                        marginTop: 15,
                        color: "#61481C"
                    }}>Amount</Text>
                    <Flex direction='row'
                            marginTop={15}
                            alignItems="center"
                            style={{
                                justifyContent: "center",
                            }}
                            >
                        <TouchableOpacity onPress={handleDecrement}>
                            <Icon name="remove" size={50} color="#C51605"/>
                        </TouchableOpacity>
                        <View style={{
                             flexDirection: 'row', 
                             alignItems: 'center', 
                             justifyContent: 'center'
                        }}>
                        <TextInput style={{
                            fontFamily: "Montserrat",
                            fontSize: 50,
                            alignSelf: "center",
                            // justifyContent: "center",
                            paddingLeft: 10,
                            paddingRight: 10,
                            textAlign: "center",
                            marginTop: -10,
                            color: "#61481C",
                            // flex: 1
                            // width: "auto"
                        }} 
                        placeholder={count.toString()}
                        />
                        </View>
                        <TouchableOpacity onPress={handleIncrement}>
                            <Icon name="add" size={50} color="#C51605"/>
                        </TouchableOpacity>
                    </Flex>
                    <Text style={{
                        fontFamily: "Montserrat-Bold",
                        marginLeft: 60,
                        marginTop: 15,
                        color: "#61481C"
                    }}>Combo</Text>
                    <Flex direction="row"
                            marginTop={10}
                            alignSelf="center"
                            >
                        <Box 
                            elevation={4}
                            backgroundColor="white"
                            style={{
                                borderColor: "#C51605",
                                borderRadius: 10,
                                borderWidth: 1,
                            }}>
                            <TouchableOpacity>
                                <Flex direction='column'
                                    padding={5} 
                                    alignItems="center">
                                    <Text style={{
                                        fontFamily: "Montserrat-SemiBold",
                                        color: "#61481C"
                                    }}>100</Text>
                                    <Text style={{
                                        fontFamily: "Montserrat-Medium",
                                        fontSize: 12,
                                        marginTop: 5,
                                        color: "#61481C"
                                    }}>75.000 VND</Text>
                                </Flex>
                            </TouchableOpacity>
                        </Box>
                        <Box 
                            elevation={4}
                            backgroundColor="white"
                            style={{
                                borderColor: "#C51605",
                                borderRadius: 10,
                                borderWidth: 1,
                                marginLeft: 10,
                                marginRight: 10
                            }}>
                            <TouchableOpacity>
                                <Flex direction='column'
                                    padding={5} 
                                    alignItems="center">
                                    <Text style={{
                                        fontFamily: "Montserrat-SemiBold",
                                        color: "#61481C"
                                    }}>75</Text>
                                    <Text style={{
                                        fontFamily: "Montserrat-Medium",
                                        fontSize: 12,
                                        marginTop: 5,
                                        color: "#61481C"
                                    }}>50.000 VND</Text>
                                </Flex>
                            </TouchableOpacity>
                        </Box>
                        <Box 
                            elevation={4}
                            backgroundColor="white"
                            style={{
                                borderColor: "#C51605",
                                borderRadius: 10,
                                borderWidth: 1,
                            }}>
                            <TouchableOpacity>
                                <Flex direction='column'
                                    padding={5} 
                                    alignItems="center">
                                    <Text style={{
                                        fontFamily: "Montserrat-SemiBold",
                                        color: "#61481C"
                                    }}>150</Text>
                                    <Text style={{
                                        fontFamily: "Montserrat-Medium",
                                        fontSize: 12,
                                        marginTop: 5,
                                        color: "#61481C"
                                    }}>100.000 VND</Text>
                                </Flex>
                            </TouchableOpacity>
                        </Box>
                    </Flex>
                    <Flex direction="row"
                        alignSelf="center"
                        marginTop={110}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Box
                                style={{
                                    backgroundColor: "white",
                                    borderRadius: 20,
                                    borderWidth: 1,
                                    borderColor: "#C51605",
                                    width: 100
                                }}>
                                    <Text style={{
                                        paddingTop: 10,
                                        paddingBottom: 10,
                                        fontFamily: "Montserrat-SemiBold",
                                        fontSize: 12,
                                        // paddingRight: 10,
                                        // paddingLeft: 10,
                                        color: "#C51605",
                                        alignSelf: "center"
                                    }}>CANCEL</Text>
                                </Box>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Box 
                                style={{
                                    backgroundColor: "#C51605",
                                    borderRadius: 20,
                                    marginLeft: 10,
                                    width: 175
                                }}>
                                    <Text style={{
                                        paddingTop: 10,
                                        paddingBottom:10,
                                        fontFamily: "Montserrat-SemiBold",
                                        fontSize: 12,
                                        // paddingRight: 10,
                                        // paddingLeft: 10,
                                        alignSelf: "center",
                                        color: "white"
                                    }}>COMPLETE</Text>
                                </Box>
                        </TouchableOpacity>
                    </Flex>
                </Box>
            </Stack>
            
        </View>
    );
}

export default TopupCredit;