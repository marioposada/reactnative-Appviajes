import React from 'react';
import { styles } from './styles';
import { View, Text, Image, TouchableOpacity, Input, TextInput } from 'react-native';
import { colors } from '../../../constants/theme/index';
import Logo from '../../../../assets/Logo.png'
import Line from '../../../../assets/Line.png'
//LOGOS DE INICIO DE SESIÓN
import Facebook from '../../../../assets/Facebook.png'
import Google from '../../../../assets/Google.png'

const LogIn1 = ({ navigation }) => {

    return (
        <View style={styles.container}>
            {/* <Input placeholder="Email" /> */}
            <View onPress={() => navigation.navigate("OnBoarding1")}>
                <Image source={Logo} style={{width: 135.46, height: 157.2}} />
            </View>

            <Text style={styles.title} >Iniciar sesión</Text>

            <View style={styles.campo}>
                <Text style={styles.subtitle} >E-mail</Text>
                <TextInput
                    style={styles.input} 
                    placeholder="ejemplo@gmail.com"
                />
            </View>
            <View style={styles.campo}>
                <Text style={styles.subtitle} >Contraseña</Text>
                <TextInput
                    style={styles.input} 
                    placeholder="Enter your password"
                />
            </View>
            <View style={{width: 280}}><Text style={styles.unknownPassword}>¿Olvidaste tu contraseña?</Text></View>
            <TouchableOpacity style={styles.buttom}>
                <Text style={styles.buttomTitle}>Continuar</Text>
            </TouchableOpacity>
            <View>
                <Text> <Image source={Line} />  O iniciar con  <Image source={Line} /></Text>
            </View>
            <View style={styles.authentication}>
                <View>
                    <Image style={{marginBottom: 10}} source={Facebook} />
                    <Text>Facebook</Text>
                </View>
                <View>
                    <Image style={{marginBottom: 10}} source={Google} />
                    <Text>Google</Text>
                </View>
            </View>
            <Text>¿Aún no te registraste?.Haz click <Text style={{fontWeight: 'bold'}} onPress={() => navigation.navigate('SignUp1')}>aquí</Text></Text>
        </View>
    );
}

export default LogIn1;
