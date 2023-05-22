import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";
import colours from "../components/Colours";
import Button from "../components/Button";
import InputBoxEmail from "../components/InputBox/InputBoxEmail";
import InputBoxPass from "../components/InputBox/InputBoxPass";
import InputBoxUser from "../components/InputBox/InputBoxUser";
import { KeyboardAvoidingView } from "react-native";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";

export default function SignUp({ navigation }) {
  {
    /* State creation */
  }
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  {
    /* Method to handle registration */
  }
  const auth = getAuth();
  const handleRegister = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("Registered with: ", user.email);
        navigation.navigate("Login");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // Handle the error
      });
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      {/* Image */}
      <Image
        style={styles.image}
        source={require("../assets/images/polaris-constellation.png")}
      />
      {/* Title */}
      <Text style={styles.title}>P O L A R I S</Text>
      {/* Login details */}
      <View style={styles.loginDetails}>
        {/* Input Boxes with Text above */}
        {/* Username */}
        <InputBoxUser initialText="Username"></InputBoxUser>

        {/* Email */}
        <InputBoxEmail
          value={email}
          onChangeText={(text) => setEmail(text)}
        ></InputBoxEmail>

        {/* Password */}
        <InputBoxPass
          value={password}
          onChangeText={(text) => setPassword(text)}
        >
          secureTex
        </InputBoxPass>
      </View>

      {/* Customisable Buttons */}
      <View style={styles.buttonsSideBySide}>
        {/* TODO: Add onPress to new pages */}
        <Button
          // Navigation to Login page
          onPress={handleRegister}
          title="Register"
        ></Button>
      </View>
    </KeyboardAvoidingView>
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
    paddingBottom: 10,
  },
  subtitle: {
    flex: 0.5,
    fontSize: 24,
    color: colours.subtitle,
    fontFamily: "LatoRegular",
  },
  loginDetails: {
    flex: 1,
    paddingBottom: 20,
  },
  buttonsSideBySide: {
    flex: 1,
  },
});
