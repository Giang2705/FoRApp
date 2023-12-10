import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    backgroundImage: {
        width: "100%",
        height: "65%",
        resizeMode: "cover"
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
        alignSelf: "flex-end",
    },
    section: {
        fontFamily: "Montserrat-Bold"
    },
    foodImage: {
        height: "35%",
        width: "30%",
        position: "relative",
        marginTop: 15
    }
})

export default styles;