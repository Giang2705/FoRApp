import React from 'react';
import {View, Image, TextInput} from 'react-native';
import styles from './styles';
import { IconButton, Stack, Text } from '@react-native-material/core';
import { useTheme } from '@react-native-material/core';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from "react-native-vector-icons/Ionicons"
import { Box, Flex } from '@react-native-material/core';

const ViewFood = ({navigation}) => {
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
                <Image source={require("../../assets/hamburger.png")} 
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
                <TouchableOpacity>
                    <Icon name="remove" size={30} color="#C51605"/>
                </TouchableOpacity>
                <Text style={styles.amountText}>1</Text>
                <TouchableOpacity>
                    <Icon name="add" size={30} color="#C51605"/>
                </TouchableOpacity>
            </Flex>
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