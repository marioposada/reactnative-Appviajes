import React from "react";
import { styles } from "./styles";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { colors } from "../../../constants/theme/index";

const OnBoarding1 = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>OnBoarding1</Text>
      <Text style={styles.text} onPress={()=> navigation.navigate('LogIn1')} > Don't have an account? </Text>
    </View>
  );
};

export default OnBoarding1;
