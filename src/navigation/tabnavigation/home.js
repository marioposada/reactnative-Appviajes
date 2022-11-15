import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack"


const Stack = createNativeStackNavigator()

const Home = ({navigation}) => {
    return (
        <Stack.Navigator>
          
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
    )
}

export default Home


