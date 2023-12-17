import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    logoBackground: {
		backgroundColor: "white",
		width: "15%",
		borderRadius: 15
	},
	userButton: {
		position: "absolute",
		marginLeft: 310
	},
    logoButton: {
		height: 40,
		width: "70%",
		resizeMode: "center",
		margin: 9,
		borderRadius: 10
	},
    imageFood: {
		width: '100%',
		height: 80,
		resizeMode: "contain",
		borderRadius: 10,
        padding: 10
	},
    foodInfo: {
        fontFamily: "Montserrat",
        fontSize: 14,
        color: "#61481C"
    },
    foodTitle: {
        fontFamily: "Montserrat-Bold",
        fontSize: 15,
        color: "#61481C"
    },
    settingText: {
        fontFamily: "Montserrat-Bold",
        alignSelf: "center",
        color: "#61481C"
    },
    logoutButton: {
        borderRadius: 20,
        width: "50%",
        height: 50,
        alignSelf:"center",
        justifyContent: "center",
    },
    logoutText: {
        alignSelf: "center",
        fontFamily: "Montserrat-Bold",
    },
    descriptionInput: {
        fontFamily: "Montserrat",
        backgroundColor:"white",
        height: 100,
        width: "100%",
        borderRadius: 15,
        padding: 15,
        color: "#61481C",
        borderColor: "#61481C",
        borderWidth: 1
    },
    amountText: {
        fontFamily: "Montserrat",
        fontSize: 25,
        alignSelf: "center",
        textAlign: "center",
        justifyContent: "center",
        marginTop: -10,
        color: "#61481C",
        borderColor: "#61481C",
        borderWidth: 1,
        borderRadius: 15,
        marginRight: 20,
        marginLeft: 20,
        width: 50,
        height:50,
        lineHeight: 50
    }
})

export default styles;