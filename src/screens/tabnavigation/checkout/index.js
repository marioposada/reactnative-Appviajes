import React from "react";
import { View, Text, Image } from "react-native";
import { From, To, Transport } from "../../../components";
import { styles } from "./styles";

const text =
  "Barrio Santa Bárbara, Las Torcazas, 1618, General Pacheco, Buenos Aires";
const textbus = "Línea 505 - Interno 34";
const CheckoutScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../../assets/mapconfirm.png")}
        style={styles.image}
      />
      <View style={styles.content}>
        <From text={text} />
        <To text={text} />
        <Transport text={textbus} />
      </View>
    </View>
  );
};

export default CheckoutScreen;
