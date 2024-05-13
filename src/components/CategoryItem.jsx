import { StyleSheet, Text, Pressable } from "react-native";
import React from "react";
import { colors } from "../constants/colors";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import {  setSelectedCategory } from "../features/Shop/ShopSlice";
const CategoryItem = ({ category, navigation }) => {
const dispatch = useDispatch()

const handleNavigate = () => {
  dispatch(   setSelectedCategory(category) )
  navigation.navigate("ItemListCategory", { category })
}
  return (
    <Card style={styles.categoryContainer}>
      <Pressable
        onPress={ handleNavigate}
      >
        <Text style={styles.itemText}>{category}</Text>
      </Pressable>
    </Card>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  categoryContainer: {
    backgroundColor: "gold",
    borderRadius: 12,
    width: "100%",
    height: 60,
    marginTop: 12,
    shadowColor: colors.lightColor,
  },
  itemText: {
    color: colors.lightColor,
    textAlign: "center",
    fontSize: 20,
    fontFamily: "Jersey",

    backgroundColor: colors.groundColor,
    width: "100%",
    height: "70%",
    fontFamily: "Josefin",
  },
});
