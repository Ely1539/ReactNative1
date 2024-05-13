import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../constants/colors";
import { Feather } from "@expo/vector-icons";

const OrderItem = ({ orderItem }) => {
  const total = orderItem.items.reduce(
    (acc, currentItem) => (acc += currentItem.price * currentItem.quantity),
    0
  );

  return (
    <View style={styles.card}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          {new Date(orderItem.createdAt).toLocaleString()}
        </Text>
        <Text style={styles.text2}>${total}</Text>
      </View>
      <Feather name="search" size={30} color="red" />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 100,
    backgroundColor: colors.cardScreens,
    padding: 10,
    margin: 10,
    borderWidth: 2,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textContainer: {
    width: "70%",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  text: {
    fontFamily: "Josefin",
    fontSize: 17,
    color: colors.lightColor,
  },
  text2: {
    marginTop: 20,
    fontFamily: "Josefin",
    fontSize: 12,
    color: colors.lightColor,
  },
});

export default OrderItem;
