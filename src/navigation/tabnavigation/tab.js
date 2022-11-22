import React from 'react'
import {Image} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { colors } from '../../constants/theme'
import HomeNavigator from './home'
import TransportNavigator from './transp'
import AlertsNavigator from './alerts'

const BottomTab = createBottomTabNavigator()

const   TabNavigator = () => {
    return (
        <BottomTab.Navigator
        initialRouteName="HomeTab"
        screenOptions={{
          headerShown: false,
          
        }}
        >
            <BottomTab.Screen
                name="HomeTab"
                component={HomeNavigator}
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
    )
}

export default TabNavigator;

