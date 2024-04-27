import { StyleSheet, View } from "react-native";
import React from "react";
import { colors } from "../constants/colors";

const Card = ({ children, style }) => {
  return <View style={{ ...styles.containerCard, ...style }}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  containerCard: {
    marginTop: 10,
    backgroundColor: colors.cardColor,
    width: 20,
    shadowColor: colors.lightColor,
    shadowOpacity: 0.7,
    shadowRadius: 2.65,
  },
});
