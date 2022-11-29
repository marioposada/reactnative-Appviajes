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
    marginVertical: 30,
  },

  image: {
    width: "100%",
    height: 250,
  },
  button: {
    width: 400,
    height: 50,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 40,
  },
  text3: {
    fontSize: 15,
    color: colors.white,
    fontWeight: "bold",
  },
});
