// En tu componente CategoryItem
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
      <Pressable onPress={handleNavigate}>
        <Image source={{ uri: image }} style={styles.image} />
        <Text style={styles.itemText}>{category}</Text>
      </Pressable>
    </Card>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  categoryContainer: {
    borderRadius: 1,
    width: 450,
    height: 300,
    marginTop: 18,

  },
  image: {
    width: 500,
    height: 250,

    marginTop: 6,
  
  },
  itemText: {
    color: colors.lightColor,
    textAlign: "center",
    fontSize: 17,
    fontFamily: "Josefine",
    marginTop: 18,
  
  },
});


