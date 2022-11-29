import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./styles";
import { useWindowDimensions } from "react-native";

const Transport = ({ navigation, text }) => {
  const { width, height } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <View style={styles.content1}>
        <Text style={styles.text}>Transporte</Text>
        <Image
          source={require("../../../../assets/lineconfirm1.png")}
          style={styles.image}
        />
      </View>
      <View style={styles.content2}>
        <Image  source={require("../../../../assets/bus.png")} />
        <Text style={styles.text1}>{text[2]}</Text>
        <Text style={styles.text}>{text[3]}</Text>
      </View>
      <View style={styles.content2}>
        <Image style={{marginLeft: 5}} source={require("../../../../assets/time.png")} />
        <Text style={styles.text1}>{text[4]}</Text>
        <Text style={styles.text}>{text[5]}</Text>
      </View>
      <View style={styles.content2}>
        <Image style={{marginLeft: 5}} source={require("../../../../assets/tickets.png")} />
        <Text style={styles.text1}>{text[6]}</Text>
        <Text style={styles.text}>{text[7]}</Text>
      </View>
      <View style={styles.content3}>
        <Text style={styles.text2}>Total    </Text>
        <Text style={styles.text2}>{text[8]}</Text>
      </View>
    </View>
  );
};

export default Transport;
