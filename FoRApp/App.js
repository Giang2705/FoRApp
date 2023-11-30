import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import HomepageCustomer from './src/customers/homepageCustomer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import {
	IconButton,
	Text,
} from "@react-native-material/core";
import { AntDesign, Ionicons } from '@expo/vector-icons';

export const theme = {
  colors: {
    background: "#F9F9C6",
    mainColor: "#C51605",
    button: "#C51605"
  }
}

const StackNavigator = createStackNavigator()

const AppInner = () => {
  return (
    <NavigationContainer theme={theme}>
      <StackNavigator.Navigator
        // screenOptions={({navigation}) => ({
        //   headerLeft: () => (
        //     <IconButton
        //               onPress={() => navigation.navigate("HomepageCustomer")}
        //               backgroundColor = "white"
        //               borderRadius={15}
        //               icon = {props => (
        //                 <AntDesign {...props} 
        //                 name="home" size={24} color={theme.colors.button} 
        //                 />
        //               )}
        //   />
        //   ),
        //   headerRight: () => (
        //     <IconButton
        //               onPress={() => navigation.navigate("")}
        //               backgroundColor="white"
        //               borderRadius={15}
        //               icon = {props => (
        //                 <Ionicons name="person-outline" size={24} color={theme.colors.button} />
        //               )}
        //     />
        //   )})}
        >
        <StackNavigator.Screen 
          name="HomepageCustomer"
          component={HomepageCustomer}
          options={{
						headerShown: false
					}}
        />
      </StackNavigator.Navigator>
    </NavigationContainer>
  )
}

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Hello FoR</Text>
    //   <StatusBar style="auto" />
    // </View>
    <AppInner />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9C6',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
