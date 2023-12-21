import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import HomepageCustomer from './src/customers/homepageCustomer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { useState, useEffect, useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import useFonts from './useFont';
import HomepageStaffs from './src/staffs/homepageStaffs';
import HomepageShopOwner from './src/shopowner/homepageShopOwner';
import Setting from './src/settings/setting';
import TopupCredit from './src/settings/topupCredit';
import ViewFood from './src/orderfood/viewFood';
import ViewRestaurant from './src/orderfood/viewRestaurant';
import UpdatePassword from './src/settings/updatePassword';
import SearchPage from './src/customers/searchPage';

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
      <StackNavigator.Navigator initialRouteName='HomepageCustomer'
        >
        <StackNavigator.Screen
          name="HomepageCustomer"
          component={HomepageCustomer}
          options={{
            headerShown: false
          }}
        />
        <StackNavigator.Screen
          name="HomepageStaff"
          component={HomepageStaffs} 
          options={{
            headerShown: false
          }}/>
          <StackNavigator.Screen
          name="HomepageShopOwner"
          component={HomepageShopOwner} 
          options={{
            headerShown: false
          }}/>
          <StackNavigator.Screen
          name="Setting"
          component={Setting}
          options={{
            headerShown: false
          }}/>
          <StackNavigator.Screen
          name="TopupCredit"
          component={TopupCredit}
          options={{
            headerShown: false
          }}/>
          <StackNavigator.Screen
          name="ViewFood"
          component={ViewFood}
          options={{
            headerShown: false
          }} />
          <StackNavigator.Screen
          name="ViewRestaurant"
          component={ViewRestaurant}
          options={{
            headerShown: false
          }} />
          <StackNavigator.Screen 
          name="UpdatePassword"
          component={UpdatePassword}
          options={{
            headerShown: false
          }}/>
          <StackNavigator.Screen
          name="SearchPage"
          component={SearchPage}
          options={{
            headerShown: false
          }}/>

      </StackNavigator.Navigator>
    </NavigationContainer>
  );
}

export default AppInner;