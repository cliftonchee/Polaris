import {
  View,
  Image,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import colours from "../components/Colours";
import React, { useEffect, useState } from "react";
import useStore from "../../store/store";
import { useRoute } from "@react-navigation/native";
import Encyclopedia from "./Encylopedia";
import Button from "../components/Button";
import { useNavigation } from "expo-router";

const PlanetData = () => {
  const [imageData, setImageData] = useState(null);
  const [planetName, setPlanetName] = useState(null);
  const [description, setDescription] = useState(null);
  const [day, setDay] = useState(null);
  const [mass, setMass] = useState(null);
  const [temp, setTemp] = useState(null);
  const [moon, setMoon] = useState(null);
  const [orb, setOrb] = useState(null);
  const [ecc, setEcc] = useState(null);
  const [dia, setdia] = useState(null);
  const [grav, setGravity] = useState(null);
  const [vel, setVel] = useState(null);
  const [peri, setPeri] = useState(null);
  const [pres, setPres] = useState(null);
  const [esc, setEsc] = useState(null);
  const route = useRoute();
  const navigation = useNavigation();
  const { info } = route.params;

  useEffect(() => {
    try {
      console.log("info:", info);
      console.log("info.image:", info && info.image);
      setImageData(info.image);
      setPlanetName(info.planet);
      setDescription(info.Description);
      setDay(info.lengthOfDay);
      setMass(info.mass);
      setTemp(info.meanTemperature);
      setMoon(info.numberOfMoons);
      setOrb(info.obliquityToOrbit);
      setEcc(info.orbitalEccentricity);
      setdia(info.diameter);
      setGravity(info.gravity);
      setVel(info.orbitalVelocity);
      setPeri(info.perihelion);
      setPres(info.surfacePressure);
      setEsc(info.escapeVelocity);
    } catch (error) {
      console.log(error);
    }
  });

  const navigateToEncyclopedia = () => {
    console.log(info.planet);
    navigation.navigate("Encyclopedia"); // Pass 'info' directly without nesting
  };

  console.log("imageData:", imageData);

  return (
    <ScrollView style={{ backgroundColor: colours.primary }}>
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View style={styles.button}>
          <View style={styles.buttonContainer}>
            <Button
              styleOverride={styles.buttonLayout}
              onPress={navigateToEncyclopedia}
            />
            <Image
              style={styles.overlayImage}
              source={require("../assets/images/left-arrow.png")}
            />
          </View>
        </View>

        <View style={{ height: 500, alignItems: "center" }}>
          <Text style={styles.title}>{planetName}</Text>
          {/* Image */}
          <Image
            style={{ height: 250, width: 250 }}
            source={{ uri: imageData }}
          />
          <ScrollView style={{ paddingTop: 10 }}>
            <View
              style={{
                backgroundColor: "rgba(128, 128, 128, 0.1)",
                borderRadius: 20,
                width: 358,
                height: 150,
                justifyContent: "center",
              }}
            >
              <Text style={styles.subtitle}>{description}</Text>
            </View>
          </ScrollView>
        </View>
        <Text style={styles.subheader}>Trivia</Text>
        <View
          style={{
            backgroundColor: "rgba(128, 128, 128, 0.1)",
            borderRadius: 20,
            width: 358,
            height: 150,
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <View>
            <Text style={styles.triviaText}>Length of Day: {day} days</Text>
            <Text style={styles.triviaText}>Mean Temperature: {temp} C</Text>
            <Text style={styles.triviaText}>Orbit Eccentricity: {ecc}</Text>
            <Text style={styles.triviaText}>
              Obliquity to Orbit: {orb} deg{" "}
            </Text>
            <Text style={styles.triviaText}>Orbit Velocity: {vel} km/s</Text>
            <Text style={styles.triviaText}>Surface Pressure: {pres}</Text>
          </View>
          <View>
            <Text style={styles.triviaText2}> Mass: {mass} x 10^24kg</Text>
            <Text style={styles.triviaText2}>
              Number of Moons: {moon} Moons
            </Text>
            <Text style={styles.triviaText2}>Gravity: {grav} m/s^2</Text>
            <Text style={styles.triviaText2}>Diameter: {dia} km</Text>
            <Text style={styles.triviaText2}>perihelion: {peri}</Text>
            <Text style={styles.triviaText2}>Escape Velocity: {esc} km/s</Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default PlanetData;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colours.primary,
    flex: 1,
  },
  triviaText: {
    color: colours.white,
    fontSize: 12.5,
    paddingBottom: 1.5,
    paddingTop: 5,
  },
  triviaText2: {
    color: colours.white,
    fontSize: 12.5,
    paddingBottom: 1.5,
    paddingTop: 5,
    paddingLeft: 15,
  },
  title: {
    alignItems: "center",
    fontSize: 50,
    color: colours.white,
    fontFamily: "LatoBold",
    marginTop: 5,
    paddingBottom: 15,
  },
  subtitle: {
    paddingLeft: 5,
    paddingRight: 5,
    fontSize: 15,
    color: colours.white,
    fontFamily: "LatoRegular",
  },
  subheader: {
    paddingRight: 300,
    fontSize: 20,
    color: colours.white,
    fontFamily: "LatoRegular",
  },
  buttonLayout: {
    // Added on top of original button
    width: 110,
    height: 70,
    backgroundColor: "rgba(128, 128, 128, 0.1)",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
    paddingRight: 250,
  },
  buttonContainer: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  overlayImage: {
    position: "absolute",
    zIndex: 1, // Ensure the overlay image is rendered above the button
    // Add any desired styles for the overlay image here
    width: 35,
    height: 35,
  },
});
