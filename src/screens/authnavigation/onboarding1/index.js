import React from "react";
import { styles } from "./styles";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { colors } from "../../../constants/theme/index";
import Logo from '../../../../assets/Logo.png'
const OnBoarding1 = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <Image source={Logo} />
        <Text style={styles.title}>Suti</Text>
      <Text style={styles.text} onPress={()=> navigation.navigate('LogIn1')} > Acceder a suti </Text>
    </View>
  );
};

export default OnBoarding1;
