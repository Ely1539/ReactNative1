import React, { useCallback } from "react";
import { Platform, StyleSheet, StatusBar, View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import Navigator from "./src/navigation/navigator";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import store from "./src/store";
import { dropSessionsTable, initSQLiteDB, truncateSessionsTable } from "./src/persistence"

(async ()=> {
  try {
      if (Platform.OS !== 'web') {
          const response = await initSQLiteDB()
      }
  } catch (error) {
  }
})()





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
    <View style={styles.container}>
      <SafeAreaProvider>
        <Provider store={store}>
          <Navigator />
        </Provider>
      </SafeAreaProvider>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default App;
