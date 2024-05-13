import React, { useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import CartData from "../data/cart.json";
import CartItem from "../components/CartItem";

const Cart = () => {
  const [total, setTotal] = useState(calculateTotal());

  function calculateTotal() {
    return CartData.reduce(
      (accumulator, currentItem) =>
        (accumulator += currentItem.price * currentItem.quantity),
      0
    );
  }

  function updateTotal(change) {
    setTotal((prevTotal) => prevTotal + change);
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={CartData}
        keyExtractor={(cart) => cart.id}
        renderItem={({ item }) => (
          <CartItem cartItem={item} updateTotal={updateTotal} />
        )}
      />
      <View style={styles.totalContainer}>
        <Pressable>
          <Text>Confirm</Text>
        </Pressable>
        <Text>Total: ${total}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flex: 1,
    marginBottom: 120,
  },
  totalContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Cart;
