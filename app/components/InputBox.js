import { 
    StyleSheet, 
    View,
    TextInput,
} from "react-native";

import colours from "../components/Colours";

const InputBox = ({initialText, onChangeText}) => {
    return (
        <View>
            <TextInput 
                style={styles.textInput}
                placeholder={initialText}
                placeholderTextColor={colours.gray}
                onChangeText={onChangeText}
                autoCapitalize="none">
            </TextInput>
        </View>
    );
}

export default InputBox;

const styles = StyleSheet.create({
    textInput: {
        width: 350,
        height: 60,
        color: colours.gray, // Colour of input
        fontSize: 16,
        borderWidth: 1,
        borderColor: colours.gray,
        borderRadius: 8,
        padding: 10,
    }
})