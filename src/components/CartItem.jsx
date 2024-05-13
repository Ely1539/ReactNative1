import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { colors } from "../constants/colors";
import { Entypo } from "@expo/vector-icons";

const CartItem = ({ cartItem, updateTotal }) => {
  const [quantity, setQuantity] = useState(cartItem.quantity);

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
    updateTotal(cartItem.price);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
      updateTotal(-cartItem.price);
    }
  };

  return (
    <View style={styles.card}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          {cartItem.title} ({quantity})
        </Text>
        <Text style={styles.text2}>{cartItem.brand}</Text>
        <Text style={styles.text2}>${cartItem.price * quantity}</Text>
      </View>
      <View style={styles.quantityContainer}>
        <TouchableOpacity onPress={increaseQuantity}>
          <Entypo name="plus" size={24} color="green" />
        </TouchableOpacity>
        <TouchableOpacity onPress={decreaseQuantity}>
          <Entypo name="minus" size={24} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 160,
    backgroundColor: "white",
    margin: 10,
    borderWidth: 2,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    fontFamily: "Josefin",
  },
  textContainer: {
    marginLeft: 20,
    height: "90%",
    width: "50%",
    flexDirection: "column",
  },
  text: {
    fontFamily: "Josefin",
    fontSize: 19,
    color: colors.lightColor,
  },
  text2: {
    fontFamily: "Jersey",
    fontSize: 14,
    color: colors.lightColor,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 20,
  },
});

export default CartItem;
