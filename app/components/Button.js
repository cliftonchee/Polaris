import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import colours from "./Colours";

const Button = ({ styleOverride, onPress, textOverride, title }) => {
  return (
    // Customisable Button (add onPress, Text etc in pages)
    <View>
      <TouchableOpacity
        // Use styleOverride if change style of original button
        // Use textOverride if change text in button
        // React takes latest element in array to override existing style
        // on top of default style
        // (can refer to StartPage for an example)
        style={[styles.button, styleOverride]}
        onPress={onPress}
      >
        <Text style={[styles.buttonText, textOverride]}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colours.secondary,
    borderRadius: 50,
    width: 300,
    height: 65,
    margin: 5,
  },
  buttonText: {
    fontSize: 20,
    color: colours.white,
    fontFamily: "LatoBold",
  },
});
