import React from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-elements'
import {styles} from './styles'

import { useSelector, useDispatch } from 'react-redux'
import { SignOut } from '../../../redux/actions/action'
const HomeScreen = ({navigation}) => {
    const dispatch = useDispatch();
    const estado = useSelector(state => state.stateGlobal);
    function Probar () {
        console.log("el estado en home es: ", estado);
        dispatch({type: "SIGN_OUT"})
        console.log("el estado en home después del dispatch es: ", estado);
    }
    return (
        <View style={styles.container}>
            <Text>Home Screensd</Text>
            <Button 
                title="Salir"
                onPress={() => Probar()}
            />
        </View>
    )
}

export default HomeScreen
