import React, { useEffect, useState } from "react";
import { View, Image, Text, StyleSheet, Pressable } from "react-native";
import axios from "axios";
import colours from "./Colours";
import { useNavigation } from "expo-router";
import PlanetData from "../pages/PlanetData";

const PlanetViewer = ({ info }) => {
  const [imageData, setImageData] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    setImageData(info.image);
  }, [info.image]);

  const navigateToPlanetData = () => {
    console.log(info.planet);
    navigation.navigate("PlanetData", { info }); // Pass 'info' directly without nesting
  };

  return (
    <View style={{ alignItems: "center" }}>
      <Pressable onPress={navigateToPlanetData}>
        <View style={{ alignItems: "center", paddingBottom: 30 }}>
          <Image
            source={{ uri: imageData }}
            style={{ width: 200, height: 200 }}
          />
          <Text style={styles.subtitle}>{info.planet}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default PlanetViewer;

const styles = StyleSheet.create({
  title: {
    alignItems: "center",
    fontSize: 50,
    color: colours.white,
    fontFamily: "LatoBold",
    paddingBottom: 10,
  },
  subtitle: {
    fontSize: 24,
    color: colours.white,
    fontFamily: "LatoRegular",
    justifyContent: "center",
  },
});
