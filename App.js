import React, { useCallback } from "react";
import { Platform, StyleSheet, StatusBar } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { colors } from "./src/constants/colors";
import Navigator from "./src/components/navigation/navigator";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { View } from "react-native-web";

const App = () => {
  const [fontsLoaded, fontError] = useFonts({
    Josefine: require("./assets/JosefinSans-Italic.ttf"),
    Jersey: require("./assets/Jersey20Charted-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  return (
    <SafeAreaProvider style={styles.container}>
        <Navigator />
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {

   paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  
  },
});

export default App;
