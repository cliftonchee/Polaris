import { 
  StyleSheet, 
  Text, 
  View, 
  Image,
  SafeAreaView,
  TouchableOpacity ,
} from "react-native";

import colours from "./config/colours";

import { useFonts } from "expo-font";

export default function Page() {

  {/* Importing custom fonts */}
  const [fontsLoaded] = useFonts({
    LatoBold: require("../app/assets/fonts/Lato/Lato-Bold.ttf"),
    LatoRegular: require("../app/assets/fonts/Lato/Lato-Regular.ttf"),
  })

  return (
    <SafeAreaView style={styles.container}>

      <Image 
        style={styles.image} 
        source={require('../app/images/polaris-constellation.png')} 
      />

      {/* Title */}
      <Text style={styles.title}>P O L A R I S</Text> 
      {/* Subtitle */}
      <Text style={styles.subtitle}>Connect with the stars</Text> 
      
      {/* Customisable Button */}
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={console.log("Go to next page.")}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { // Background
    flex: 1,
    alignItems: "center",
    backgroundColor: colours.primary,
  },
  image: {
    flex : 3,
    justifyContent: "center",
    maxWidth: 960,
  },
  title: {
    flex : 1,
    alignItems: "center",
    fontSize: 50,
    fontWeight: 600,
    color: colours.white,
    paddingTop: 50,
    marginBottom: -40,
    fontFamily: 'LatoBold',
  },
  subtitle: {
    flex : 1,
    fontSize: 24,
    fontWeight: "regular",
    color: colours.subtitle,
    marginBottom: 0,
    fontFamily: 'LatoRegular'
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colours.secondary,
    borderRadius: 30,
    width: 380,
    height: 100,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "600",
    color: colours.white,
    fontFamily: 'LatoBold',
  },
});
