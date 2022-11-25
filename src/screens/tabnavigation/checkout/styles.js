import { StyleSheet } from "react-native";
import { colors } from "../../../constants/theme";

export const styles = StyleSheet.create({
  container: {
  
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
  },
  content: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
    marginVertical: 20,
  },

  image: {
    width: '100%',
    height: 243,
    resizeMode: "contain",
  },
});
