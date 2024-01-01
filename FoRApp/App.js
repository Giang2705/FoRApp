import HomepageCustomer from './src/customers/homepageCustomer';
import LoginPage from './src/customers/loginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import SignupPage from './src/customers/signupScreen';
import Dashbroad from './src/admin/dashbroad'
import RestaurantList from './src/admin/restaurantList'
import AddRestaurant from './src/admin/addRestaurant'
import EditFood from './src/shopOwner/editFoodpage'

const StackNavigator = createStackNavigator()

const AppInner = () => {
  return (
    <NavigationContainer>
      <StackNavigator.Navigator initialRouteName="EditFood">

        {/* Admin */}
        <StackNavigator.Screen name="Dashbroad" component={Dashbroad} options={{headerShown: false}}/>
        <StackNavigator.Screen name="RestaurantList" component={RestaurantList} options={{headerShown: false}}/>
        <StackNavigator.Screen name="AddRestaurant" component={AddRestaurant} options={{headerShown: false}}/>
        
        {/* Users */}
        <StackNavigator.Screen name="LoginPage" component={LoginPage} options={{headerShown: false}}/>
        <StackNavigator.Screen name="SignupPage" component={SignupPage} options={{headerShown: false}}/>

        {/* Shop Onwer */}
        <StackNavigator.Screen name="EditFood" component={EditFood} options={{headerShown: false}}/>

      </StackNavigator.Navigator>
    </NavigationContainer>
  );
}

export default AppInner;