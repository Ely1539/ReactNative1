import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import React from "react";
import { colors } from "../constants/colors";
import { useSelector } from "react-redux";

const Header = ({ route }) => {
  const categorySelected = useSelector((state) => state.shop.value.categorySelected);
  const itemSelected = useSelector((state) => state.shop.value.itemSelected);

  if (itemSelected && itemSelected.title) {
    headerText = itemSelected.title;
  } else if (categorySelected) {

    headerText = categorySelected;
  } else if (route.name) {
    
    headerText = route.name;
  }

  return (
    <View style={styles.headerContainer}>
      {itemSelected && itemSelected.title && (
        <Text style={styles.headerText}>{itemSelected.title}</Text>
      )}
      {categorySelected && !itemSelected && (
        <Text style={styles.headerText}>{categorySelected}</Text>
      )}
      {!itemSelected && !categorySelected && route.name && (
        <Text style={styles.headerText}>{route.name}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: "center",
    marginTop: 30,
    marginLeft: 10,
    width: "75%",
    height: 50,
    shadowColor: colors.cardColor,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
    backgroundColor: "red",
    borderWidth: 1,
    borderColor: colors.cardColor,
    borderRadius: 20,
  },
  headerText: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
    fontFamily: "Josefin",
  },
});

export default Header;


