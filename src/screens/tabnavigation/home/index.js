import React from 'react'
import { View, Text, Image, ImageBackground} from 'react-native'
import { Button } from 'react-native-elements'
import {styles} from './styles'

import { useSelector, useDispatch } from 'react-redux'
import { SignOut } from '../../../redux/actions/action'

import FondoPantalla4 from '../../../../assets/FondoPantalla4.png';
import RayaPantalla4 from '../../../../assets/RayaPantalla4.png';
import AccesorioPantalla4 from '../../../../assets/AccesorioPantalla4.png';
import { useWindowDimensions } from 'react-native'

const HomeScreen = ({navigation}) => {
    const {width} = useWindowDimensions();
    const dispatch = useDispatch();
    const estado = useSelector(state => state.stateGlobal);

    function Probar () {
        console.log("el estado en home es: ", estado);
        dispatch({type: "SIGN_OUT"})
        console.log("el estado en home después del dispatch es: ", estado);
    }

    return (

        <View style={styles.container}>
            <ImageBackground source={FondoPantalla4} style={{ height: 200, borderWidth: 3, position:"absolute", top: 0, width: width}}>
                <View style={{backgroundColor: 'white',opacity: .25, height: 22, width: width}}></View>
                <View>
                    <Text style={styles.headerTitle}>Bienvenido, Carlos</Text>
                    <Text style={styles.headerTitle}>¿A dónde quieres ir hoy?</Text>
                </View>
            </ImageBackground>
            <View style={styles.geolocation}>
                <Image source={AccesorioPantalla4} style={{marginRight: 10}}/>
                <View >
                    <Text style={[styles.geolocationTitle, {position: 'relative', bottom:9}]}>Desde</Text>
                    <Image source={RayaPantalla4} style={{position: 'relative', top: 4}}/>
                    <Text style={[styles.geolocationTitle, {position: 'relative', top:22}]}>Hasta</Text>
                </View>
            </View>

            <View>
                <View>

                    <Text>Casa</Text>
                </View>
                <Text>DIRECCION 232 CALLE 3</Text>
            </View>
            <Button 
                title="Salir"
                onPress={() => Probar()}
            />
        </View>
    )
}

export default HomeScreen
