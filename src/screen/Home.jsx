import React, { useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  View,
  ImageBackground,
  useWindowDimensions,
  Pressable,
  Text,
} from "react-native";
import { colors } from "../constants/colors";
import CategoryItem from "../components/CategoryItem";
import categoriesData from "../data/categories.json";

const Home = ({ navigation }) => {
  
  const [orientation, setOrientation] = useState("portrait");
  const { width, height } = useWindowDimensions();

  useEffect(() => {
    if (width > height) setOrientation("landscape");
    else setOrientation("portrait");
  }, [width, height]);

  return (
    <View style={styles.contentContainer}>
      {orientation === "portrait" ? (
        <View style={styles.portraitContainer}>
          <View style={styles.buttonContainer}>
            <Pressable
              style={styles.pressableHome}
              onPress={() => navigation.navigate("HoroscopeS")}
            >  
              <Text style={styles.buttonText}>Obtene tu Horóscopo de Hoy</Text>
            </Pressable>
          </View>
          <ImageBackground
            source={require("../../assets/toques.webp")}
            style={styles.backgroundImage}
          />
          <Text style={styles.textCategories}>Nuestros Productos</Text>
          <FlatList
            style={styles.flatListPortrait}
            keyExtractor={(item) => item.category}
            data={categoriesData}
            renderItem={({ item }) => (
              <CategoryItem navigation={navigation} category={item.category} image={item.image[0]} />
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
            keyExtractor={(item, index) => index.toString()}
            data={categoriesData}
            renderItem={({ item }) => (
              <CategoryItem navigation={navigation} category={item.category} image={item.images[0]} />
            )}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    marginTop: 10,
  },
  backgroundImage: {
    flex: 0.5,
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
    backgroundColor: "beige",
  },
  flatListPortrait: {
    flex: 1,
    width: "95%",
    marginTop: 1,
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
  buttonText: {
    color: colors.lightColor,
  },
  pressableHome: {
    backgroundColor: colors.cardColor,
    marginLeft: 180,
    width: 200,
    height: 30,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderWidth: 2,
    borderColor: colors.lightColor,
  },
  textCategories: {
    fontSize: 18,
    color: colors.backgroundColor,
    width: "100%",
    marginLeft: 10,
    fontFamily: "serif",
  },
});

export default Home;

