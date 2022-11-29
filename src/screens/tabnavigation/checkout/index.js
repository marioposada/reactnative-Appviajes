import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { From, To, Transport } from "../../../components";
import { styles } from "./styles";
import { useWindowDimensions } from "react-native";

const text = [
  "Barrio Santa Bárbara, Las Torcazas, 1618, General Pacheco, Buenos Aires",
  "Avenida 9 de Julio, Buenos Aires, Argentina",
  "Línea 505 - Interno 34",
  "1h 30m",
  "Horario y fecha de partida",
  "Ahora",
  "Cantidad de tickets",
  "1",
  '$25,50'
];

const CheckoutScreen = ({ navigation }) => {

  const { width, height } = useWindowDimensions();
 
  return (
    <View style={[styles.container, {width: width}]}>
      <Image
        source={require("../../../../assets/mapconfirm.png")}
        style={styles.image}
      />
      <View style={[styles.content,{width: width }]}>
        <From text={text} />
        <To text={text} />
        <Transport text={text} />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text3}>Comprar ahora</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CheckoutScreen;
