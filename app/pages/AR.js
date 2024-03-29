import React, { useRef, useEffect } from 'react';
import UnityView from '@azesmway/react-native-unity';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity
} from "react-native";
import colours from "../components/Colours";
import Button from "../components/Button";

const AR = ({ navigation }) => {
  const unityRef = useRef(null);

  useEffect(() => {
    if (unityRef.current) {
      const message = {
        gameObject: 'gameObject',
        methodName: 'methodName',
        message: 'message',
      };
      unityRef.current.postMessage(message.gameObject, message.methodName, message.message);
    }
  }, []);

  return (
    <View style={styles.container}>
      <UnityView
        ref={unityRef}
        style={{ flex: 6 }}
        onUnityMessage={(result) => {
          console.log('onUnityMessage', result.nativeEvent.message);
        }}
      />

      <View style={styles.buttonRow}>
        <TouchableOpacity onPress={() => navigation.navigate("Forum")}>
          <View style={styles.buttonContainer}>
            <Button styleOverride={styles.buttonLayout} />
            <Image
              style={styles.overlayImage}
              source={require("../assets/images/chat.png")}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <View style={styles.buttonContainer}>
            <Button styleOverride={styles.buttonLayout} />
            <Image
              style={styles.overlayImage}
              source={require("../assets/images/home.png")}
              // You can also use a network image by providing a URI
              // source={{ uri: 'https://example.com/path/to/your/image.png' }}
            />
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => navigation.navigate("Encyclopedia")}>
          <View style={styles.buttonContainer}>
            <Button styleOverride={styles.buttonLayout} />
            <Image
              style={styles.overlayImage}
              source={require("../assets/images/loupe.png")}
              // You can also use a network image by providing a URI
              // source={{ uri: 'https://example.com/path/to/your/image.png' }}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AR;

const styles = StyleSheet.create({
  container: {
    // Background
    flex: 1,
    //backgroundColor: colours.primary,
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
  buttonRow: {
    flex: 1,
    backgroundColor: colours.primary,
    opacity: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
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
})