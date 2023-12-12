import { Stack, Text, IconButton, Box, Flex, Button  } from '@react-native-material/core';
import React from 'react';
import { View, Image } from 'react-native';
import styles from './style';
import MIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { useTheme } from '@react-navigation/native';
import FIcon from 'react-native-vector-icons/Foundation';
import Icon from 'react-native-vector-icons/Ionicons';

export default function HomepageShopOwner({navigation}) {
    const {colors} = useTheme()
    return (
        <View>
            <View>
                <Image source={require("../../assets/sorrento-restaurant-1-1024x682.jpg")}
                style={styles.backgroundImage} />
                <Text style={styles.header}>Sorrento</Text>
                <IconButton
                    onPress={()=> navigation.navigate("")}
                    backgroundColor = "white"
                    borderRadius = {15}
                    style={styles.editIcon}
                    icon={props => 
                    <MIcon {...props} name="pencil" size={23} color={colors.button}/>} />
                    
            </View>
            <View>
                <Text marginTop={15}
                marginLeft={20}
                style={styles.section}>Food</Text>
                <IconButton icon={props => <FIcon name="plus" size={25} {...props}/>} 
                            style={styles.addButton}
                            onPress={navigation.navigate("")}
                            color="#61481C"/>
                <Box elevation={4}
                    backgroundColor="white"
                    margin={15}
                    borderRadius={15}>
                    <Flex items="center"
                        direction='row'
                        w="100%">
                        <Image source={require("../../assets/sorrento.jpg")} style={styles.foodImage}/>
                        <Stack spacing={5}>
                            <Text style={{
                                fontSize: 15,
                                fontFamily: "Montserrat-SemiBold",
                                color: "#61481C",
                            }}>Rice with Pork</Text>
                            <Text style={{
                                fontSize: 12,
                                color: "#61481C",
                                fontFamily: "Montserrat",
                            }}>35,000 VND</Text>
                            <Text style={{
                                fontSize: 12,
                                color: "#C51605",
                            }}>Opening Hours: 8AM-5PM</Text>
                        </Stack>
                        <Stack direction='column'spacing={15}>
                            <Button title="edit" color="#D9D9D9" style={styles.buttonInCard}/>
                            <Button title="delete" color="#C51605" style={styles.buttonInCard}/>
                        </Stack>
                    </Flex>
                </Box>
            </View>
            <Stack style={styles.bottomContainer} >
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
            </Stack>
        </View>
    );
}