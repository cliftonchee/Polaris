import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";
import colours from "../components/Colours";
import Button from "../components/Button";
import InputBoxEmail from "../components/InputBox/InputBoxEmail";
import InputBoxPass from "../components/InputBox/InputBoxPass";
import InputBoxUser from "../components/InputBox/InputBoxUser";
import { KeyboardAvoidingView } from "react-native";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import ProfilePic from "../components/ProfilePic";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase";

export default function SignUp({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [usernames, setName] = useState("");
  const [result, setValue] = useState(null); // State to store the user object

  const dbhandling = (value) => {
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
        const errorCode = error.code;
        const errorMessage = error.message;
        // Handle the error
      });
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
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
      </View>

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
});
