import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  KeyboardAvoidingView,
} from "react-native";
import colours from "../components/Colours";
import Button from "../components/Button";
import InputBoxEmail from "../components/InputBox/InputBoxEmail";
import InputBoxPass from "../components/InputBox/InputBoxPass";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import React, { useEffect, useState } from "react";

export default function Login({ navigation }) {
  {
    /* State creation */
  }
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = getAuth();

  {
    /* Method to handle Login */
  }
  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("Logged in with: ", user.email);

        {
          /* Navigation if successful */
        }
        navigation.navigate("Home");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
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

        {/* Forgot Password */}
        <Button // TODO: Add onPress
          styleOverride={styles.forgotPassword}
          title="Forgot Password"
          textOverride={styles.forgotPasswordText}
        ></Button>
      </View>

      {/* Customisable Buttons */}
      <View style={styles.buttonsSideBySide}>
        {/* TODO: Add onPress to new pages */}
        <Button
          title="Register"
          onPress={() => navigation.navigate("Register")}
        ></Button>

        <Button title="Sign In" onPress={handleLogin}></Button>
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
  },
  forgotPassword: {
    flex: 0.33,
    fontSize: 10,
    color: colours.gray,
    backgroundColor: colours.primary,
    height: 0,
    width: 100,
    marginLeft: -10,
  },
  forgotPasswordText: {
    fontSize: 10,
    color: colours.gray,
  },
  buttonsSideBySide: {
    flex: 2,
  },
});
