import { Stack, Text, IconButton, Box, Flex, Button  } from '@react-native-material/core';
import React, { useCallback, useEffect, useState } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import styles from './style';
import MIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { useTheme } from '@react-navigation/native';
import FIcon from 'react-native-vector-icons/Foundation';
import Icon from 'react-native-vector-icons/Ionicons';
import AddFood from './addFood';
import axios from 'axios';
import { RefreshControl } from 'react-native-gesture-handler';

export default function HomepageShopOwner({navigation, route}) {
    const {colors} = useTheme()
    const [modalVisible, setModalVisible] = useState(false)
    const handleAddFoodPress = () => {
        setModalVisible(true);
      };
    const {restaurant} = route.params
    const [food, setFood] = useState([])
    const [res, setRes] = useState([])


    const getAllFood = useCallback (async () => {
        const url = `http://127.0.0.1:3000/api/foods/${restaurant}`
        await axios.get(url).then((response) => {
            const result = response.data;
            setFood(result)
        })
        .catch((err) =>{
          alert(err);
        })
    },[])

    const getRes = useCallback (async () => {
        const url = `http://127.0.0.1:3000/api/restaurants/${restaurant}`
        await axios.get(url).then((response) => {
            const result = response.data;
            console.log(result)
            setRes(result)
        })
        .catch((err) =>{
          alert(err);
        })
    }, [])

    const deleteFood = useCallback (async (id) => {
        const url = `http://127.0.0.1:3000/api/foods/${id}`
        await axios.delete(url).then((response) => {
            alert("Delete food successfully!")
        })
        .catch((err) =>{
          alert(err);
        })
    }, [])

    useEffect(() => {
        getAllFood()
        getRes()
    }, [getAllFood], [getRes]);

    return (
        <View>
            <View>
                <Image source={require("../../assets/sorrento-restaurant-1-1024x682.jpg")}
                style={styles.backgroundImage} />
                <Text style={styles.header}>Sorrento</Text>
                <TouchableOpacity style={styles.logoBackground} onPress={() => navigation.navigate("HomepageShopOwner", {...route.params})}>
                    <Image source={require("../../assets/logo.png")} style={styles.logoButton}></Image>
                </TouchableOpacity>
                <Text style={styles.header}>Sorrento</Text>
                <IconButton icon={props => <Icon name="person" {...props} size={25} />} 
                            color='#C51606'
                            backgroundColor="white"
                            borderRadius={15}
                            style={styles.userButton}
                            onPress={() => navigation.navigate("Setting", {...route.params})}/>
            </View>
        
            <View>
                <Text marginTop={15}
                marginLeft={20}
                style={styles.section}>General Information</Text>
                <IconButton icon={props => <MIcon name="pencil" size={25} {...props} />} 
                            style={styles.addButton}
                            // onPress={navigation.navigate("")}
                            color="#61481C"
                />
                    <Box elevation={4}
                    backgroundColor="white"
                    margin={15}
                    borderRadius={15}
                    >
                        <Flex margin={15} >
                            <Stack spacing={5}>
                                    <Text style={{
                                        fontSize: 13,
                                        color: "#61481C",
                                    }}>Name:</Text>
                                    <Text style={{
                                        fontSize: 13,
                                        color: "#61481C",
                                    }}>Opening hour:</Text>
                                    <Text style={{
                                        fontSize: 13,
                                        color: "#61481C",
                                    }}>Closed hour:</Text>
                            </Stack>
                        </Flex>
                        <Flex items="center"
                                direction='column'
                                w="100%"
                                marginTop={-70}
                                marginBottom={15}>
                            <Stack spacing={5}>
                                <Text style={{
                                    fontSize: 13,
                                    color: "#61481C",
                                }}>{res.name}</Text>
                                <Text style={{
                                    fontSize: 13,
                                    color: "#61481C",
                                }}>9 AM</Text>
                                <Text style={{
                                    fontSize: 13,
                                    color: "#61481C",
                                }}>4 PM</Text>
                            </Stack>

                        </Flex>
                    </Box>
            </View>
            <View>
                <Text marginTop={15}
                marginLeft={20}
                style={styles.section}>Food</Text>
                <IconButton icon={props => <FIcon name="plus" size={25} {...props}/>} 
                            style={styles.addButton}
                            onPress={handleAddFoodPress}
                            color="#61481C"/>
                {food.map((item, index) => (
                    <Box elevation={4}
                    backgroundColor="white"
                    margin={15}
                    borderRadius={15}
                    key={index}>
                        <Flex items="center"
                            direction='row'
                            w="100%">
                            <Image source={require("../../assets/curry.jpg")} style={styles.foodImage}/>
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
                                }}>8:30 AM - 4 PM</Text>
                            </Stack>
                            <Stack direction='column'spacing={15}>
                                <Button title="edit" color="#D9D9D9" style={styles.buttonInCard}/>
                                <Button title="delete" color="#C51605" style={styles.buttonInCard} onPress={() => deleteFood(item.id)}/>
                            </Stack>
                        </Flex>
                    </Box>
                ))}
            <AddFood navigation={navigation} modalVisible={modalVisible} setModalVisible={setModalVisible} route={route}/>

            </View>
            {/* <Stack style={styles.bottomContainer} >
                <IconButton icon={props => <FIcon name="home" {...props} size={30}/>}
                            margin={8}
                            color="#C51606"
                            onPress={()=> navigation.navigate("")} />
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
            </Stack> */}
        </View>
    );
}