import { Stack, Text, IconButton, Box, Flex  } from '@react-native-material/core';
import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import MIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { useTheme } from '@react-navigation/native';
import FIcon from 'react-native-vector-icons/Foundation';
import Icon from 'react-native-vector-icons/Ionicons';

export default function ViewRestaurant({navigation}) {
    const {colors} = useTheme()
    const data = [{image: require("../../assets/sorrento.jpg"), name: "Rice with Pork", price: 35, hours: "8:30 AM - 4 PM"},
                    {image: require("../../assets/sorrento.jpg"), name: "Chicken Curry", price: 55, hours: "8:30 AM - 4 PM"}]
    return (
        <View>
            <View>
                <Image source={require("../../assets/sorrento-restaurant-1-1024x682.jpg")}
                        style={styles.backgroundImage} />
                <TouchableOpacity style={styles.logoBackground1} onPress={() => navigation.navigate("HomepageCustomer")}>
                    <Image source={require("../../assets/logo.png")} style={styles.logoButton1}></Image>
                </TouchableOpacity>
                <Text style={styles.header}>Sorrento</Text>
                <IconButton icon={props => <Icon name="person" {...props} size={20} />} 
                            color='#C51606'
                            backgroundColor="white"
                            borderRadius={15}
                            style={styles.userButton1}
                            onPress={() => navigation.navigate("Setting")}/>
            </View>
            <View marginTop={100}>
                <Text marginTop={15}
                marginLeft={20}
                style={styles.section}>Food</Text>
                {data.map((item, index) => (
                    <Box elevation={4}
                    backgroundColor="white"
                    margin={11}
                    borderRadius={15}
                    key={index}>
                        <Flex items="center"
                            direction='row'
                            w="100%">
                            <Image source={item.image} style={styles.foodImage}/>
                            <Stack spacing={5}>
                                <Text style={{
                                    fontSize: 15,
                                    fontFamily: "Montserrat-SemiBold",
                                    color: "#61481C",
                                }}>{item.name}</Text>
                                <Text style={{
                                    fontSize: 12,
                                    color: "#61481C",
                                    fontFamily: "Montserrat",
                                }}>{item.price}</Text>
                                <Text style={{
                                    fontSize: 12,
                                    color: "#C51605",
                                    fontFamily: "Montserrat-Medium"
                                }}>Opening Hours: {item.hours}</Text>
                            </Stack>
                        </Flex>
                    </Box>
                ))}
                
            </View>
            <Stack style={styles.bottomContainer} >
                <IconButton icon={props => <FIcon name="home" {...props} size={30}/>}
                            margin={8}
                            color="#C51606"
                            onPress={()=> navigation.navigate("HomepageCustomer")} />
                <IconButton icon={props => <Icon name="chatbox-outline" {...props} size={30}/>}
                            margin={8}
                            color="#AAACAE"
                            onPress={()=> navigation.navigate("")}/>
                <IconButton icon={props => <Icon name="search" {...props} size={40}/>}
                            backgroundColor={colors.button}
                            padding={34}
                            color="white"
                            borderRadius={40}
                            // position="absolute"
                            marginBottom={10}
                            onPress={() =>navigation.navigate("")}
                            />
                <IconButton icon={props => <Icon name="notifications-outline" {...props} size={30}/>}
                            color='#AAACAE'
                            margin={8}
                            onPress={()=>navigation.navigate("")}/>
                <IconButton icon={props => <Icon name="cart-outline"{...props} size={33}/>} 
                            color="#AAACAE"
                            margin={8}
                            onPress={()=>navigation.navigate("")}/>
            </Stack>
        </View>
    );
}


