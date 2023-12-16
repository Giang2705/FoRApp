import * as Font from 'expo-font';

const useFonts = async () => {
  await Font.loadAsync({
		Montserrat: require("./assets/fonts/Montserrat-Regular.ttf"),
		"Montserrat-Italic": require("./assets/fonts/Montserrat-Italic-VariableFont_wght.ttf"),
		"Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
		// "jsMath-cmbx10": require("./assets/fonts/jsMath-cmbx10.ttf"),
		"Montserrat-SemiBold": require("./assets/fonts/Montserrat-SemiBold.ttf"),
		"Montserrat-Medium": require("./assets/fonts/Montserrat-Medium.ttf")
  });
};

export default useFonts;