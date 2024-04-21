import { StyleSheet, View } from "react-native"
import Home from "./src/screen/Home"
import { colors } from "./src/constants/colors"
import Header from "./src/components/Header"
import ItemListCategory from "./src/screen/ItemListCategory"
import { useState } from "react"
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { useCallback } from "react";  


const App = () => {
  const [fontsLoaded, fontError] = useFonts({
    'Josefine': require('./assets/JosefinSans-Italic.ttf'),
    'Jersey': require('./assets/Jersey20Charted-Regular.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  
const [categorySelected, setCategorySelected] = useState("");

  return (
    <View style={styles.container}>
      <Header title={"COMPANY DETAIL SHOP"}/>
   {! categorySelected ? (
   <Home setCategorySelected={setCategorySelected}/> ):
   (<ItemListCategory categorySelected={categorySelected} setCategorySelected={setCategorySelected}/>  
   )}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      marginTop: 10,
      
      height: "120%",
      alignItems: "center",
      backgroundColor: colors.groundColor,
    },
  })

export default App