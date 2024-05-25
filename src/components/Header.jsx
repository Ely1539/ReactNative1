import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import {colors} from "../constants/colors"
const Header = () => {
  const headerText = useSelector((state) => state.shop.value.headerText);

  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>{headerText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 28,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: colors.cardScreens, 
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF", 
    textAlign: "center",
    fontFamily: "JosefinSans-SemiBold", 
  },
});

export default Header;




