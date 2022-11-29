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
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.white,
    flexDirection: "row",
    marginTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  content3: {
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: colors.white,
    flexDirection: "row",
    marginTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
  image: {
    width: 300,
  },
  text: {
    fontSize: 15,
    color: colors.black,
  },
  text1: {
    fontSize: 15,
    color: colors.black,
  },
  text2: {
    fontSize: 18,
    color: colors.black,
    fontWeight: "bold",
  },
});
