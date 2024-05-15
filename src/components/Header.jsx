import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

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
    marginTop: 28,
    marginLeft: 10,
    width: "75%",
    height: 30,
    elevation: 2,
    borderRadius: 3,
    backgroundColor: "#fff",
  },
  headerText: {
    fontSize: 16,
    color: "black",
    textAlign: "center",
    fontFamily: "Josefin",
  },
});

export default Header;








