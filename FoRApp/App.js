import HomepageCustomer from './src/customers/homepageCustomer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

import SignupPage from './src/customers/signupScreen';
import LoginPage from './src/customers/loginScreen';

import Dashbroad from './src/admin/dashbroad'
import RestaurantList from './src/admin/restaurantList'

import MessageCustomer from './src/customers/messageCustomer';
import OrderHistoryCustomer from './src/customers/orderHistoryCustomer';
import NotificationCustomer from './src/customers/notificationCustomer';

import EditFood from './src/shopOwner/editFoodpage'
import EditRestaurant from './src/shopOwner/editRestaurantpage';
import ChatBoxView from './src/customers/chatBoxView';
import NotificationShopowner from './src/shopOwner/notificationShopowner';

const StackNavigator = createStackNavigator()

const AppInner = () => {
  return (
    <NavigationContainer>
      <StackNavigator.Navigator initialRouteName="NotificationShopowner">

        {/* Admin */}
        <StackNavigator.Screen name="Dashbroad" component={Dashbroad} options={{headerShown: false}}/>
        <StackNavigator.Screen name="RestaurantList" component={RestaurantList} options={{headerShown: false}}/>
        
        {/* Users */}
        <StackNavigator.Screen name="LoginPage" component={LoginPage} options={{headerShown: false}}/>
        <StackNavigator.Screen name="SignupPage" component={SignupPage} options={{headerShown: false}}/>
        <StackNavigator.Screen name="MessageCustomer" component={MessageCustomer} options={{headerShown: false}}/>
        <StackNavigator.Screen name="ChatBoxView" component={ChatBoxView} options={{headerShown: false}}/>
        <StackNavigator.Screen name="OrderHistoryCustomer" component={OrderHistoryCustomer} options={{headerShown: false}}/>
        <StackNavigator.Screen name="NotificationCustomer" component={NotificationCustomer} options={{headerShown: false}}/>

        {/* Shop Onwer */}
        <StackNavigator.Screen name="EditFood" component={EditFood} options={{headerShown: false}}/>
        <StackNavigator.Screen name="EditRestaurant" component={EditRestaurant} options={{headerShown: false}}/>
        <StackNavigator.Screen name="NotificationShopowner" component={NotificationShopowner} options={{headerShown: false}}/>


      </StackNavigator.Navigator>
    </NavigationContainer>
  );
}

export default AppInner;