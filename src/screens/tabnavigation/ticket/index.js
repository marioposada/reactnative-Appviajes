import React from "react";
import { View, Text, ImageBackground, Image } from "react-native";
import { styles } from "./styles";

const TicketScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("../../../../assets/road.png")}
      >
        <Text style={styles.text1}>Lun 14 de Noviembre 2022</Text>
        <View style={styles.content}>
          <Image
            style={styles.imagebus}
            source={require("../../../../assets/bus.png")}
          />
          <Text style={styles.textbus}>Línea 505 - Interno 34</Text>
        </View>
        <View style={styles.content}>
          <Image
            style={styles.imagebus}
            source={require("../../../../assets/switch.png")}
          />
          <View style={styles.content1}>
            <Text style={styles.textswitch1}>Barrio Santa Bárbara</Text>
            <Text style={styles.textswitch2}>Avenida Santa Fe 3200</Text>
          </View>
        </View>
        <View style={styles.content2}>
          <View style={styles.content3}>
            <Image
              style={styles.imagebus}
              source={require("../../../../assets/time.png")}
            />
            <Text style={styles.textbus}>Ahora</Text>
          </View>
          <View style={styles.content4}>
            <Image
              style={styles.imagebus}
              source={require("../../../../assets/tickets.png")}
            />
            <Text style={styles.textbus}>1</Text>
          </View>
        </View>
        <Text style={styles.textprice}>$25,50</Text>
      </ImageBackground>
    </View>
  );
};

export default TicketScreen;
