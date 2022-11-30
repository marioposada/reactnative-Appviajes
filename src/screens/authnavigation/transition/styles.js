import { StyleSheet } from "react-native";
import { colors } from "../../../constants/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary_mayor,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 20,
        color: colors.white,
    }
})
