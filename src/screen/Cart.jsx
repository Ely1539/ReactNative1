import React, { useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";



const Cart = () => {
  const {items: CartData, total} = useSelector(state =>state.cart.value)

  return (
    <View style={styles.container}>
      <FlatList
        data={CartData}
        keyExtractor={(cart) => cart.id}
        renderItem={({ item }) => (
          <CartItem cartItem={item} updateTotal={total} />
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

