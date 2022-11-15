import React from 'react';
import {styles } from './styles';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { colors } from '../../../constants/theme/index';

const SignUp1 = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../../../assets/images/logo.png')} />
            <Text style={styles.title}>Welcome Back!</Text>
            <Text style={styles.subtitle}>Log in to your account to continue</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
                <Text style={styles.buttonText}>Log In</Text>
            </TouchableOpacity>
            <Text style={styles.signup}>Don't have an account? <Text style={styles.signupLink} onPress={() => navigation.navigate('SignUp1')}>Sign Up</Text></Text>
        </View>
    );
}

export default SignUp1;

