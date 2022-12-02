import { StyleSheet } from "react-native";
import { colors } from "../../../constants/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.white,
  },
  image: {
    width: 340,
    height: 257,
    marginTop: 20,
  },
  text1: {
    fontSize: 12,
    color: colors.input_background,
    marginTop: 8,
    textAlign: "center",
    fontWeight: "bold",
  },
  textswitch1: {
    fontSize: 15,
    color: colors.input_background,
    paddingLeft: 15,
    marginVertical: 5,
    fontWeight: "bold",
  },
  textswitch2: {
    fontSize: 15,
    color: colors.input_background,
    paddingLeft: 15,
    marginVertical: 5,
    fontWeight: "bold",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    marginLeft: 40,
  },
  content1: {
    width: 200,
  },
  content2: {
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center",

    justifyContent: "center",
  },
  content3: {
    flexDirection: "row",
    alignItems: "center",

    paddingRight: 60,
  },
  content4: {
    flexDirection: "row",
    alignItems: "center",

    paddingLeft: 60,
  },
  textbus: {
    fontSize: 15,
    color: colors.input_background,
    marginLeft: 20,
    fontWeight: "bold",
  },
  textprice: {
    fontSize: 15,
    fontWeight: "bold",
    color: colors.input_background,
    textAlign: 'center',
    paddingTop: 10,
  }
});
