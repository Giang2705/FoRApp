import React from 'react';
import { View, StyleSheet } from "react-native";
import { IconButton } from "@react-native-material/core";
import FIcon from 'react-native-vector-icons/Foundation'; 
import Icon from 'react-native-vector-icons/Ionicons'; 

const colors = {
    button: '',
  };

export default function MessageCustomer({ navigation }) {



    return ( 
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
                    onPress={() =>navigation.navigate("SearchPage")}
                    />
                <IconButton icon={props => <Icon name="notifications-outline" {...props} size={30}/>}
                            color='#AAACAE'
                            margin={8}
                            onPress={()=>navigation.navigate()}/>
                <IconButton icon={props => <Icon name="cart-outline"{...props} size={33}/>} 
                            color="#AAACAE"
                            margin={8}
                            onPress={()=>navigation.navigate("Cart")}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    bottomContainer: {
		width: "100%",
		position: "absolute",
		bottom: "5%",
		backgroundColor: "transparent",
	},
	bottomNav: {
		width: "100%",
		backgroundColor: "transparent",
		borderRadius: 8,
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "row",
	},
});