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
        marginTop: 25
    },
    editIcon: {
        position: "absolute",
        marginTop: 25,
        alignSelf: "flex-end",
    }
})

export default styles;