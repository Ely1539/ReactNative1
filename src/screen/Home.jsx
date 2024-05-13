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
import categories from "../data/categories.json";
import Counter from '../components/Counter';


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
          <Pressable
            style={styles.pressableHome}
            onPress={() => navigation.navigate("HoroscopeS")}
          >  
            <Text style={styles.buttonText}>Obtene tu Horóscopo de Hoy</Text>
          </Pressable>
        </View>
      )}
      {orientation === "portrait" ? (
        <View style={styles.portraitContainer}>
          <ImageBackground
            source={require("../../assets/toques.webp")}
            style={styles.backgroundImage}
          ></ImageBackground>
       <View>
      
      </View>
      <Counter />  
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
    backgroundColor: colors.cardScreens,
    marginTop: 10,
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
  buttonText:{
    color: colors.lightColor,
  },
  pressableHome: {
    marginLeft: 180,
    width: 200,
    height: 50,
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 2,
    shadowColor: colors.lightColor,
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

});
