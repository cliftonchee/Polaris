import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Pressable,
  ImageBackground,
} from "react-native";
import React from "react";
import colours from "../components/Colours";
import Button from "../components/Button";
import NasaImage from "../components/NasaImage";
import News from "../components/News";
import Profile from "../components/Profile";

// To navigate between screens, add '{ navigation }'
// as an argument, and under onPress, refer to below
export default function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginLeft: 15 }}>
        <Profile></Profile>
      </View>

      <View>
        <Text style={styles.newsText}> Latest News </Text>
      </View>

      {/* Latest News */}
      <View style={styles.imageContainer}>
        <News />
      </View>

      <View style={{ paddingLeft: 6 }}>
        <Text style={styles.newsText}>Astronomy Picture of the day</Text>
      </View>

      <View style={{ alignItems: "center" }}>
        <Pressable onPress={() => navigation.navigate("Login")}>
          {/* NASA Image of the day */}
          <View style={styles.imageContainer}>
            <NasaImage />
          </View>
        </Pressable>
      </View>

      {/* Customisable Button */}
      <View style={styles.button}>
        <Button
          styleOverride={styles.buttonLayout}
          onPress={() => navigation.navigate("Login")}
          title="HOME"
        ></Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // Background
    flex: 1,
    backgroundColor: colours.primary,
  },
  imageContainer: {
    paddingTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  newsText: {
    fontSize: 20,
    fontFamily: "LatoBold",
    color: colours.white,
    paddingLeft: 15,
    paddingTop: 5,
    justifyContent: "center",
  },
  image: {
    justifyContent: "center",
    maxWidth: 960,
    justifyContent: "center",
  },
  buttonLayout: {
    // Added on top of original button
    borderRadius: 30,
    width: 350,
    height: 100,
  },
  button: {
    flex: 1,
  },
});
