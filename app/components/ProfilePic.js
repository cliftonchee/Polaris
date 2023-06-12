import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Button,
  Platform,
  TouchableOpacity,
} from "react-native";
import colours from "../components/Colours";
import plus from "../assets/images/plus.png";
import React, { useState, useEffect } from "react";
import * as ImagePicker from "expo-image-picker";

export default function ProfilePic({ returnVariable }) {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      returnVariable(result.assets[0].uri);
    }
  };

  return (
    <View
      style={{
        backgroundColor: "rgba(128, 128, 128, 0.1)",
        borderRadius: 100,
        width: 200,
        height: 200,
        marginRight: 20,
        marginLeft: 20,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TouchableOpacity onPress={pickImage}>
        {image !== null && (
          <Image
            source={{ uri: image }}
            style={{ width: 200, height: 200, borderRadius: 100 }}
          />
        )}
        {image == null && (
          <Image
            source={require("../assets/images/plus.png")}
            style={{ height: 40, width: 40 }}
          />
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontFamily: "LatoBold",
    color: colours.white,
    paddingLeft: 15,
    paddingTop: 5,
    justifyContent: "center",
  },
  subtitle: {
    flex: 0.4,
    fontSize: 24,
    color: colours.subtitle,
    fontFamily: "LatoRegular",
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
