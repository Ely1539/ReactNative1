import React from "react";
import { StyleSheet, Text, Pressable, Image } from "react-native";
import { useDispatch } from "react-redux";
import { setSelectedCategory } from "../features/Shop/ShopSlice";
import Card from "./Card";
import { colors } from "../constants/colors";

const CategoryItem = ({ category, image, navigation }) => {
  
  const dispatch = useDispatch();
  const handleNavigate = () => {
    dispatch(setSelectedCategory(category));
    navigation.navigate("ItemListCategory", { category });
  };

  return (
    <Card style={styles.categoryContainer}>
      <Pressable onPress={handleNavigate} style={styles.pressable}>
        <Image source={{ uri: image }} style={styles.image} />
        <Text style={styles.itemText}>{category}</Text>
      </Pressable>
    </Card>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  categoryContainer: {
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 10,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: "#fff",
  },
  pressable: {
    flex: 1,
    alignItems: "center",
  },
  image: {
    width: 360,
    height: 250,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    resizeMode: "cover",
  },
  itemText: {
    color: colors.lightColor,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
});
