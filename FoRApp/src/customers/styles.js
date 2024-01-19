import { StyleSheet, Dimensions } from "react-native";

const  styles = StyleSheet.create({
    text: {
		fontFamily: "Montserrat",
		fontSize: 12,
        color: "#61481C"
	},
	textHours: {
		fontFamily: "Montserrat-SemiBold",
		fontSize: 11,
        color: "#C51605"
	},
	header: {
		fontFamily: "Montserrat-Bold",
		fontSize: 17,
        color: "#61481C",
		marginBottom: 10
	},
	textTitle: {
		fontSize: 14,
		fontFamily: "Montserrat-SemiBold",
		color: "#61481C",
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
	imageRestaurant: {
		width: '50%',
		height: 100,
		resizeMode: "cover",
		borderRadius: 10,
		alignSelf: "center"
	},
	imageFood: {
		width: '20%',
		height: 80,
		resizeMode: "cover",
		borderRadius: 10,
		alignSelf: "center",
		marginLeft: 5,
		marginTop: 5,
		marginBottom: 5
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
	listContainer:{
		width: '90%',
		height: '60%',
	},
	bottomContainer: {
		width: "100%",
		position: "absolute",
		bottom: "-0.5%",
		backgroundColor: "white",
		flexDirection: "row",
		borderRadius: 15
	},
	bottomNav: {
		width: "100%",
		// backgroundColor: "white",
		// borderRadius: 8,
		justifyContent: "center",
		flexDirection: "row",
		// alignItems: "center",
	},
	shadowBtn: {
		shadowColor: "#000",
		shadowOffset: {
		  width: 0,
		  height: 7,
		},
		shadowOpacity: 0.5,
		shadowRadius: 13.97,
		elevation: 20,
	},
	logoButton: {
		height: 40,
		width: "70%",
		resizeMode: "center",
		margin: 9,
		borderRadius: 10
	},
	logoBackground: {
		backgroundColor: "white",
		width: "15%",
		borderRadius: 15
	},
	userButton: {
		position: "absolute",
		marginLeft: 310
	},
	searchText: {
		fontFamily: "Montserrat",
		width: "80%"
	},
	timeSlotInput: {
        fontFamily: "Montserrat",
        backgroundColor: "transparent",
        borderRadius: 15,
        borderColor: "#61481C",
        borderWidth: 1,
		width: '12%',
		padding: 8,
		fontSize: 20,
		alignContent:'center'
		// width: "100%",
    }
})

export default styles;