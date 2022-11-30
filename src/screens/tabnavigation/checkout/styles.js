import { StyleSheet } from "react-native";
import { colors } from "../../../constants/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
  },
  content: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
    marginVertical: 5,
  },

  image: {
    width: "100%",
    height: 240,
  },
  button: {
    width: 380,
    height: 50,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 5,
  },
  buttonAceptar: {
    width: 190,
    height: 50,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 10,
    marginRight: 10,
  },
  buttonAceptar2: {
    width: '100%',
    height: 50,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 10,

  },
  buttonCancelar: {
    width: 190,
    height: 50,
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 10,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  text3: {
    fontSize: 15,
    color: colors.white,
    fontWeight: "bold",
  },
  centeredView: {
    flex: 1,
    alignItems: "center",
    marginTop: 22,
  },
  textCancelar: {
    fontSize: 15,
    color: colors.primary,
    fontWeight: "bold",
  },

  modalText: {
    width: "100%",
    marginBottom: 15,
    textAlign: "center",
    paddingTop: 15,
    fontSize: 20,
    height: 60,
    backgroundColor: colors.background_light,
    color: colors.black,
  },
  card: {
    width: "100%",
    height: 150,
    backgroundColor: colors.white,
    justifyContent: "center",
    borderRadius: 5,
    marginTop: 10,
    borderWidth: 0.8,
    borderColor: colors.grey_placeholder  },
  text: {
    fontSize: 14,
    color: colors.black,
    fontWeight: "regular",
    marginVertical: 10,
    marginLeft: 10,
  },
  text2: {
    fontSize: 15,
    color: colors.black,
    marginVertical: 3,
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
  presables: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
    marginVertical: 10,
  },
  textSuccess1:{
    fontSize: 20,
    textAlign: 'center',
    color: colors.black,
    fontWeight: "regular",
    marginVertical: 3,
    marginBottom: 30,

  },
  textSuccess2:{
    fontSize: 15,
    textAlign: 'center',
    color: colors.black,
    fontWeight: "regular",
    marginVertical: 3,

  },
  textSuccess3:{
    fontSize: 15,
    textAlign: 'center',
    color: colors.black,
    fontWeight: "regular",
    marginVertical: 3,
    marginBottom: 30,

  },
  textSuccess4:{
    fontSize: 15,
    textAlign: 'center',
    color: colors.black,
    fontWeight: "bold",
    marginVertical: 3,
    marginBottom: 30,

  },
  textSuccess5:{
    fontSize: 15,
    textAlign: 'center',
    color: colors.black,
    fontWeight: "regular",
    marginVertical: 3,

  },
  textStyleTicket: {
    fontSize: 15,
    color: colors.white,
    fontWeight: "bold",
    textAlign: "center",

  }

});
