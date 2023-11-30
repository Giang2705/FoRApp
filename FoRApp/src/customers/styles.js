import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    text: {
		fontFamily: "Montserrat",
		fontSize: 12,
        color: "#61481C"
	},
	header: {
		fontFamily: "Montserrat-Bold",
		fontSize: 12,
        color: "#61481C"
	},
	buttonContainer: {
		width: "80%",
		borderRadius: 15,
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.25,
		shadowColor: "black",
		padding: 15,
		elevation: 4,
		marginBottom: "15%",
		overflow: "visible",
	},
	buttonTitle: {
		fontFamily: "Montserrat-Bold",
		fontSize: 15,
		textAlign: 'center',
        color: "#61481C"
	},
    cardContainer: {
		width: "100%",
		borderRadius: 20,
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.25,
		shadowColor: "black",
		padding: 17,
		backgroundColor: "white",
		elevation: 4,
	},
	groupCardContainer:{
		width: "100%",
		borderRadius: 20,
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.25,
		shadowColor: "black",
		padding: 12,
		backgroundColor: "white",
		elevation: 4,
	},
	image: {
		width: 50,
		height: 200,
		resizeMode: 'stretch',
	
	},
	bottomContainer: {
		width: "100%",
		position: "absolute",
		bottom: "5%",
		backgroundColor: "transparent",
	},
	bottomNav: {
	width: "100%",
	backgroundColor: "transparent",
	borderRadius: 8,
	justifyContent: "center",
	alignItems: "center",
	flexDirection: "row",
	},
})