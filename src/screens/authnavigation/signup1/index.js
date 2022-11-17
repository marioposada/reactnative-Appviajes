import React from 'react';
import {styles } from './styles';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { colors } from '../../../constants/theme/index';

const SignUp1 = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <Text style={styles.title} > SignUp</Text>
            <Text style={styles.signup}>Enter your count <Text style={styles.signupLink} onPress={() => navigation.navigate('LogIn1')}>Log In</Text></Text>
        </View>
    );
}

export default SignUp1;

