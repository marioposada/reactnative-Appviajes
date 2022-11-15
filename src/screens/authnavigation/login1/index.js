import React from 'react';
import { styles } from './styles';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { colors } from '../../../constants/theme/index';

const LogIn1 = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <Text style={styles.title} > LogIn </Text>
            <Text style={styles.text} onPress={() => navigation.navigate('SignUp1')}>Don't have an account? </Text>
        </View>
    );
}

export default LogIn1;
