import React from 'react';
import { styles } from './styles';
import { View, Text, Image, TouchableOpacity, Input } from 'react-native';
import { colors } from '../../../constants/theme/index';
import Logo from '../../../../assets/Logo.png'

const LogIn1 = ({ navigation }) => {

    return (
        <View style={styles.container}>
            {/* <Input placeholder="Email" /> */}
            <View onPress={() => navigation.navigate("OnBoarding1")}>
                <Image source={Logo} style={{width: 135.46, height: 157.2}} />
            </View>
            <Text style={styles.title} > LogIn </Text>
            <Text style={styles.title} > LogIn </Text>
            <Text style={styles.title} > LogIn </Text>
            <Text style={styles.text} onPress={() => navigation.navigate('SignUp1')}>Don't have an account? Sign Up</Text>
        </View>
    );
}

export default LogIn1;
