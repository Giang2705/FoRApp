import HomepageCustomer from './src/customers/homepageCustomer';
import LoginPage from './src/customers/loginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import SignupPage from './src/customers/signupScreen';
import Dashbroad from './src/admin/dashbroad'
import RestaurantList from './src/admin/restaurantList'
import EditFood from './src/shopOwner/editFoodpage'
import MessageCustomer from './src/customers/messageCustomer';
import ChatBoxView from './src/customers/chatBoxView';

const StackNavigator = createStackNavigator()

const AppInner = () => {
  return (
    <NavigationContainer>
      <StackNavigator.Navigator initialRouteName="MessageCustomer">

        {/* Admin */}
        <StackNavigator.Screen name="Dashbroad" component={Dashbroad} options={{headerShown: false}}/>
        <StackNavigator.Screen name="RestaurantList" component={RestaurantList} options={{headerShown: false}}/>
        
        {/* Users */}
        <StackNavigator.Screen name="LoginPage" component={LoginPage} options={{headerShown: false}}/>
        <StackNavigator.Screen name="SignupPage" component={SignupPage} options={{headerShown: false}}/>
        <StackNavigator.Screen name="MessageCustomer" component={MessageCustomer} options={{headerShown: false}}/>
        <StackNavigator.Screen name="ChatBoxView" component={ChatBoxView} options={{headerShown: false}}/>


        {/* Shop Onwer */}
        <StackNavigator.Screen name="EditFood" component={EditFood} options={{headerShown: false}}/>

      </StackNavigator.Navigator>
    </NavigationContainer>
  );
}

export default AppInner;