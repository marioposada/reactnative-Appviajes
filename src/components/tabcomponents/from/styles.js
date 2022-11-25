import { StyleSheet } from "react-native";
import { colors } from "../../../constants/theme";

export const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
  },
  content1: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
    flexDirection: "row",
  },
  content2: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
    marginVertical: 10,
  },

  image: {
    width: 365,
  },
  text: {
    fontSize: 12,
    color: colors.black,
    marginRight: 10,
  },
  text1: {
    width: 380,
    fontSize: 12,
    color: colors.black,
    marginLeft: 10,
  },
});
