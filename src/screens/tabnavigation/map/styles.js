import { StyleSheet } from "react-native";
import { colors } from "../../../constants/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.white,
    marginTop: "50px",
  },
  map: {
    width: "100%",
    height: "40%",
  },
  buttom: {
    width: 300,
    backgroundColor: colors.primary_mayor,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    borderRadius: 5,
  },
  buttomTitle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
  },
});
