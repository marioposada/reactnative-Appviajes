import React, {useState} from 'react';
import { styles } from './styles';
import { View, Text, Image, TouchableOpacity, Input, TextInput, KeyboardAvoidingView, ScrollView } from 'react-native';
import { colors } from '../../../constants/theme/index';
import Logo from '../../../../assets/Logo.png'
import Line from '../../../../assets/Line.png'
//LOGOS DE INICIO DE SESIÓN
import Facebook from '../../../../assets/Facebook.png'
import Google from '../../../../assets/Google.png'

import { useDispatch, useSelector } from 'react-redux';
import { LognIn, SignIn } from '../../../redux/actions/action';

//firebase
import { auth } from '../../../utils/firebase-config';

const LogIn1 = ({ navigation }) => {

    const dispatch = useDispatch();
    const estado = useSelector(state => state.stateGlobal);
    const [email, setEmail] = useState(" ");
    const [password, setPassword] = useState(" ");

    // function name() {
    //     console.log("el estado global es-->", estado);
    //      dispatch({type: "OBTENER_ACCESO"});
    //     console.log("el estado global2 ahora es-->", estado);
    // }
    const handleSignIn = () => {
        auth
        .signInWithEmailAndPassword(email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log('Logged in with: ', user.email);
            dispatch({type: "OBTENER_ACCESO", payload: true});
        })
        .catch(error => {alert(error.message), dispatch({type: "OBTENER_ACCESO", payload: false})})
    }
    // const handleSignIn = () => {
    //     auth
    //     .createUserWithEmailAndPassword(email, password)
    //     .then(userCredentials => {
    //         const user = userCredentials.user;
    //         console.log(user.email);
    //     }).catch(error => alert(error.message));
    // }
    return (
        <ScrollView style={{marginTop: 70}}>
            <KeyboardAvoidingView style={styles.container} > 
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
                        onChangeText={(text) => setEmail(text)}
                    />
                </View>
                <View style={styles.campo}>
                    <Text style={styles.subtitle} >Contraseña</Text>
                    <TextInput
                        style={styles.input} 
                        placeholder="Enter your password"
                        onChangeText={(text) => setPassword(text)}
                    />
                </View>
                <View style={{width: 280}}><Text style={styles.unknownPassword}>¿Olvidaste tu contraseña?</Text></View>
                <TouchableOpacity style={styles.buttom}  onPress={handleSignIn}>
                    <Text style={styles.buttomTitle} >Continuar</Text>
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
            </KeyboardAvoidingView>
        </ScrollView>
    );
}

export default LogIn1;
