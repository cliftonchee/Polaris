import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";
import colours from "../components/Colours";
import Button from "../components/Button";

// To navigate between screens, add '{ navigation }'
// as an argument, and under onPress, refer to below
const Profile = ({ navigation, name }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: "rgba(128, 128, 128, 0.1)",
          borderRadius: 20,
          width: 358,
          height: 70,
          justifyContent: "center",
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Image
            style={{ height: 50, width: 50, marginLeft: 10 }}
            source={require("../assets/images/profile-user.png")}
          />
          {/* Title */}
          <Text style={styles.title}>Welcome {name}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

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
