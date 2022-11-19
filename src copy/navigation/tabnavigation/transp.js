import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TransportScreen from '../../screens/tabnavigation/transport'


const Stack = createNativeStackNavigator()

const Transport = ({navigation}) => {
    return (
        <Stack.Navigator initialRouteName="Transport">
            <Stack.Screen name="Transport" component={TransportScreen} />
        </Stack.Navigator>
    )
}

export default Transport;



