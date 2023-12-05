import {StyleSheet, Text, View, TouchableOpacity} from "react-native";



export default function Dashbroad({ navigation }) {
    const movingBack = () => {
        // Perform login logic
        navigation.navigate('LoginPage'); // Just for testing
    };
    
    return (
        <View style={styles.container}>
            <View style={styles.adminBar}>
                <Text>Part 1</Text>
            </View>
            <View style={styles.main}>
                <View>
                    <Text>Part 2</Text>
                    <TouchableOpacity style={styles.loginBtn} onPress={movingBack}>
                        <Text style={styles.loginBtnText}>Log in</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#F9F9C6",
        flexDirection: 'row',
      },
      adminBar: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: "auto",
        borderRightColor: "#61481C",
        borderRightWidth: 1,
      },
      main: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: "auto",
    
      },
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