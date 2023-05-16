import { 
  StyleSheet, 
  Text, 
  View, 
  Image,
  SafeAreaView,
} from "react-native";

import colours from "../components/Colours";
import Button from "../components/Button";

// To navigate between screens, add '{ navigation }'
// as an argument, and under onPress, refer to below
export default function StartPage({ navigation }) {

  return (
    <SafeAreaView style={styles.container}>

      <Image 
        style={styles.image} 
        source={require('../assets/images/polaris-constellation.png')} 
      />

      {/* Title */}
      <Text style={styles.title}>P O L A R I S</Text> 
      {/* Subtitle */}
      <Text style={styles.subtitle}>Connect with the stars</Text> 
      
      {/* Customisable Button */}
      <View>
        <Button
          styleOverride={styles.button}
          // Navigation to Login page
          onPress={() => navigation.navigate('Login')}
          title="Get started">
        </Button>
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
  color: colours.white,
  paddingTop: 50,
  marginBottom: -40,
  fontFamily: 'LatoBold',
},
subtitle: {
  flex : 1,
  fontSize: 24,
  color: colours.subtitle,
  marginBottom: 0,
  fontFamily: 'LatoRegular'
},
button: { // Added on top of original button
  borderRadius: 30,
  width: 380,
  height: 100,
},
});