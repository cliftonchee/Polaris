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
import Button from "../components/Button";
import { useNavigation } from "expo-router";

const ForumViewer = () => {
  const [desc, setDes] = useState(null);
  const [name, setName] = useState(null);
  const navigation = useNavigation();
  const route = useRoute();
  const { info } = route.params;

  useEffect(() => {
    try {
      setDes(info.description);
      setName(info.summary);
    } catch (error) {
      console.log(error);
    }
  });

  const navigateToForum = () => {
    navigation.navigate("Forum"); // Pass 'info' directly without nesting
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.button}>
        <View style={styles.buttonContainer}>
          <Button
            styleOverride={styles.buttonLayout}
            onPress={navigateToForum}
          />
          <Image
            style={styles.overlayImage}
            source={require("../assets/images/left-arrow.png")}
          />
        </View>
      </View>

      <View style={{ alignItems: "center" }}>
        <Text style={styles.title}>{name}</Text>
        <ScrollView style={{ maxHeight: 175 }}>
          <View
            style={{
              backgroundColor: "rgba(128, 128, 128, 0.1)",
              borderRadius: 20,
              width: 358,
              justifyContent: "center",
            }}
          >
            <ScrollView contentContainerStyle={{ padding: 10 }}>
              <Text style={styles.subtitle}>{desc}</Text>
            </ScrollView>
          </View>
        </ScrollView>
        <Text style={styles.subtitle1}>Chat</Text>
      </View>
    </KeyboardAvoidingView>
  );
};

export default ForumViewer;

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
    fontSize: 45,
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
  subtitle1: {
    paddingLeft: 5,
    paddingRight: 0,
    fontSize: 20,
    color: colours.white,
    fontFamily: "LatoRegular",
    paddingTop: 30,
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
