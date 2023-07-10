import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Image,
} from "react-native";
import Button from "../components/Button";
import InputBoxEmail from "../components/InputBox/InputBoxEmail";
import { useHeaderHeight } from "@react-navigation/elements";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import React, { useState } from "react";
import colours from "../components/Colours";

export default function ForgetPass({ navigation }) {
  const [email, setEmail] = useState("");
  const height = useHeaderHeight();
  const auth = getAuth();

  const handleForget = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!
        navigation.navigate("Login");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // Handle error
      });
  };

  return (
    <View style={styles.container}>
      {/* Image */}
      <Image
        style={styles.image}
        source={require("../assets/images/polaris-constellation.png")}
      />

      <View
        style={{
          width: 350,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
        }}
      ></View>
      {/* Title */}
      <Text style={styles.title}>P O L A R I S</Text>
      <KeyboardAvoidingView
        keyboardVerticalOffset={height + 100}
        behavior="padding"
        style={{ flex: 1 }}
        enabled
      >
        {/* Login details */}
        <View style={styles.loginDetails}>
          {/* Email */}
          <InputBoxEmail
            value={email}
            onChangeText={(text) => setEmail(text)}
          ></InputBoxEmail>
        </View>
      </KeyboardAvoidingView>
      {/* Customisable Buttons */}
      <View style={styles.buttonsSideBySide}>
        {/* TODO: Add onPress to new pages */}
        <Button onPress={handleForget} title="Recover Account"></Button>
        <Button
          onPress={() => navigation.navigate("Login")}
          title="Go Back"
        ></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // Background
    flex: 1,
    alignItems: "center",
    backgroundColor: colours.primary,
  },
  image: {
    flex: 3,
    justifyContent: "center",
    maxWidth: 960,
  },
  title: {
    flex: 0.6,
    alignItems: "center",
    fontSize: 50,
    color: colours.white,
    fontFamily: "LatoBold",
    paddingBottom: 0,
  },
  subtitle: {
    flex: 0.5,
    fontSize: 24,
    color: colours.subtitle,
    fontFamily: "LatoRegular",
  },
  loginDetails: {
    flex: 1.5,
    paddingBottom: 20,
    justifyContent: "center",
  },
  buttonsSideBySide: {
    flex: 1.7,
  },
});
