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

// To navigate between screens, add '{ navigation }'
// as an argument, and under onPress, refer to below
export default function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
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

      <View>
        <Text style={styles.newsText}> Latest News </Text>
      </View>

      <Pressable onPress={() => navigation.navigate("Login")}>
        {/* NASA Image of the day */}
        <View style={styles.imageContainer}>
          <News />
        </View>
      </Pressable>

      {/* Customisable Button */}
      <View style={styles.button}>
        <View style={styles.buttonContainer}>
          <Button
            styleOverride={styles.buttonLayout}
            onPress={() => navigation.navigate("Login")}
          />
          <Image
            style={styles.overlayImage}
            source={require("../assets/images/chat.png")}
            // You can also use a network image by providing a URI
            // source={{ uri: 'https://example.com/path/to/your/image.png' }}
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            styleOverride={styles.buttonLayout}
            onPress={() => navigation.navigate("Login")}
          />
          <Image
            style={styles.overlayImage}
            source={require("../assets/images/telescope.png")}
            // You can also use a network image by providing a URI
            // source={{ uri: 'https://example.com/path/to/your/image.png' }}
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            styleOverride={styles.buttonLayout}
            onPress={() => navigation.navigate("Login")}
          />
          <Image
            style={styles.overlayImage}
            source={require("../assets/images/loupe.png")}
            // You can also use a network image by providing a URI
            // source={{ uri: 'https://example.com/path/to/your/image.png' }}
          />
        </View>
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
    paddingTop: 10,
    justifyContent: "center",
  },
  image: {
    justifyContent: "center",
    maxWidth: 960,
    justifyContent: "center",
  },
  buttonLayout: {
    // Added on top of original button
    borderRadius: 20,
    width: 110,
    height: 70,
    backgroundColor: colours.test,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
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
