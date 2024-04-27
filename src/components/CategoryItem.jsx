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
    backgroundColor: colors.cardColor,
    borderRadius: 12,
    width: 360,
    height: 60,
    shadowColor: colors.lightColor,
    shadowOffset: {
      width: 100,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    shadowColor: colors.cardColor,
    shadowOffset: {
      width: 20,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  itemText: {
    color: colors.lightColor,
    textAlign: "center",
    fontSize: 20,
    fontFamily: "Josefine",
    backgroundColor: colors.groundColor,
    width: "100%",
    height: "90%",
  },
});
