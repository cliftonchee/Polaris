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
import useStore from "../../store/store";
import { useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";

// To navigate between screens, add '{ navigation }'
// as an argument, and under onPress, refer to below

export default function Home({ navigation }) {
  /*Use this to reference user*/
  const userCurrent = useStore((state) => state.user);
  const [name1, setName] = useState("");
  const [pic, setPic] = useState("");
  const userID = userCurrent.uid;
  const ref = doc(db, "ProfilePic", userID);

  const getName = async () => {
    const docSnap = await getDoc(ref);
    setName(docSnap.data().username);
    setPic(docSnap.data().pic);
  };

  getName();
  console.log(name1);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginLeft: 17, paddingTop: 10 }}>
        <Profile name={name1}></Profile>
      </View>

      <View style={{ paddingTop: 30 }}>
        <Text style={styles.newsText}> Latest News </Text>
      </View>

      {/* Latest News */}
      <View style={styles.imageContainer}>
        <News />
      </View>

      <View style={{ paddingLeft: 6, paddingTop: 30 }}>
        <Text style={styles.newsText}>Astronomy Picture of the day</Text>
      </View>

      <View
        style={{ alignItems: "center", height: 200, justifyContent: "center" }}
      >
        <Pressable onPress={() => navigation.navigate("Login")}>
          {/* NASA Image of the day */}
          <View style={styles.imageContainer}>
            <NasaImage />
          </View>
        </Pressable>
      </View>

      {/* Customisable Button */}
      <View style={styles.button}>
        <View style={styles.buttonContainer}>
          <Button
            styleOverride={styles.buttonLayout}
            onPress={() => navigation.navigate("Forum")}
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
            onPress={() => navigation.navigate("Encyclopedia")}
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
    borderRadius: 20,
    width: 110,
    height: 70,
    backgroundColor: colours.test,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
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
