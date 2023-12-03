import {StyleSheet, Text, View, TouchableOpacity} from "react-native";



export default function Dashbroad({ navigation }) {
    const movingBack = () => {
        // Perform login logic
        navigation.navigate('AdminLoginPage'); // Just for testing
    };
    
    return (
        <View>
            <Text>Hello from HomepageCustomer</Text>
            <TouchableOpacity style={styles.loginBtn} onPress={movingBack}>
                <Text style={styles.loginBtnText}>Log in</Text>
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
    loginText: {
        fontSize: 24,
        color: "#61481C",
        fontWeight: 'bold',
        borderBottomColor: '#61481C',  // Set the border color here
        borderBottomWidth: 1,      // Set the border width
        paddingHorizontal: 25,
        paddingBottom:10,
    },
    loginBtn: {
        marginTop: 50,
    },
});