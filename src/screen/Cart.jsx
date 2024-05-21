import React from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";
import { colors } from "../constants/colors";
import { usePostOrderMutation } from "../services/shopService";

const Cart = () => {
  const { items: CartData, total } = useSelector(state => state.cart.value);
  const [triggerPostOrder,result]= usePostOrderMutation();

  const onConfirmOrder = () => {
    triggerPostOrder({items: CartData, user:'Ely', total});
  }
 
  return (
    <View style={styles.container}>
      <FlatList
        data={CartData}
        keyExtractor={(cart) => cart.id}
        renderItem={({ item }) => (
          <CartItem cartItem={item} updateTotal={total} />
        )}
        contentContainerStyle={styles.flatListContent}
      />
      <View style={styles.totalContainer}>
        <Pressable onPress={onConfirmOrder} style={styles.confirmButton}>
          <Text style={styles.confirmButtonText}>Confirmar Compra</Text>
        </Pressable>
        <Text style={styles.totalText}>Total: ${total}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    padding: 20,
    backgroundColor: colors.background,
  },
  flatListContent: {
    paddingBottom: 20,
  },
  totalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: colors.cardScreens,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  confirmButton: {
    backgroundColor: colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  confirmButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  totalText: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.primary,
  },
});

export default Cart;
