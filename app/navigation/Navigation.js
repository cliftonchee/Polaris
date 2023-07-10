{
  /* For navigating between screens */
}
//import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

{
  /* Importing pages */
}
import StartPage from "../pages/StartPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Encyclopedia from "../pages/Encylopedia";
import PlanetData from "../pages/PlanetData";
import Forum from "../pages/Forum";
import ForumViewer from "../components/ForumViewer";
import ForgetPass from "../pages/ForgetPass";

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    //<NavigationContainer> // throws an error if uncommented
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Start" component={StartPage} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="ForgetPass" component={ForgetPass} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Encyclopedia" component={Encyclopedia} />
      <Stack.Screen name="PlanetData" component={PlanetData} />
      <Stack.Screen name="Forum" component={Forum} />
      <Stack.Screen name="ForumViewer" component={ForumViewer} />
    </Stack.Navigator>
    //</NavigationContainer>
  );
}
