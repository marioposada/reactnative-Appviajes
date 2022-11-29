import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./styles";
import { useWindowDimensions } from "react-native";

const From = ({ navigation, text }) => {
  const { width, height } = useWindowDimensions();
  return (
    <View style={[styles.container, {width: width}]}>
      <View style={[styles.content1, {width: width}]}>
        <Text style={styles.text}>Desde</Text>
        <Image
          source={require("../../../../assets/lineconfirm1.png")}
          style={styles.image}
        />
      </View>
      <View style={styles.content2}>
        <Image source={require("../../../../assets/location.png")} />
        <Text style={styles.text1}>{text[0]}</Text>
      </View>
    </View>
  );
};

export default From;
