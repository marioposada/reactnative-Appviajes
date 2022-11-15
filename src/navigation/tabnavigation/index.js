import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import AuthNavigator from "../authnavigation/auth";

const AppNavigator = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <NavigationContainer>
      {isAuthenticated ? <TabNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigator;
