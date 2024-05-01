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
    justifyContent: 'center',
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
    backgroundColor: "white",
    borderWidth: 1, 
    borderColor: colors.cardColor, 
    borderRadius: 20,
  },
  
  headerText: {
    fontSize: 16,
    color: "red",
    textAlign: "center",
  },
});

export default Header;
