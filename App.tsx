const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import SampsunSignInResponsive from "./screens/home";
import SampsunSignInResponsive1 from "./screens/investment";
import SampsunSignInResponsive2 from "./screens/exposure";
import SampsunSignInResponsive3 from "./screens/refferalandcashback";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-Medium": require("./assets/fonts/Montserrat-Medium.ttf"),
    "Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
    "Inconsolata-Regular": require("./assets/fonts/Inconsolata-Regular.ttf"),
    "Inconsolata-Medium": require("./assets/fonts/Inconsolata-Medium.ttf"),
    "Inconsolata-SemiBold": require("./assets/fonts/Inconsolata-SemiBold.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="SampsunSignInResponsive"
              component={SampsunSignInResponsive}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SampsunSignInResponsive1"
              component={SampsunSignInResponsive1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SampsunSignInResponsive2"
              component={SampsunSignInResponsive2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SampsunSignInResponsive3"
              component={SampsunSignInResponsive3}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
