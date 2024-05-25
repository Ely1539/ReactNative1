import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../constants/colors";
import { Feather } from "@expo/vector-icons";

const OrderItem = ({ order }) => {  
  const navigation = useNavigation();

  const total = order.items.reduce(
    (acc, currentItem) => (acc += currentItem.price * currentItem.quantity),
    0
  );

  const handlePress = () => {
    navigation.navigate("OrderDetailScreen", { order: order });
  };

  return (
    <TouchableOpacity style={styles.card} onPress={handlePress}> 
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          {new Date(order?.createdAt || null ).toLocaleString()}
        </Text>
        <Text style={styles.text2}>${total}</Text>
      </View>
      <Feather name="search" size={30} color="red" />
    </TouchableOpacity>
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
