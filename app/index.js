import { useFonts } from "expo-font";

{/* Controls the flow of the app */}
import Navigation from "./navigation/Navigation";

export default function Page() {

  {/* Importing custom fonts */}
  const [fontsLoaded] = useFonts({
    LatoBold: require("../app/assets/fonts/Lato/Lato-Bold.ttf"),
    LatoRegular: require("../app/assets/fonts/Lato/Lato-Regular.ttf"),
  })
  
  return <Navigation />;
}