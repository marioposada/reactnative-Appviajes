import { StyleSheet } from "react-native";
import { colors } from "../../../constants/theme/index";

export const  styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
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
        marginBottom: 8,
    },
    input: {
        height: 45,
        borderWidth: 1,
        borderColor: colors.grey_line,
        padding: 10,
        borderRadius: 5,
        backgroundColor: colors.white,
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
        textAlign: "right",
        marginBottom: 10,
    },
    buttom: {
        width: 300,
        backgroundColor: colors.black,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        borderRadius: 5,
    },
    buttomTitle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
    },
    authentication: {
        flexDirection: 'row',
        width: 300,
        padding: 10,
        justifyContent: 'space-evenly',
        marginVertical: 10,
    }
});




