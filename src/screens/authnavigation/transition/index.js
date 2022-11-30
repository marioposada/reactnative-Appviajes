import React, { useEffect } from 'react'
import { View, Text, StyleSheet, useWindowDimensions} from 'react-native'
import { useDispatch } from 'react-redux'
import { styles } from './styles'
import LottieView from 'lottie-react-native'
import Loading from '../../../../assets/Loading.json'
const Transition = ({navigation}) => {
    const {width} = useWindowDimensions();
    const {height} = useWindowDimensions();
    const dispatch = useDispatch();
    useEffect(() => {
        setTimeout(() => {
            dispatch({type: "OBTENER_ACCESO", payload: true});
        }, 2000)
    }, [])
    return (
        <View style={[styles.container, StyleSheet.absoluteFillObject]}>
            <View style={{backgroundColor: 'white',opacity: .25, height: 22, width: width, position:'absolute', top: 0}}></View>
            <View style={{flex:1, width: 350, position: 'relative', bottom: 30 }}>
                <LottieView source={Loading} autoPlay loop/>
            </View>
            <Text style={[styles.Text, {position: 'absolute', top: height/2+50, color: 'white'}]}>Cargando Mapas</Text>
        </View>
    )
}

export default Transition;