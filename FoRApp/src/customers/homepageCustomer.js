import React, { useCallback } from 'react';
import { useState, useEffect } from 'react';
import {  Image, View, ScrollView, TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native';
// import { ScrollView } from 'react-native-gesture-handler';
import styles from "./styles";
import SIcon from 'react-native-vector-icons/SimpleLineIcons';
import { Avatar, Box, Stack, Text, Flex, IconButton } from "@react-native-material/core";
import FIcon from 'react-native-vector-icons/Foundation'; 
import Icon from 'react-native-vector-icons/Ionicons'; 
import axios from 'axios';

export default function HomepageCustomer({navigation, route}) {
    const {colors} = useTheme();
    
    const dataRestaurant = [{image: require("../../assets/restaurant1.jpg"),name: "Sorrento", location: "Building 10 - Floor 2"},
                            {image: require("../../assets/restaurant2.jpeg"),name: "Nine", location: "Building 8 - Floor 1"}]

    const dataFood = [{image: require("../../assets/chicken-pesto.jpg"), name: "Chicken Pesto", restaurant: "Sorrento", hours: "Opening Hours: 10 AM - 4 PM"},
                    {image: require("../../assets/fish-burrito.webp"), name: "Fish Burrito", restaurant: "La Cantina", hours: "Opening Hours: 10 AM - 3 PM"}]
             
    const [food, setFood] = useState([]);
    const [res, setRes] = useState([]);

    const getAllFood = useCallback(async () => {
        const url = "http://localhost:3000/api/foods/"
        await axios.get(url).then((response) => {
            const result = response.data;
            setFood(result)
        })
        .catch((err) =>{
          alert(err);
        })
    }, [])
                
    const getAllRes = useCallback (async () => {
        const url = "http://localhost:3000/api/restaurants/"
        await axios.get(url).then((response) => {
            const result = response.data;
            setRes(result)
        })
        .catch((err) =>{
          alert(err);
        })
    }, [])
    
    useEffect(() => {
        getAllRes()
        getAllFood()
        console.log(res)
        console.log(food)
    }, [getAllRes], [getAllFood]);
                    
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
                <View>
                    <TouchableOpacity style={styles.logoBackground} onPress={() => navigation.navigate("HomepageCustomer", {...route.params})}>
                        <Image source={require("../../assets/logo.png")} style={styles.logoButton}></Image>
                    </TouchableOpacity>
                    <IconButton icon={props => <Icon name="person" {...props} size={25} />} 
                                color='#C51606'
                                backgroundColor="white"
                                borderRadius={15}
                                style={styles.userButton}
                                onPress={() => navigation.navigate("Setting", {...route.params})}/>
                </View>
                <ScrollView>
                    <Text style={styles.header}>Restaurant</Text>
                    <Stack w="100%" spacing={20} >
                        <ScrollView horizontal={true}>
                            {res.map((item, index) => (
                                <TouchableOpacity onPress={() => navigation.navigate("ViewRestaurant")}>
                                    <Stack elevation={3}
                                        key={index}
                                        backgroundColor="white"
                                        marginRight={20}
                                        w={200}
                                        alignSelf="center"
                                        borderRadius={15}
                                        direction="column"
                                        padding={15}
                                        spacing={5}
                                    >
                                        {/* nếu không có hình thì để cái này */}
                                        {/* <IconButton 
                                            icon= {props => <SIcon name="picture" size={25} color={colors.button} />}
                                            imageStyle={{borderRadius: 10}} 
                                        />  */}
                                        <Image source={require("../../assets/restaurant1.jpg")} style = {styles.imageRestaurant}/>
                                        <View w="58%">
                                            <Text style={styles.textTitle}>{item.name}</Text>
                                            <Text style={styles.text}>item.location</Text>
                                        </View>
                                    </Stack>
                                </TouchableOpacity>
                                
                            ))}
                            
                            {/* <Stack elevation={3}
                                backgroundColor="white"
                                marginRight={20}
                                w="70%"
                                alignSelf="center"
                                borderRadius={15}
                                direction="column"
                                padding={15}
                                spacing={5}
                            > */}
                                {/* nếu không có hình thì để cái này */}
                                {/* <IconButton 
                                    icon= {props => <SIcon name="picture" size={25} color={colors.button} />}
                                    imageStyle={{borderRadius: 10}} 
                                /> */} 
                                {/* <Image 
                                    source={require("../../assets/sorrento.jpg")} 
                                    style = {styles.imageRestaurant}/>
                                <View w="58%" >
                                    <Text style={styles.textTitle}>Lygon</Text>
                                    <Text style={styles.text}>Building 1 - Floor 2</Text>
                                </View> */}
                            {/* </Stack> */}
                        </ScrollView>
                    </Stack>
                    <Text style={styles.header} marginTop={20}>What's New Today?</Text>
                    <Stack w="100%" spacing={15} >
                        {food.map((item, index)=> (
                            <TouchableOpacity onPress={() => navigation.navigate("ViewFood", {...route.params})}>
                                <Box elevation={3}
                                backgroundColor="white"
                                style={styles.cardContainer}
                                w="90%"
                                borderRadius={15}
                                key={index}
                                >
                                    <Flex w="100%"
                                    items= "center"
                                    direction="row"
                                    padding={9}
                                    >
                                        {/* nếu không có hình thì để cái này */}
                                        {/* <IconButton 
                                            icon= {props => <SIcon name="picture" size={25} color={colors.button} />}
                                            imageStyle={{borderRadius: 10}} 
                                        />  */}
                                        <Image source={require("../../assets/pork.jpeg")} style={styles.imageFood}/>
                                        <Stack spacing={5} w="58%" marginLeft={10}>
                                            <Text style={styles.textTitle}>{item.name}</Text>
                                            <Text style={styles.text} >{item.restaurant}</Text>        
                                            <Text style={styles.textHours}>item.hours</Text>
                                        </Stack>
                                    </Flex>
                                </Box>
                            </TouchableOpacity>
                        ))}
                    </Stack>
                </ScrollView> 
            </Stack>
            <View style={styles.bottomContainer}>
                <View style={styles.bottomNav}>
                    <IconButton icon={props => <FIcon name="home" {...props} size={30}/>}
                                margin={8}
                                color="#C51606"
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
                                color='#AAACAE'
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