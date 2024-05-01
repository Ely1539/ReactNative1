import { Dimensions, StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { colors } from "../constants/colors";
import Card from "./Card";
import { YellowBox } from "react-native-web";
import ItemListCategory from "../screen/ItemListCategory";

const CategoryItem = ({ category, navigation }) => {
  return (
    <Card style={styles.categoryContainer}>
      <Pressable
        onPress={() => navigation.navigate("ItemListCategory", { category })}
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
    fontFamily: "Josefine",
    backgroundColor: colors.groundColor,
    width: "100%",
    height: "70%",
    gap: 40,
  },
});
