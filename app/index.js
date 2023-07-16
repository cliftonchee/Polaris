import { useFonts } from "expo-font";
import * as React from "react";
import Navigation from "./navigation/Navigation";
import AppLoading from "expo-app-loading";

export default function Page() {
  // Importing custom fonts
  const [fontsLoaded] = useFonts({
    LatoBold: require("../app/assets/fonts/Lato/Lato-Bold.ttf"),
    LatoRegular: require("../app/assets/fonts/Lato/Lato-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading/>;
  }

  return <Navigation />;
}