import React from 'react';
import { useDispatch } from 'react-redux';
import {styles } from './styles';
import { View, Text, Image, TouchableOpacity, TextInput, KeyboardAvoidingView, ScrollView} from 'react-native';
import Logo from '../../../../assets/Logo.png'
import { useState } from 'react';
import {CheckBox} from 'react-native-elements'

//firebase
import { auth } from '../../../utils/firebase-config';

const SignUp1 = ({ navigation }) => {

    const [state, setState] = useState(false);

    const [email, setEmail] = useState(" ");
    const [password, setPassword] = useState(" ");

    const dispatch = useDispatch();

    const handleCreateAccount = () => {
        auth
        .createUserWithEmailAndPassword(email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log('Registered with: ', user.email);
            dispatch({type: "OBTENER_ACCESO", payload: true});
        }).catch(error => {alert(error.message); dispatch({type: "OBTENER_ACCESO", payload: false})});
    }
    // const handleCreateAccount = () => {
    //     createUserWithEmailAndPassword(auth, email, password)
    //     .then(() => {
    //         console.log("Account created!");
    //         const user = userCredential.user;
    //         console.log(user);
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     })
    // }
    return (
        <ScrollView style={{marginTop: 50}}>
            <KeyboardAvoidingView style={styles.container} >

                <View onPress={() => navigation.navigate("OnBoarding1")}>
                    <Image source={Logo} style={{width: 135.46, height: 157.2}} />
                </View>

                <Text style={styles.title} >Nuevo Usuario</Text>

                <View style={styles.campo}>
                    <Text style={styles.subtitle} >E-mail</Text>
                    <TextInput
                        style={styles.input} 
                        placeholder="ejemplo@gmail.com"
                        onChangeText={(text) => {setEmail(text)}}
                    />
                </View>

                <View style={styles.campo}>
                    <Text style={styles.subtitle} >Contraseña</Text>
                    <TextInput
                        style={styles.input} 
                        placeholder="Enter your password"
                        onChangeText={(text) => {setPassword(text)}}
                    />
                </View>

                <View style={styles.campo}>
                    <Text style={styles.subtitle} >Repetir contraseña</Text>
                    <TextInput
                        style={styles.input} 
                        placeholder="Enter your password"
                    />
                </View>

                <View style={styles.checkboxContainer}>
                    <CheckBox checked={state} onPress={( ) => setState(e => !e)} checkedColor={"black"}/>
                    <Text>Acepto términos y condiciones</Text>
                </View>

                <TouchableOpacity style={styles.buttom} onPress={handleCreateAccount}>
                    <Text style={styles.buttomTitle}>Registrate</Text>
                </TouchableOpacity>
                <Text>¿Posees una cuenta?.Haz click <Text style={{fontWeight: 'bold'}} onPress={() => navigation.navigate('LogIn1')}>aquí</Text></Text>
            </KeyboardAvoidingView>
        </ScrollView>
    );
}

export default SignUp1;

