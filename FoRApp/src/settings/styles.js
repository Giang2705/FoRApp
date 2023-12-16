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
    imageAvatar: {
		width: '100%',
		height: 80,
		resizeMode: "contain",
		borderRadius: 10,
        padding: 10
	},
    userInfo: {
        fontFamily: "Montserrat",
        fontSize: 12,
        color: "#61481C"
    },
    userName: {
        fontFamily: "Montserrat-SemiBold",
        fontSize: 12,
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
    }
})

export default styles;