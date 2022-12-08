import React, {useEffect} from 'react'
import { View, Text, Image, ImageBackground, TouchableOpacity, FlatList, ScrollView} from 'react-native'
import { Button } from 'react-native-elements'
import {styles} from './styles'

import { useSelector, useDispatch } from 'react-redux'
import { SignOut } from '../../../redux/actions/action'

//Images
import FondoPantalla4 from '../../../../assets/FondoPantalla4.png';
import RayaPantalla4 from '../../../../assets/RayaPantalla4.png';
import AccesorioPantalla4 from '../../../../assets/AccesorioPantalla4.png';
import CasaPantalla4 from '../../../../assets/CasaPantalla4.png'
import TrabajoPantalla4 from '../../../../assets/TrabajoPantalla4.png'
import GimnasioPantalla4 from '../../../../assets/GimnasioPantalla4.png'
import AddPantalla4 from '../../../../assets/AddPantalla4.png'

import { useWindowDimensions } from 'react-native'
const HomeScreen = ({navigation}) => {
    const {width} = useWindowDimensions();
    const dispatch = useDispatch();
    const estado = useSelector(state => state.stateGlobal);

    const DATA = [
        {
            id: 1,
            title: "Casa",
            source: CasaPantalla4,
            direction: "Fitz Roy 2836, 1425, CABA, Argentina",
        }, 
        {
            id: 2,
            title: "Trabajo",
            source: TrabajoPantalla4,
            direction: "Avenida Santa Fe 3500, 1456, CABA, Argentina",
        },
        {
            id: 3,
            title: "Gimnasio1",
            source: GimnasioPantalla4,
            direction: "Ignacio Chenaut 151, 1454, CABA, Argentina"
        },
        {
            id: 4,
            title: "Gimnasio2",
            source: GimnasioPantalla4,
            direction: "Ignacio Chenaut 151, 1454, CABA, Argentina"
        },
        {
            id: 5,
            title: "Gimnasio3",
            source: GimnasioPantalla4,
            direction: "Ignacio Chenaut 151, 1454, CABA, Argentina"
        },
        {
            id: 6,
            title: "Gimnasio",
            source: GimnasioPantalla4,
            direction: "Ignacio Chenaut 151, 1454, CABA, Argentina"
        },
        {
            id: 7,
            title: "Gimnasio",
            source: GimnasioPantalla4,
            direction: "Ignacio Chenaut 151, 1454, CABA, Argentina"
        }
    ]
    function Probar () {
        console.log("el estado en home es: ", estado);
        dispatch({type: "SIGN_OUT"})
        console.log("el estado en home después del dispatch es: ", estado);
    }
    const Item = ({ item, onPress}) => (
        <TouchableOpacity onPress={onPress} style={styles.favorites}>
           <View style={styles.favoritesTop}>
                <Image source={item.source} />
                <Text style={styles.favoritesTopText}>{item.title}</Text>
            </View>
            <Text>{item.direction}</Text>
        </TouchableOpacity>
    );
    const renderItem = ({ item }) => {
        return (
          <Item
            item={item}
            onPress={() => {}}
          />
        );
      };
    useEffect(() => {
        navigation.setOptions({
            headerShown: false,
          })
    }, [])
    return (

        <View style={[styles.container]}>
            <ImageBackground source={FondoPantalla4} style={{ height: 220, borderWidth: 3, position:"absolute", top: 0, width: width}}>
                <View style={{backgroundColor: 'white',opacity: .25, height: 22, width: width}}></View>
                <View>
                    <Text style={styles.headerTitle}>Bienvenido, Carlos</Text>
                    <Text style={styles.headerTitle}>¿A dónde quieres ir hoy?</Text>
                    <TouchableOpacity 
                    onPress={() => Probar()}
                    >
                        <Text style={[styles.headerTitle, {color: 'red'}]}>Salir</Text>
                    </TouchableOpacity>
                </View>
                
            </ImageBackground>
            <View style={styles.geolocation}>
                <Image source={AccesorioPantalla4} style={{marginRight: 10}}/>
                <View >
                    <TouchableOpacity onPress={() => navigation.navigate("Map")}>
                        <Text style={[styles.geolocationTitle, {position: 'relative', bottom:9}]}>Desde</Text>
                    </TouchableOpacity>
                    <Image source={RayaPantalla4} style={{position: 'relative', top: 4}}/>
                    <TouchableOpacity onPress={() => navigation.navigate("Map")}>
                        <Text style={[styles.geolocationTitle, {position: 'relative', top:22}]}>Hasta</Text>
                    </TouchableOpacity>
                </View>
            </View>


            <View style={{top: 220}}>
                {/* <ScrollView > */}
                {/* <FlatList>
                    <View style={styles.favorites}>
                        <View style={styles.favoritesTop}>
                            <Image source={CasaPantalla4} />
                            <Text style={styles.favoritesTopText}>Casa</Text>
                        </View>
                        <Text>Fitz Roy 2836, 1425, CABA, Argentina</Text>
                    </View>
                    <View style={styles.favorites}>
                        <View style={styles.favoritesTop}>
                            <Image source={TrabajoPantalla4} />
                            <Text style={styles.favoritesTopText}>Trabajo</Text>
                        </View>
                        <Text>Avenida Santa Fe 3500, 1456, CABA, Argentina</Text>
                    </View>
                    <View style={styles.favorites}>
                        <View style={styles.favoritesTop}>
                            <Image source={GimnasioPantalla4} />
                            <Text style={styles.favoritesTopText}>Gimnasio</Text>
                        </View>
                        <Text>Ignacio Chenaut 151, 1454, CABA, Argentina</Text>
                    </View>
                    <View style={styles.favorites}>
                        <View style={styles.favoritesTop}>
                            <Image source={GimnasioPantalla4} />
                            <Text style={styles.favoritesTopText}>Gimnasio</Text>
                        </View>
                        <Text>Ignacio Chenaut 151, 1454, CABA, Argentina</Text>
                    </View>
                </FlatList> */}
                <View style={{height: 300}}>
                    <FlatList
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                    />
                </View>
                <TouchableOpacity style={styles.addFavorite}>
                    <Image source={AddPantalla4} style={{marginHorizontal: 15}}/>
                    <Text style={{ fontWeight: 'bold'}}>Añadir nuevo Favorito</Text>
                </TouchableOpacity>
                
                <View style={{height: 270}}>
                </View> 
                {/* </ScrollView> */}
            </View>
            
            
        </View>
    )
}

export default HomeScreen
