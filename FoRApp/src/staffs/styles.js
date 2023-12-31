import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    backgroundImage: {
        width: "100%",
        height: 200,
        // resizeMode: "cover"
    },
    header: {
        fontFamily: "Montserrat-Bold",
        fontSize: 18,
        color: "#61481C",
        position: "absolute",
        backgroundColor: "white",
        borderRadius: 15,
        alignSelf: "center",
        padding: 7,
        marginTop: 55
    },
    editIcon: {
        position: "absolute",
        marginTop: 50,
        // alignSelf: "flex-end",
        // marginRight: 15,
        marginLeft: 335
    },
    section: {
        fontFamily: "Montserrat-Bold",
        color: "#61481C",
        fontSize: 16
    },
    foodImage: {
        height: 100,
        width: "25%",
        margin: 15,
        resizeMode: "cover",
        borderRadius: 10
    },
    bottomContainer: {
        width: "100%",
        backgroundColor: "white",
        flexDirection: "row",
        borderRadius: 15,
        position: "absolute",
        bottom: "-115%",
        justifyContent:"center",
        alignItems:"center",
        
    },
    logoBackground: {
		backgroundColor: "white",
		width: "15%",
		borderRadius: 15,
        position: "absolute",
        marginTop: 45,
        marginLeft: 15
	},
	userButton: {
		position: "absolute",
		marginLeft: 330,
        marginTop: 45
	},
    logoButton: {
		height: 40,
		width: "70%",
		resizeMode: "center",
		margin: 9,
		borderRadius: 10
	},
})

export default styles;