import { StyleSheet, View, TextInput } from "react-native";

import colours from "../Colours";
import AntDesign from "react-native-vector-icons/AntDesign";

const InputBox = ({ initialText, onChangeText }) => {
  return (
    <View style={styles.view}>
      <AntDesign name="user" size={20} color="#666" style={styles.icon} />
      <TextInput
        placeholder={initialText}
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
