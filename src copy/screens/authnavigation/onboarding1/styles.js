import { StyleSheet } from "react-native";
import { colors } from "../../../constants/theme/index";

export const styles =  StyleSheet.create({
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
        color: colors.primary_mayor,
        fontSize: 60,
        fontWeight: "bold",
        marginBottom: 20,
    },
});