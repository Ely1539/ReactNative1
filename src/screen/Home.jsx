import React, { useEffect, useState } from "react";
import {
  FlatList,
  View,
  ImageBackground,
  useWindowDimensions,
  Pressable,
  Text,
  StyleSheet,
} from "react-native";
import CategoryItem from "../components/CategoryItem";
import { useGetCategoriesQuery } from "../services/shopService";

export const Home = ({ navigation }) => {
  const { data: categories, error, isLoading } = useGetCategoriesQuery();
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
            keyExtractor={(elementoDeMiArray) => elementoDeMiArray}
            data={categories}
            renderItem={({ item }) => (
              <CategoryItem
                navigation={navigation}
                category={item.category}
                image={item.image[0]}
              />
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
            keyExtractor={(product, index) => index.toString()}
            data={categories}
            renderItem={({ item }) => (
              <CategoryItem
                navigation={navigation}
                category={item.category}
                image={item.image[0]}
              />
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
  },
  portraitContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  landscapeContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  buttonContainer: {
    marginVertical: 20,
  },
  pressableHome: {
    backgroundColor: "#6200ee",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
  backgroundImage: {
    width: "100%",
    height: 200,
    marginRight: 420,
  },
  imageLandscape: {
    width: "50%",
    height: "100%",
    resizeMode: "cover",
  },
  textCategories: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 20,
  },
  flatListPortrait: {
    width: "100%",
  },
  flatListLandscape: {
    width: "50%",
  },
});

export default Home;
