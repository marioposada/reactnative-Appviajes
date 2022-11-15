import { StyleSheet } from "react-native";
import { colors } from "../../../constants/theme/index";

export const styles =  StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        alignItems: "center",
        justifyContent: "center",
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 20,
    }
});
