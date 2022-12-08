import React from 'react';
import { StyleSheet} from "react-native";
import AppNavigator from "./src/navigation/tabnavigation";

import { Provider } from "react-redux";
import configureStore from "./src/redux/store";

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
