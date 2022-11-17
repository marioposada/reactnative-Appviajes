import { StyleSheet } from "react-native";
import { colors } from "../../../constants/theme/index";

export const  styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        color: colors.black,
        fontSize: 16,

    },
    title: {
        color: colors.black,
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 20,
        marginBottom: 15,
    },
    subtitle: {
        fontSize: 18,
    },
    input: {
        height: 45,
        borderWidth: 1,
        padding: 10,
    },
    campo: {
        alignContent: "flex-start",
        // borderWidth: 1,
        width: 280,
        marginBottom: 20,
    },
    unknownPassword: {
        fontSize: 10,
        fontWeight: "bold",
        textDecorationLine: 'underline',
        textAlign: "left",
        marginBottom: 10,
    },
    buttom: {
        width: 300,
        backgroundColor: colors.black,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    buttomTitle: {
        color: 'white',
    }
});




