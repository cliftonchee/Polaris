import { StyleSheet, View, TextInput } from "react-native";

import colours from "../Colours";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const InputBox = ({ onChangeText }) => {
  return (
    <View style={styles.view}>
      <MaterialIcons
        name="alternate-email"
        size={20}
        color="#666"
        style={styles.icon}
      />
      <TextInput
        placeholder="Email"
        placeholderTextColor={colours.gray}
        onChangeText={onChangeText}
        style={styles.text}
        autoCapitalize="none"
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
    marginBottom: 25,
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
