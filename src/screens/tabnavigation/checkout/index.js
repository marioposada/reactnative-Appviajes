import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  Pressable,
} from "react-native";
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
  "$25,50",
];

const CheckoutScreen = ({ navigation }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);

  const { width, height } = useWindowDimensions();

  return (
    <View style={[styles.container, { width: width , height: height}]}>
      <Image
        source={require("../../../../assets/mapconfirm.png")}
        style={styles.image}
      />
      <View style={[styles.content, { width: width }]}>
        <From text={text} />
        <To text={text} />
        <Transport text={text} />
        <TouchableOpacity
          onPress={() => setIsVisible(true)}
          style={styles.button}
        >
          <Text style={styles.text3}>Comprar ahora</Text>
        </TouchableOpacity>
      </View>
      <Modal
        animationType="slide"
        visible={isVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setIsVisible(!isVisible);
        }}
      >
        <View style={styles.centeredView}>
          <Text style={styles.modalText}>Metodo de pago</Text>
          <View style={styles.card}>
            <Text style={styles.text}>Tarjeta</Text>
            <View style={styles.contentCard}>
              <View style={styles.contentIcon}>
                <Image source={require("../../../../assets/payment.png")} />
              </View>
              <View style={styles.contentText}>
                <Text style={styles.text2}>Visa 8032-2354-4565-XXXX</Text>
                <Text style={styles.text2}>Carlos Pérez</Text>
              </View>
            </View>
          </View>
          <View style={styles.presables}>
            <Pressable
              style={styles.buttonAceptar}
              onPress={() => setIsVisible2(!isVisible2)}
            >
              <Text style={styles.textStyle}>Aceptar</Text>
            </Pressable>
            <Pressable
              style={styles.buttonCancelar}
              onPress={() => setIsVisible(!isVisible)}
            >
              <Text style={styles.textCancelar}>Cancelar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Modal animationType="slide" visible={isVisible2}>
        <View style={styles.centeredView}>
          <Image source={require("../../../../assets/check.png")} />
          <View style={styles.card1}>
            <Text style={styles.textSuccess1}>¡Compra realizada!</Text>
            <Text style={styles.textSuccess2}>A continuación tendrás el ticket a </Text>
            <Text style={styles.textSuccess3}>disposición con le código QR.</Text>
            <Text style={styles.textSuccess4}>Transacción número 8726877238</Text>
            <Text style={styles.textSuccess5}>Muchas gracias!</Text>

          </View>
          <View style={styles.presables}>
            <Pressable
              style={styles.buttonAceptar2}
              onPress={() => setIsVisible2(!isVisible)}
            >
              <Text style={styles.textStyleTicket}>Ver Ticket</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CheckoutScreen;
