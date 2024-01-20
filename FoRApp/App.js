import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { useState, useEffect, useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import useFonts from './useFont';

//Login-signup
import SignupPage from './src/customers/signupScreen';
import LoginPage from './src/customers/loginScreen';

// Admin
import Dashbroad from './src/admin/dashboard'
import RestaurantList from './src/admin/restaurantList'

//Customer
import HomepageCustomer from './src/customers/homepageCustomer';
import ViewFood from './src/orderfood/viewFood';
import ViewRestaurant from './src/orderfood/viewRestaurant';
import MessageCustomer from './src/customers/messageCustomer';
import OrderHistoryCustomer from './src/customers/orderHistoryCustomer';
import NotificationCustomer from './src/customers/notificationCustomer';
import SearchPage from './src/customers/searchPage';
import ChatBoxView from './src/customers/chatBoxView';
import Cart from './src/orderfood/cart';
import PlaceOrder from './src/orderfood/placeOrder';

//Staff
import HomepageStaffs from './src/staffs/homepageStaffs';

//Shop owner
import HomepageShopOwner from './src/shopowner/homepageShopOwner';
import EditFood from './src/shopowner/editFoodpage'
import EditRestaurant from './src/shopowner/editRestaurantpage';
import NotificationShopowner from './src/shopowner/notificationShopowner';

import Setting from './src/settings/setting';
import TopupCredit from './src/settings/topupCredit';
import UpdatePassword from './src/settings/updatePassword';


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
      <StackNavigator.Navigator initialRouteName='Dashbroad'
        >

        <StackNavigator.Screen name="LoginPage" component={LoginPage} options={{headerShown: false}}/>
        <StackNavigator.Screen name="SignupPage" component={SignupPage} options={{headerShown: false}}/>

        {/* Admin */}
        <StackNavigator.Screen name="Dashbroad" component={Dashbroad} options={{headerShown: false}}/>
        <StackNavigator.Screen name="RestaurantList" component={RestaurantList} options={{headerShown: false}}/>

        {/* Customer */}
        <StackNavigator.Screen name="HomepageCustomer" component={HomepageCustomer} options={{ headerShown: false }} />
        <StackNavigator.Screen name="MessageCustomer" component={MessageCustomer} options={{headerShown: false}}/>
        <StackNavigator.Screen name="ChatBoxView" component={ChatBoxView} options={{headerShown: false}}/>
        <StackNavigator.Screen name="OrderHistoryCustomer" component={OrderHistoryCustomer} options={{headerShown: false}}/>
        <StackNavigator.Screen name="NotificationCustomer" component={NotificationCustomer} options={{headerShown: false}}/>
        <StackNavigator.Screen name="ViewFood" component={ViewFood} options={{headerShown: false}} />
        <StackNavigator.Screen name="ViewRestaurant" component={ViewRestaurant} options={{ headerShown: false}} />
        <StackNavigator.Screen name="UpdatePassword" component={UpdatePassword} options={{ headerShown: false}}/>
        <StackNavigator.Screen name="SearchPage" component={SearchPage} options={{ headerShown: false}}/>
        <StackNavigator.Screen name="Cart" component={Cart} options={{ headerShown: false }}/>
        <StackNavigator.Screen name="PlaceOrder" component={PlaceOrder} options={{headerShown: false}}/> 
        <StackNavigator.Screen name="Setting" component={Setting} options={{ headerShown: false }}/>
        <StackNavigator.Screen name="TopupCredit" component={TopupCredit} options={{ headerShown: false}}/>

        {/* Staff */}
        <StackNavigator.Screen name="HomepageStaff" component={HomepageStaffs} options={{ headerShown: false}}/>

        {/* Shop Onwer */}
        <StackNavigator.Screen name="EditFood" component={EditFood} options={{headerShown: false}}/>
        <StackNavigator.Screen name="EditRestaurant" component={EditRestaurant} options={{headerShown: false}}/>
        <StackNavigator.Screen name="NotificationShopowner" component={NotificationShopowner} options={{headerShown: false}}/>
        <StackNavigator.Screen name="HomepageShopOwner" component={HomepageShopOwner} options={{ headerShown: false}}/>
         
      </StackNavigator.Navigator>
    </NavigationContainer>
  );
}

export default AppInner;