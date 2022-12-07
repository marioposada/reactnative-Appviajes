import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import AuthNavigator from "../authnavigation/auth";
import TabNavigator from "../tabnavigation/tab";
import { useSelector } from "react-redux";

// import MenuLateral from "./menuLateral";
// import 'react-native-gesture-handler';

const AppNavigator = () => {

  const isAuthenticated = useSelector(state => state.stateGlobal);

  return (
   
    <NavigationContainer>
      {!isAuthenticated && <AuthNavigator />}
      {isAuthenticated && <TabNavigator />}
      {/* {isAuthenticated && <MenuLateral />} */}
    </NavigationContainer>
  );
};

export default AppNavigator;
