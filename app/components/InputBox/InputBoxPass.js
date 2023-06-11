import { StyleSheet, View, TextInput } from "react-native";

import colours from "../Colours";
import Ionicons from "react-native-vector-icons/Ionicons";

const InputBox = ({ onChangeText }) => {
  return (
    <View style={styles.view}>
      <Ionicons
        name="ios-lock-closed-outline"
        size={20}
        color="#666"
        style={styles.icon}
      />
      <TextInput
        placeholder="Password"
        placeholderTextColor={colours.gray}
        onChangeText={onChangeText}
        style={styles.text}
        autoCapitalize="none"
        secureTextEntry={true}
      ></TextInput>
    </View>
  );
};

export default InputBox;

const styles = StyleSheet.create({
  view: {
    flexDirection: "row",
    borderBottomColor: colours.white,
    borderBottomWidth: 1,
    paddingBottom: 8,
    width: 300,
  },
  icon: {
    marginRight: 5,
  },
  text: {
    flex: 1,
    paddingVertical: 0,
    color: colours.white,
  },
});
