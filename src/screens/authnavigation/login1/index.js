import React from 'react';
import { styles } from './styles';
import { View, Text, Image, TouchableOpacity, Input, TextInput } from 'react-native';
import { colors } from '../../../constants/theme/index';
import Logo from '../../../../assets/Logo.png'
import Line from '../../../../assets/Line.png'

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
            <Text style={styles.unknownPassword}>¿Olvidaste tu contraseña?</Text>
            <TouchableOpacity style={styles.buttom}>
                <Text style={styles.buttomTitle}>Continuar</Text>
            </TouchableOpacity>
            <View>
                {/* <Image source={Line} /> */}
            </View>
            <Text style={styles.text} onPress={() => navigation.navigate('SignUp1')}>Don't have an account? Sign Up</Text>
        </View>
    );
}

export default LogIn1;
