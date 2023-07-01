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

// import { useCallback, useEffect, useState } from 'react';
// import { Text, View } from 'react-native';
// import * as SplashScreen from 'expo-splash-screen';
// import { useFonts } from 'expo-font';
// {/* Controls the flow of the app */}
// import Navigation from "./navigation/Navigation";

// // Keep the splash screen visible while we fetch resources
// SplashScreen.preventAutoHideAsync();

// export default function Page() {
//   const [appIsReady, setAppIsReady] = useState(false);

//   useEffect(() => {
//     async function prepare() {
//       try {
//         // Pre-load fonts, make any API calls you need to do here
//           {/* Importing custom fonts */}
//           const [fontsLoaded] = useFonts({
//           LatoBold: require("../app/assets/fonts/Lato/Lato-Bold.ttf"),
//           LatoRegular: require("../app/assets/fonts/Lato/Lato-Regular.ttf"),
//   })
//         // Artificially delay for two seconds to simulate a slow loading
//         // experience. 
//         await new Promise(resolve => setTimeout(resolve, 2000));
//       } catch (e) {
//         console.warn(e);
//       } finally {
//         // Tell the application to render
//         setAppIsReady(true);
//       }
//     }

//     prepare();
//   }, []);

//   const onLayoutRootView = useCallback(async () => {
//     if (appIsReady) {
//       // This tells the splash screen to hide immediately! If we call this after
//       // `setAppIsReady`, then we may see a blank screen while the app is
//       // loading its initial state and rendering its first pixels. So instead,
//       // we hide the splash screen once we know the root view has already
//       // performed layout.
//       await SplashScreen.hideAsync();
//     }
//   }, [appIsReady]);

//   if (!appIsReady) {
//     return null;
//   }

//   return <Navigation />;
// }