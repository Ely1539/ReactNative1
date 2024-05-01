import { StyleSheet, View } from "react-native";
import React from "react";
import { colors } from "../constants/colors";

const Card = ({ children, style }) => {
  return <View style={{ ...styles.containerCard, ...style }}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  containerCard: {
    backgroundColor: colors.cardColor,
  },
});
