import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { colors } from "../constants/colors";
import { Entypo } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { removeCartItem } from "../features/Cart/cart.slice"; 

const CartItem = ({ cartItem }) => {
  const [quantity, setQuantity] = useState(cartItem.quantity);
  const dispatch = useDispatch();

  const handleRemoveItem = () => {
    dispatch(removeCartItem(cartItem)); 
  };
  

  return (
    <View style={styles.card}>
      <Image source={{ uri: cartItem.images[0] }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>{cartItem.title} ({cartItem.quantity}) </Text>
        <Text style={styles.price}>Total: ${cartItem.price * quantity}</Text>
        <TouchableOpacity onPress={handleRemoveItem} style={styles.removeButton}>
          <Text style={styles.removeButtonText}>Eliminar</Text>
        </TouchableOpacity>
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
  price: {
    fontFamily: "JosefinSans-SemiBold",
    fontSize: 16,
    color: colors.accent,
  },
  removeButton: {
    backgroundColor: colors.lightColor,
    borderRadius: 10,
    padding: 5,
    marginTop: 15,
    alignSelf: "flex-start",
    width: 90,
    alignContent: "center",
    textAlign: "center",
    marginLeft: 90,
  },
  removeButtonText: {
    fontFamily: "JosefinSans-Regular",
    fontSize: 18,
    color: colors.cardScreens,
    alignContent: "center",
    textAlign: "center",
  },
});

export default CartItem;
