import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
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
      <Image source={{ uri: cartItem.images[0] }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          {cartItem.title} ({quantity})
        </Text>
        <View style={styles.quantityContainer}>
          <Text style={styles.quantityText}>Cantidad:</Text>
          <TouchableOpacity onPress={increaseQuantity}>
            <Entypo name="plus" size={24} color="green" />
          </TouchableOpacity>
          <Text style={styles.quantity}>{quantity}</Text>
          <TouchableOpacity onPress={decreaseQuantity}>
            <Entypo name="minus" size={24} color="red" />
          </TouchableOpacity>
        </View>
        <Text style={styles.price}>Total: ${cartItem.price * quantity}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.cardScreens,
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 10,
    borderRadius: 10,
  },
  image: {
    width: 100,
    height: 140,
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  text: {
    fontFamily: "Josefin",
    fontSize: 16,
    color: colors.lightColor,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  quantityText: {
    fontFamily: "Josefin",
    fontSize: 14,
    color: colors.lightColor,
    marginRight: 5,
  },
  quantity: {
    fontFamily: "Josefin",
    fontSize: 14,
    color: colors.lightColor,
    marginHorizontal: 10,
  },
  price: {
    fontFamily: "Josefin",
    fontSize: 18,
    color: colors.lightColor,
    marginTop: 10,
  },
});

export default CartItem;
