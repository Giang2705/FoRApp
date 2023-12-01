import HomepageCustomer from './src/customers/homepageCustomer';
import LoginPage from './src/customers/loginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import SignupPage from './src/customers/signupScreen';


const StackNavigator = createStackNavigator()

const AppInner = () => {
  return (
    <NavigationContainer>
      <StackNavigator.Navigator initialRouteName="LoginPage">
        <StackNavigator.Screen name="LoginPage" component={LoginPage} options={{headerShown: false}}/>
        <StackNavigator.Screen name="SignupPage" component={SignupPage} options={{headerShown: false}}/>

      </StackNavigator.Navigator>
    </NavigationContainer>
  );
}

export default AppInner;