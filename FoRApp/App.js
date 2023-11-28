import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomepageCustomer from './src/customers/homepageCustomer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

export const theme = {
  colors: {
    background: "#F9F9C6",
    mainColor: "#C51605",
  }
}

const StackNavigator = createStackNavigator()

const AppInner = () => {
  return (
    <NavigationContainer theme={theme}>
      <StackNavigator.Navigator>
        <StackNavigator.Screen 
          name="homepageCustomer"
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
