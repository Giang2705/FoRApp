import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

// admin
import AdminLoginPage from './src/admin/adminLoginScreen'
import Dashbroad from './src/admin/dashbroad'

// user
import HomepageCustomer from './src/customers/homepageCustomer';
import LoginPage from './src/customers/loginScreen';
import SignupPage from './src/customers/signupScreen';

const StackNavigator = createStackNavigator()

const AppInner = () => {
  return (
    <NavigationContainer>
      <StackNavigator.Navigator initialRouteName="LoginPage">

        {/* Admin */}
        <StackNavigator.Screen name="AdminLoginPage" component={AdminLoginPage} options={{headerShown: false}}/>
        <StackNavigator.Screen name="Dashbroad" component={Dashbroad} options={{headerShown: false}}/>
        
        {/* Users */}
        <StackNavigator.Screen name="LoginPage" component={LoginPage} options={{headerShown: false}}/>
        <StackNavigator.Screen name="SignupPage" component={SignupPage} options={{headerShown: false}}/>

        <StackNavigator.Screen name="HomepageCustomer" component={HomepageCustomer} options={{headerShown: false}} />

      </StackNavigator.Navigator>
    </NavigationContainer>
  );
}

export default AppInner;