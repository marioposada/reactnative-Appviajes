import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AlertsScreen from '../../screens/tabnavigation/alert'

const Stack = createNativeStackNavigator()

const Alerts = ({navigation}) => {
    return (
        <Stack.Navigator initialRouteName="Alerts">
            <Stack.Screen name="Alerts" component={AlertsScreen} />
        </Stack.Navigator>
    )
}

export default Alerts;

