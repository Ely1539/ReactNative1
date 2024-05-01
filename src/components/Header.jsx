import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import React from "react";
import { colors } from "../constants/colors";

const Header = ({ title }) => {
  const { height, width } = useWindowDimensions();

  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 30, 
    width: "60%", 
    height: 30, 
    shadowColor: colors.cardColor,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: colors.cardColor,
  },
  headerText: {
    fontSize: 16,
    color: colors.lightColor,
    textAlign: "center",
  },
});

export default Header;
