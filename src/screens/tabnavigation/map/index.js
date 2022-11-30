import MapView, { Marker } from "react-native-maps";
import { Text, TouchableOpacity, View } from "react-native";

import { GOOGLE_MAPS_KEY } from "@env";
import MapViewDirections from "react-native-maps-directions";
import React from "react";
import { styles } from "./styles";

const MapScreen = ({ navigation }) => {
  const [origin, setOrigin] = React.useState({
    latitude: -31.417,
    longitude: -64.183,
  });

  const [destination, setDestination] = React.useState({
    latitude: 33.753746,
    longitude: -84.38633,
  });

  const handlePurchase = () => {
    console.warn("tocado");
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: origin.latitude,
          longitude: origin.longitude,
          latitudeDelta: 0.09,
          longitudeDelta: 0.04,
        }}
      >
        <Marker
          draggable
          coordinate={origin}
          image={carImage}
          onDragEnd={(direction) => setOrigin(direction.nativeEvent.coordinate)}
        />
        <Marker
          draggable
          coordinate={destination}
          onDragEnd={(direction) =>
            setDestination(direction.nativeEvent.coordinate)
          }
        />
        <MapViewDirections
          origin={origin}
          destination={destination}
          apikey={GOOGLE_MAPS_KEY}
          strokeColor="black"
          strokeWidth={5}
        />
        {/* <Polyline
          coordinates={[ origin, destination ]}
          strokeColor="pink"
          strokeWidth={8}
        /> */}
      </MapView>

      <TouchableOpacity style={styles.buttom} onPress={handlePurchase}>
        <Text style={styles.buttomTitle}>Registrate</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MapScreen;
