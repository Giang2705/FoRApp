import { Stack, Text, IconButton, Box, Flex  } from '@react-native-material/core';
import React from 'react';
import { View, Image } from 'react-native';
import styles from './styles';
import MIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { useTheme } from '@react-navigation/native';

export default function HomepageStaffs({navigation}) {
    const {colors} = useTheme()
    return (
        <View>
            <Stack>
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
                    
            </Stack>
            <Stack>
            <Text marginTop = {-100}
                marginLeft={20}
                style={styles.section}>Food</Text>

                {/* <Box elevation={3}
                    backgroundColor="white">
                        <Flex>
                        </Flex>
                </Box> */}
                <Image source={require("../../assets/sorrento.jpg")} style={styles.foodImage}></Image>

            </Stack>
            
        </View>
    );
}


