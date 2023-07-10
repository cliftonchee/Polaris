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
import { useHeaderHeight } from "@react-navigation/elements";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import React, { useEffect, useState } from "react";
import useStore from "../../store/store";

const Login = ({ navigation }) => {
  const setUser = useStore((state) => state.setUser);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const auth = getAuth();
  const height = useHeaderHeight();

  const handleLogin = () => {
    if (email !== "" && password !== "") {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          setUser(user);
          navigation.navigate("Home");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage("Invalid email or password");

          // Clear error message after 3 seconds
          setTimeout(() => {
            setErrorMessage("");
          }, 3000);
        });
    }
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/images/polaris-constellation.png")}
      />
      <Text testID="loginTitle" style={styles.title}>
        P O L A R I S
      </Text>
      <KeyboardAvoidingView
        keyboardVerticalOffset={height}
        behavior="padding"
        style={{ flex: 1 }}
        enabled
      >
        <View style={styles.loginDetails}>
          <InputBoxEmail
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <InputBoxPass
            value={password}
            onChangeText={(text) => setPassword(text)}
          >
            secureText
          </InputBoxPass>
          <Button
            styleOverride={styles.forgotPassword}
            title="Forgot Password"
            textOverride={styles.forgotPasswordText}
            onPress={() => navigation.navigate("ForgetPass")}
          />
          {errorMessage !== "" && (
            <Text style={styles.errorMessage}>{errorMessage}</Text>
          )}
        </View>
      </KeyboardAvoidingView>
      <View style={styles.buttonsSideBySide}>
        <Button
          title="Register"
          onPress={() => navigation.navigate("Register")}
        />
        <Button title="Sign In" onPress={handleLogin} />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
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
    justifyContent: "center",
  },
  forgotPassword: {
    fontSize: 10,
    height: 15,
    paddingRight: 3,
    backgroundColor: colours.primary,
    color: colours.gray,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  forgotPasswordText: {
    fontSize: 10,
    color: colours.gray,
  },
  buttonsSideBySide: {
    flex: 1.7,
  },
  errorMessage: {
    color: "red",
    textAlign: "center",
    marginTop: 10,
  },
});
