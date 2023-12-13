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
    addButton: {
        color: "#61481C",
        position: "absolute",
        marginLeft: 335
    },
    section: {
        fontFamily: "Montserrat-Bold",
        color: "#61481C",
        fontSize: 16
    },
    foodImage: {
        height: 100,
        width: "18%",
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
    buttonInCard: {
        width: "95%",
        marginLeft: 5
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
    logoBackground: {
		backgroundColor: "white",
		width: "15%",
		borderRadius: 15,
        position: "absolute",
        marginTop: 45,
        marginLeft: 15
	},
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // marginTop: 22,
        backgroundColor: "rgba(52, 52, 52, 0.8)",
        
    },
    modalView: {
        // margin: 20,
        backgroundColor: '#F9F9C6',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
    },
    modalText: {
        fontFamily: "Montserrat",
        color: "#61481C"
    },
    textInput: {
        fontFamily: "Montserrat",
        backgroundColor:"white",
        borderRadius: 15,
        height: 40,
        width: 250,
        paddingLeft: 10,
        paddingRight: 10,
        color: "#61481C"
    },
    descriptionInput: {
        fontFamily: "Montserrat",
        backgroundColor:"white",
        height: 100,
        width: 250,
        borderRadius: 15,
        paddingLeft: 10,
        paddingRight: 10,
        color: "#61481C",
        paddingBottom: 20
    },
    uploadPhoto: {
        backgroundColor: "white",
        alignSelf: "center",
        padding: 30,
        borderRadius: 15,
        color: "#61481C"
    },
    modalHeader: {
        fontFamily: "Montserrat-Bold",
        color: "#61481C",
        alignSelf: "center",
        fontSize: 18
    },
    buttonForm: {
        marginTop: 20,
        
    }
})

export default styles;