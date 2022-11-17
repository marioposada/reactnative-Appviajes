import React from 'react';
import { styles } from './styles';
import { View, Text, Image, TouchableOpacity, Input } from 'react-native';
import { colors } from '../../../constants/theme/index';

const LogIn1 = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <Input placeholder="Email" />
            <Text style={styles.title} > LogIn </Text>
            <Text style={styles.title} > LogIn </Text>
            <Text style={styles.title} > LogIn </Text>
            <Text style={styles.text} onPress={() => navigation.navigate('SignUp1')}>Don't have an account? </Text>
        </View>
    );
}

export default LogIn1;
