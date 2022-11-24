import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import AuthNavigator from "../authnavigation/auth";
import TabNavigator from "../tabnavigation/tab";

import { useSelector } from "react-redux";
const AppNavigator = () => {

  const isAuthenticated = useSelector(state => state.stateGlobal);
  //  console.log("aqui--->",estado);

  // let isAuthenticated = estado;

  return (
   
    <NavigationContainer>
      {!isAuthenticated && <AuthNavigator />}
      {isAuthenticated && <TabNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigator;
