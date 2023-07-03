import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";
import colours from "../components/Colours";
import Button from "../components/Button";

// To navigate between screens, add '{ navigation }'
// as an argument, and under onPress, refer to below
export default function StartPage({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/images/polaris-constellation.png")}
      />

      {/* Title */}
      <Text style={styles.title}>P O L A R I S</Text>
      {/* Subtitle */}
      <Text style={styles.subtitle}>Connect with the stars</Text>

      {/* Customisable Button */}
      <View style={styles.button}>
        <Button
          styleOverride={styles.buttonLayout}
          // Navigation to Login page
          onPress={() => navigation.navigate("Login")}
          title="Get started"
        ></Button>
      </View>
    </SafeAreaView>
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
    flex: 0.5,
    alignItems: "center",
    fontSize: 50,
    color: colours.white,
    fontFamily: "LatoBold",
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

// import React, { useRef, useEffect } from 'react';
// import UnityView from '@azesmway/react-native-unity';
// import { View } from 'react-native';

// const AR = () => {
//   const unityRef = useRef(null);

//   useEffect(() => {
//     if (unityRef.current) {
//       const message = {
//         gameObject: 'gameObject',
//         methodName: 'methodName',
//         message: 'message',
//       };
//       unityRef.current.postMessage(message.gameObject, message.methodName, message.message);
//     }
//   }, []);

//   return (
//     <View style={{ flex: 1 }}>
//       <UnityView
//         ref={unityRef}
//         style={{ flex: 1 }}
//         onUnityMessage={(result) => {
//           console.log('onUnityMessage', result.nativeEvent.message);
//         }}
//       />
//     </View>
//   );
// };

// export default AR;
