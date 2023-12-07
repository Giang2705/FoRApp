import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import HomepageCustomer from './src/customers/homepageCustomer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import {
	IconButton, Text
} from "react-native";
// import { AntDesign, Ionicons } from '@expo/vector-icons';
import FIcon from "react-native-vector-icons/Foundation"
import Icon from "react-native-vector-icons/Ionicons"
import { useState, useEffect, useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import useFonts from './useFont';
// import Text from '@react-native-material/core';

export const theme = {
  colors: {
    background: "#F9F9C6",
    mainColor: "#C51605",
    button: "#C51605"
  }
}

// SplashScreen.preventAutoHideAsync();

const StackNavigator = createStackNavigator()

const AppInner = () => {
  const [IsReady, SetIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await useFonts();
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        SetIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (IsReady) {
      await SplashScreen.hideAsync();
    }
  }, [IsReady]);

  if (!IsReady) {
    return null;
  }

  return (
    <NavigationContainer theme={theme} onReady={onLayoutRootView}>
      <StackNavigator.Navigator
        screenOptions={({ navigation }) => ({
          headerLeft: () => (
            <IconButton
              onPress={() => navigation.navigate("HomepageCustomer")}
              backgroundColor="white"
              borderRadius={15}
              icon={(props) => (
                  <FIcon {...props} name="home" size={24} color={theme.colors.button} />
              )}
            />
          ),
          headerLeftContainerStyle: {
            left: 30,
            top: 30,
          },
          headerRight: () => (
            <IconButton
              onPress={() => navigation.navigate("")}
              backgroundColor="white"
              borderRadius={15}
              icon={(props) => (
                  <Icon name="person" size={24} color={theme.colors.button} />
              )}
            />
          ),
          headerStyle: {
            backgroundColor: theme.colors.background,
            elevation: 0, // remove shadow on Android
            shadowOpacity: 0, // remove shadow on iOS
          },
        })}
      >
        <StackNavigator.Screen
          name="HomepageCustomer"
          component={HomepageCustomer}
          options={{
            headerShown: true,
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
