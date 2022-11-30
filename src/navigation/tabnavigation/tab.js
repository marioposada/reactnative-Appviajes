import AlertsNavigator from "./alerts";
import HomeNavigator from "./home";
import { Image } from "react-native";
import MapScreen from "../../screens/tabnavigation/map";
import React from "react";
import TransportNavigator from "./transp";
import { colors } from "../../constants/theme";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const BottomTab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="HomeTab"
      screenOptions={{
        headerShown: false,
      }}
    >
      <BottomTab.Screen
        name="HomeTab"
        component={MapScreen}
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../../../assets/iconodirecciones.png")}
              size={24}
              color={focused ? colors.primary : colors.grey}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Transport"
        component={TransportNavigator}
        options={{
          title: "Transport",
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../../../assets/iconotransporte.png")}
              size={24}
              color={focused ? colors.primary : colors.grey}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Alerts"
        component={AlertsNavigator}
        options={{
          title: "Alerts",
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../../../assets/iconoalertas.png")}
              size={24}
              color={focused ? colors.primary : colors.grey}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default TabNavigator;
