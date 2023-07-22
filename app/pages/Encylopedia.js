import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import React from "react";
import colours from "../components/Colours";
import { doc, getDocs, collection, query, limit } from "firebase/firestore";
import { db } from "../../firebase";
import { useEffect, useState } from "react";
import PlanetViewer from "../components/PlanetViewer";
import { useNavigation } from "expo-router";
import Button from "../components/Button";

const Encyclopedia = () => {
  /* array of planets*/
  const [data, setData] = useState([]);
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(true);

  const navigateBack = () => {
    navigation.goBack();
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const ref = collection(db, "Encyclopedia");
        const querySnapshot = await getDocs(ref);

        const fetchedData = [];
        querySnapshot.forEach((doc) => {
          const documentData = doc.data();
          fetchedData.push(documentData);
          console.log(documentData.planet);
        });

        setData(fetchedData); // Update the data array using the setData function
        setIsLoading(false); // Data fetching is complete, set isLoading to false
      } catch (error) {
        console.log("Error getting documents: ", error);
      }
    };

    if (data.length === 0) {
      fetchData();
    }
  }, [data]);

  /* Repeated component stored in an array */
  const len = data.length;
  console.log(len);
  const planetArr = data
    .map((info) => <PlanetViewer key={info} info={info} />)
    .slice(0, 9);

  return (
    <KeyboardAvoidingView style={styles.container}>
      {/* Title */}
      <TouchableOpacity onPress={navigateBack}>
        <View style={styles.button}>
          <View style={styles.buttonContainer}>
            <Button styleOverride={styles.buttonLayout} />
            <Image
              style={styles.overlayImage}
              source={require("../assets/images/left-arrow.png")}
            />
          </View>
        </View>
      </TouchableOpacity>
      <Text testID="loginTitle" style={styles.title}>
        Planets
      </Text>

      {isLoading ? (
        <ActivityIndicator size="large" color={colours.white} />
      ) : (
        <ScrollView style={{ width: 350 }}>{planetArr}</ScrollView>
      )}
    </KeyboardAvoidingView>
  );
};

export default Encyclopedia;

const styles = StyleSheet.create({
  container: {
    // Background
    flex: 1,
    alignItems: "center",
    backgroundColor: colours.primary,
  },

  title: {
    alignItems: "center",
    fontSize: 50,
    color: colours.white,
    fontFamily: "LatoBold",
    paddingBottom: 10,
    paddingTop: 5,
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
