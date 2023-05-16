{/* For navigating between screens */}
//import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

{/* Importing pages */}
import StartPage from "../pages/StartPage";
import Login from "../pages/Login";

const Stack = createNativeStackNavigator();

export default function Navigation() {    
    return (
        //<NavigationContainer> // throws an error if uncommented
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Start" component={StartPage} />
                <Stack.Screen name="Login" component={Login} />
            </Stack.Navigator>
        //</NavigationContainer>
    );
}