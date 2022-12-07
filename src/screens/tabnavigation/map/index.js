import * as Location from "expo-location";
import * as React from "react";

import { From, To, Transport } from "../../../components";
import MapView, { Marker, Polyline } from "react-native-maps";
import { Text, TouchableOpacity, View } from "react-native";
import { useEffect, useState } from "react";

import FlagFinish from "../../../../assets/finish-flag.png";
import FlagInit from "../../../../assets/init-flag.png";
import { GOOGLE_MAPS_APIKEY } from "@env";
import MapViewDirections from "react-native-maps-directions";
import { styles } from "./styles";
import { useWindowDimensions } from "react-native";

const MapScreen = ({ navigation }) => {
  const { width, height } = useWindowDimensions();
  const [errorMsg, setErrorMsg] = useState(null);
  const [location, setLocation] = useState(null);
  const [address, setAddress] = useState(null);
  const [origin, setOrigin] = useState({
    latitude: -31.417,
    longitude: -64.183,
  });

  const [destination, setDestination] = useState({
    latitude: -31.3,
    longitude: -64.3,
  });

  useEffect(() => {
    getLocation();
  }, []);

  async function getLocation() {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
    }
    Location.setGoogleApiKey(GOOGLE_MAPS_APIKEY);

    console.log(status);

    let { coords } = await Location.getCurrentPositionAsync();

    setLocation(coords);

    console.log(coords);

    if (coords) {
      let { longitude, latitude } = coords;

      let regionName = await Location.reverseGeocodeAsync({
        longitude,
        latitude,
      });
      setAddress(regionName[0]);
      console.log(address);
    }
  }

  const handlePurchase = () => {
    console.warn(location);
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
          image={FlagInit}
          onDragEnd={(direction) => setOrigin(direction.nativeEvent.coordinate)}
        />
        <Marker
          draggable
          coordinate={destination}
          image={FlagFinish}
          onDragEnd={(direction) =>
            setDestination(direction.nativeEvent.coordinate)
          }
        />
        <MapViewDirections
          origin={origin}
          destination={destination}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeColor="black"
          strokeWidth={5}
        />
        {/* <Polyline
          coordinates={[ origin, destination ]}
          strokeColor="pink"
          strokeWidth={8}
        /> */}
      </MapView>
      <View style={[styles.content, { width: width }]}>
        <From text={(address.street, address.streetNumber)} />
        <To text={destination} />
      </View>
      <TouchableOpacity style={styles.buttom} onPress={handlePurchase}>
        <Text style={styles.buttomTitle}>Aceptar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MapScreen;
