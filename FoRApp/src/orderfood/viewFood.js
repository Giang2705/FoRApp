import React, { useState } from 'react';
import {View, Image, TextInput,
        KeyboardAvoidingView, Platform} from 'react-native';
import styles from './styles';
import { IconButton, Stack, Text } from '@react-native-material/core';
import { useTheme } from '@react-native-material/core';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from "react-native-vector-icons/Ionicons"
import { Box, Flex } from '@react-native-material/core';

const ViewFood = ({navigation}) => {
    const [count, setCount] = useState(1);

    const handleIncrement = () => {
        setCount(count +1)
    }

    const handleDecrement = () => {
        if (count>1) {
            setCount(count-1);
        }
    }

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
                        color='#C51606'
                        backgroundColor="white"
                        borderRadius={15}
                        style={styles.userButton}
                        onPress={() => navigation.navigate("Setting")}/>
        </View>
        <Box backgroundColor="transparent"
            w="25%"
            borderRadius={15}
            padding={10}
            marginTop={-25}
            style={{
                alignSelf:"center"
            }}>
                <Image source={require("../../assets/hamburger.jpg")} 
                style={styles.imageFood}
                />
        </Box>
        <Box 
        backgroundColor="white"
        h="79%"
        marginLeft={-19}
        w="100%"
        elevation={4}
        borderRadius={30}>
            <Stack 
            spacing={8}
            style={{
                margin: 30,
            }}>
                <Text style={styles.foodTitle}>Beef hamburger</Text>
                <Text style={styles.foodInfo}>Not for vegan consumers</Text>
            </Stack>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} >
            
        
            <Stack
             spacing={8}
             style={{
                 margin: 30,
             }}>
                <Text style={styles.foodTitle}>Note for restaurant</Text>
                <TextInput
                    style={styles.descriptionInput}
                    placeholderTextColor='#61481C'
                    inputMode='text'
                    multiline={true} 
                    placeholder='Optional'
                    elevation={4}
                    />
            </Stack>
            <Flex direction='row'
                    alignSelf="center"
                    >
                <TouchableOpacity onPress={handleDecrement}>
                    <Icon name="remove" size={30} color="#C51605"/>
                </TouchableOpacity>
                <TextInput style={styles.amountText} inputMode="numeric" placeholder={count.toString()} />
                <TouchableOpacity onPress={handleIncrement}>
                    <Icon name="add" size={30} color="#C51605"/>
                </TouchableOpacity>
            </Flex>
            </KeyboardAvoidingView>
            <View style={{flex: 1, marginBottom: 30, justifyContent: 'flex-end'}}>
                <TouchableOpacity>
                    <Box 
                        style={{
                            backgroundColor: "#C51605",
                            borderRadius: 25,
                            width: "80%",
                            alignSelf: "center",
                            height: 50
                        }}>
                            <Text style={{
                                paddingTop: 10,
                                paddingBottom:10,
                                fontFamily: "Montserrat-SemiBold",
                                fontSize: 18,
                                // paddingRight: 10,
                                // paddingLeft: 10,
                                alignSelf: "center",
                                color: "white",
                                lineHeight: 30
                            }}>ADD TO CART</Text>
                        </Box>
                </TouchableOpacity>
            </View>
        </Box>
      </Stack>
    </View>
  )
}

export default ViewFood