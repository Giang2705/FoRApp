import React from 'react';
import {  Image, View, ScrollView, TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native';
// import { ScrollView } from 'react-native-gesture-handler';
import styles from "./styles";
import SIcon from 'react-native-vector-icons/SimpleLineIcons';
import { Avatar, Box, Stack, Text, Flex, IconButton } from "@react-native-material/core";
import FIcon from 'react-native-vector-icons/Foundation'; 
import Icon from 'react-native-vector-icons/Ionicons'; 

export default function HomepageCustomer({navigation}) {
    const {colors} = useTheme();

    
    const dataRestaurant = [{image: "../../assets/sorrento.jpg",name: "Sorrento", location: "Building 10 - Floor 2"},
                            {image: "../../assets/sorrento.jpg",name: "Nine", location: "Building 8 - Floor 1"}]
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
                    <TouchableOpacity style={styles.logoBackground} onPress={navigation.navigate("HomepageCustomer")}>
                        <Image source={require("../../assets/logo.png")} style={styles.logoButton}></Image>
                    </TouchableOpacity>
                    <IconButton icon={props => <Icon name="person" {...props} size={30} />} 
                                color='#C51606'
                                backgroundColor="white"
                                borderRadius={15}
                                style={styles.userButton}
                                onPress={navigation.navigate("")}/>
                </View>
                <ScrollView>
                    <Text style={styles.header}>Restaurant</Text>
                    <Stack w="100%" spacing={20} >
                        <ScrollView horizontal={true}>
                            {dataRestaurant.map((item, index) => (
                                <Stack elevation={3}
                                key={index}
                                backgroundColor="white"
                                marginRight={20}
                                w="70%"
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
                                /> */} 
                                
                                    <Image source={require({item.image})} style = {styles.imageRestaurant}/>
                                    <View w="58%">
                                        <Text style={styles.textTitle}>{item.name}</Text>
                                        <Text style={styles.text}>{item.location}</Text>
                                    </View>
                                
                                </Stack>
                            ))}
                            
                            <Stack elevation={3}
                                backgroundColor="white"
                                marginRight={20}
                                w="70%"
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
                                /> */} 
                                <Image 
                                    source={require("../../assets/sorrento.jpg")} 
                                    style = {styles.imageRestaurant}/>
                                <View w="58%" >
                                    <Text style={styles.textTitle}>Lygon</Text>
                                    <Text style={styles.text}>Building 1 - Floor 2</Text>
                                </View>
                            </Stack>
                        </ScrollView>
                    </Stack>
                    <Text style={styles.header} marginTop={20}>What's New Today?</Text>
                    <Stack w="100%" spacing={15} >
                        <Box elevation={3}
                            backgroundColor="white"
                            style={styles.cardContainer}
                            w="90%"
                            key="restaurant"
                            borderRadius={15}
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
                                /> */} 
                                <Image source={require("../../assets/sorrento.jpg")} style={styles.imageFood}/>
                                <Stack spacing={5} w="58%" marginLeft={10}>
                                    <Text style={styles.textTitle}>Chicken Pesto</Text>
                                    <Text style={styles.text} >Sorrento</Text>
                                    <Text style={styles.textHours}>Opening Hours: 10 AM - 4 PM</Text>
                                </Stack>
                            </Flex>
                        </Box>
                        <Box elevation={3}
                            backgroundColor="white"
                            style={styles.cardContainer}
                            w="90%"
                            borderRadius={15}
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
                                /> */} 
                                <Image source={require("../../assets/sorrento.jpg")} style={styles.imageFood}/>
                                <Stack spacing={5} w="58%" marginLeft={10}>
                                    <Text style={styles.textTitle}>Chicken Pesto</Text>
                                    <Text style={styles.text} >Sorrento</Text>
                                    <Text style={styles.textHours}>Opening Hours: 10 AM - 4 PM</Text>
                                </Stack>
                            </Flex>
                        </Box>
                    </Stack>
                </ScrollView> 
            </Stack>
            <View style={styles.bottomContainer}>
                <View style={styles.bottomNav}>
                    <IconButton icon={props => <FIcon name="home" {...props} size={30}/>}
                                margin={8}
                                color="#C51606"
                                onPress={()=> navigation.navigate()} />
                    <IconButton icon={props => <Icon name="chatbox-outline" {...props} size={30}/>}
                                margin={8}
                                color="#AAACAE"
                                onPress={()=> navigation.navigate()}/>
                    <IconButton icon={props => <Icon name="search" {...props} size={40}/>}
                        backgroundColor={colors.button}
                        padding={34}
                        color="white"
                        borderRadius={40}
                        // position="absolute"
                        marginBottom={10}
                        onPress={() =>navigation.navigate()}
                        />
                    <IconButton icon={props => <Icon name="notifications-outline" {...props} size={30}/>}
                                color='#AAACAE'
                                margin={8}
                                onPress={()=>navigation.navigate()}/>
                    <IconButton icon={props => <Icon name="cart-outline"{...props} size={33}/>} 
                                color="#AAACAE"
                                margin={8}
                                onPress={()=>navigation.navigate()}/>
                </View>
            </View>
        </View>
    );
}