import React from 'react';
import {styles } from './styles';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { colors } from '../../../constants/theme/index';

const SignUp1 = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <Text style={styles.title} > LogIn </Text>
            <Text style={styles.signup}>Don't have an account? <Text style={styles.signupLink} onPress={() => navigation.navigate('SignUp1')}>Sign Up</Text></Text>
        </View>
    );
}

export default SignUp1;

