import { StyleSheet } from "react-native";
import { colors } from "../../../constants/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.white,
    marginTop: 50,
  },
  map: {
    width: "100%",
    height: "65%",
  },
  buttom: {
    width: 370,
    backgroundColor: colors.primary,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    borderRadius: 5,
  },
  buttomTitle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
  },
  content: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
    marginTop: 40,
  },
  contentCard: {
    height: 100,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
  },
  contentIcon: {
    justifyContent: "center",
  },
  contentText: {
    marginHorizontal: 10,
  },
});
