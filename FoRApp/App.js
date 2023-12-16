import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import HomepageCustomer from './src/customers/homepageCustomer';

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
        >
        <StackNavigator.Screen
          name="HomepageCustomer"
          component={HomepageCustomer}
          options={{
            headerShown: false
          }}
        />
        {/* <StackNavigator.Screen
          name="HomepageStaff"
          component={HomepageStaffs} 
          options={{
            headerShown: false
          }}/> */}
          {/* <StackNavigator.Screen
          name="HomepageShopOwner"
          component={HomepageShopOwner} 
          options={{
            headerShown: false
          }}/> */}
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
      </StackNavigator.Navigator>
    </NavigationContainer>
  );
}

export default AppInner;