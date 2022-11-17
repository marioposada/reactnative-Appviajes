import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LogIn1, OnBoarding1, SignUp1 } from "../../screens/authnavigation";

const Stack = createNativeStackNavigator();

const AuthNavigation = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="LogIn1"
      screenOptions={{
        headerShown: false,
      }}
      >
      <Stack.Screen name="OnBoarding1" component={OnBoarding1} />
      <Stack.Screen name="LogIn1" component={LogIn1} />
      <Stack.Screen name="SignUp1" component={SignUp1} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
