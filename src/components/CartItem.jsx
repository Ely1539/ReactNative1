import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { colors } from "../constants/colors";
import { Entypo } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { decrement, increment } from "../features/counter/counterSlice";

const CartItem = ({ cartItem }) => {
  const [quantity, setQuantity] = useState(cartItem.quantity);
  const dispatch = useDispatch();

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
    dispatch(increment()); // Dispatches the increment action
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
      dispatch(decrement()); // Dispatches the decrement action
    }
  };

  return (
    <View style={styles.card}>
      <Image source={{ uri: cartItem.images[0] }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>{cartItem.title}</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={decreaseQuantity} style={styles.quantityButton}>
            <Entypo name="minus" size={20} color="white" />
          </TouchableOpacity>
          <Text style={styles.quantity}>{quantity}</Text>
          <TouchableOpacity onPress={increaseQuantity} style={styles.quantityButton}>
            <Entypo name="plus" size={20} color="white" />
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
    backgroundColor: colors.cardScreens,
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 15,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
    marginLeft: 15,
    justifyContent: "center",
  },
  text: {
    fontFamily: "JosefinSans-SemiBold",
    fontSize: 18,
    color: colors.lightColor,
    marginBottom: 10,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    
  },
  quantityButton: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    padding: 5,
    marginHorizontal: 10,
  },
  quantity: {
    fontFamily: "JosefinSans-Regular",
    fontSize: 18,
    color: colors.lightColor,
  },
  price: {
    fontFamily: "JosefinSans-SemiBold",
    fontSize: 16,
    color: colors.accent,
  },
});

export default CartItem;

