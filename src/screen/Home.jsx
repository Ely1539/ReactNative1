// Home.jsx

import React, { useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  View,
  ImageBackground,
  useWindowDimensions,
  Button, // Importa Button desde react-native
} from "react-native";
import { colors } from "../constants/colors";
import CategoryItem from "../components/CategoryItem";
import categories from "../data/categories.json";


const Home = ({ navigation }) => {
  const [orientation, setOrientation] = useState("portrait");
  const { width, height } = useWindowDimensions();

  useEffect(() => {
    if (width > height) setOrientation("landscape");
    else setOrientation("portrait");
  }, [width, height]);

  return (
    <View style={styles.contentContainer}>

      {orientation === "portrait" && (
        <View style={styles.buttonContainer}>
     <Button
  title="Obtener tu Horóscopo de Hoy"
  onPress={() => navigation.navigate("HoroscopeS")}
/>
        </View>
      )}
      {orientation === "portrait" ? (
        <View style={styles.portraitContainer}>
          <ImageBackground
            source={require("../../assets/toques.webp")}
            style={styles.backgroundImage}
          ></ImageBackground>

          <FlatList
            style={styles.flatListPortrait}
            keyExtractor={(item) => item}
            data={categories.sort()}
            renderItem={({ item }) => (
              <CategoryItem navigation={navigation} category={item} />
            )}
          />
        </View>
      ) : (
        <View style={styles.landscapeContainer}>
          <ImageBackground
            source={require("../../assets/toques.webp")}
            style={styles.imageLandscape}
          />
          <FlatList
            style={styles.flatListLandscape}
            keyExtractor={(item) => item}
            data={categories.sort()}
            renderItem={({ item }) => (
              <CategoryItem navigation={navigation} category={item} />
            )}
          />
        </View>
      )}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.9,
    height: "100%",
    width: "100%",
  },
  portraitContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: 30,
  },
  flatListPortrait: {
    flex: 1,
    width: "82%",
    marginTop: 20,
  },
  landscapeContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "95%",
    height: "100%",
    marginLeft: 50,
  },
  imageLandscape: {
    flex: 1,
    height: "100%",
    width: "70%",
  },
  flatListLandscape: {
    flex: 1,
    width: "100%",
  },
  buttonContainer: {
    marginTop: 20,
  },
});
