import { 
    StyleSheet, 
    Text, 
    View, 
    Image,
    SafeAreaView,
  } from "react-native";
  
  import colours from "../components/Colours";
  import Button from "../components/Button";
  import InputBox from "../components/InputBox";
  
  export default function Login() {

    return (
      <SafeAreaView style={styles.container}>
        
        {/* Image */}
        <Image 
          style={styles.image} 
          source={require('../assets/images/polaris-constellation.png')} 
        />
  
        {/* Title */}
        <Text style={styles.title}>P O L A R I S</Text> 
        {/* Subtitle */}
        <Text style={styles.subtitle}>Connect with the stars</Text> 

        {/* Login details */}
        <View style={styles.loginDetails}>

          {/* Input Boxes with Text above */}
          <Text style={styles.smallText}>Username</Text>
          <InputBox initialText="Username"></InputBox>
          <Text style={styles.smallText}>Password</Text>
          <InputBox initialText="Password"></InputBox>

          {/* Forgot Password */}
          <Button // TODO: Add onPress
            styleOverride={styles.forgotPassword} 
            title="Forgot Password"
            textOverride={styles.forgotPasswordText}>
          </Button>

        </View>
        
        {/* Customisable Buttons */}
        <View style={styles.buttonsSideBySide}>
          {/* TODO: Add onPress to new pages */}
          <Button title="Sign Up"></Button> 
          <Button title="Sign In"></Button>
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
      flex : 0.5,
      alignItems: "center",
      fontSize: 50,
      color: colours.white,
      fontFamily: 'LatoBold',
    },
    subtitle: {
      flex : 0.5,
      fontSize: 24,
      color: colours.subtitle,
      fontFamily: 'LatoRegular'
    },
    loginDetails: {
      flex: 2.5,
    },
    smallText: {
      flex: 1,
      fontSize: 20,
      color: colours.gray,
      paddingTop: 10,
      paddingBottom: 10,
    },
    forgotPassword: {
      flex: 0.25,
      fontSize: 10,
      color: colours.gray,
      backgroundColor: colours.primary,
      height: 10,
      width: 100,
      margin: 0,
      marginLeft: -10,
    },
    forgotPasswordText: {
      fontSize: 10,
      color: colours.gray,
    },
    buttonsSideBySide: {
      flex: 1,
      flexDirection: "row",
    },
  });
  