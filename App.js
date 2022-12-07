import React from 'react';
import { StyleSheet, Text, View } from "react-native";
import AppNavigator from "./src/navigation/tabnavigation";

import { Provider } from "react-redux";
// import store from "./src/redux/store";
import configureStore from "./src/redux/store";
//Para el drawer navigator
import 'react-native-gesture-handler';

export default function App() {

  return (
    <Provider store = { configureStore }> 
      <AppNavigator /> 
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
