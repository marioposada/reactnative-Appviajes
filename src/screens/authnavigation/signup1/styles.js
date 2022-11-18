import { StyleSheet } from "react-native";
import { colors } from "../../../constants/theme/index";

export const styles =  StyleSheet.create({
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
    buttom: {
        width: 300,
        backgroundColor: colors.primary_mayor,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        borderRadius: 5,
    },
    buttomTitle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
    },
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'flex-start',
        textAlign:"left",
        width: 320,
        // borderWidth: 1,
    },
    checkbox: {
        alignSelf: "center",
    },
});
