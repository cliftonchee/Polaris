import {
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import colours from "../components/Colours";
import Button from "../components/Button";
import InputBoxEmail from "../components/InputBox/InputBoxEmail";
import InputBoxPass from "../components/InputBox/InputBoxPass";
import InputBoxUser from "../components/InputBox/InputBoxUser";
import { useHeaderHeight } from "@react-navigation/elements";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import ProfilePic from "../components/ProfilePic";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase";
import useStore from "../../store/store";

export default function SignUp({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [usernames, setName] = useState("");
  const [result, setValue] = useState(null); // State to store the user object
  const [errorMessage, setErrorMessage] = useState(""); // State to store the error message

  const dbhandling = (value) => {
    // Saving Image path
    setValue(value);
  };

  async function updatedb(person) {
    if (person && usernames) {
      // Check if person and person.uid are not null
      await setDoc(doc(db, "ProfilePic", person.uid), {
        pic: result,
        username: usernames,
      });
    } else {
      console.log("User ID is null");
    }
  }
  const height = useHeaderHeight();

  const auth = getAuth();
  const handleRegister = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Registered with:", user.email);
        navigation.navigate("Login");
        updatedb(user);
      })
      .catch((error) => {
        switch (error.code) {
          case "auth/email-already-in-use":
            setErrorMessage(`Email address ${email} already in use.`);
            break;
          case "auth/invalid-email":
            setErrorMessage(`Email address ${email} is invalid.`);
            break;
          case "auth/operation-not-allowed":
            setErrorMessage("Error during sign up.");
            break;
          case "auth/weak-password":
            setErrorMessage(
              "Password is not strong enough. Add additional characters including special characters and numbers."
            );
            break;
          default:
            setErrorMessage(error.message);
            break;
        }

        // Clear error message after 3 seconds
        setTimeout(() => {
          setErrorMessage("");
        }, 3000);
      });
  };

  return (
    <View style={styles.container}>
      {/* Image */}
      <View
        style={{
          height: 250,
          width: 350,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 100,
        }}
      >
        <ProfilePic returnVariable={dbhandling}></ProfilePic>
      </View>
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
          {/* Input Boxes with Text above */}
          {/* Username */}
          <InputBoxUser
            value={usernames}
            onChangeText={(text) => setName(text)}
          ></InputBoxUser>

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
          {errorMessage !== "" && (
            <Text style={styles.errorMessage}>{errorMessage}</Text>
          )}
        </View>
      </KeyboardAvoidingView>
      {/* Customisable Buttons */}
      <View style={styles.buttonsSideBySide}>
        {/* TODO: Add onPress to new pages */}
        <Button
          // Navigation to Login page
          onPress={handleRegister}
          title="Register"
        ></Button>
        <Button
          // Navigation to Login page
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
    flex: 1,
    paddingBottom: 20,
  },
  buttonsSideBySide: {
    flex: 1.3,
  },
  errorMessage: {
    color: "red",
    textAlign: "center",
    marginTop: 10,
  },
});
