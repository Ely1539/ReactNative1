import React from "react";
import { StyleSheet, Image, Text, Pressable } from "react-native";
import Card from "./Card";
import { colors } from "../constants/colors";


const ProductItem = ({ item, setProductSelected = () => {}, navigation }) => {
  return (
    <Card style={styles.cardDetailStyle}>
      <Pressable
        style={styles.Pressable}
        onPress={() =>
          navigation.navigate("ItemDetail", {
            productId: item.id,
            productName: item.title,
          })
        }
      >
        <Text style={styles.textCategory}>{item.title}</Text>
        <Image
          resizeMode="cover"
          style={styles.image}
          source={{ uri: item.images[0] }}
        />
      </Pressable>
    </Card>
  );
};

const styles = StyleSheet.create({
  image: {
    marginTop: 20,
    width: "80%",
    height: "100%",
    borderColor:"red",
    borderWidth: 1,

  },

  textCategory: {
    color: colors.lightColor,
    height: 40,
    width: "100%",
    fontFamily: "Josefine",
    fontSize: 18,
  },

  cardDetailStyle: {
    width: "200%",
    height: 150,
    marginTop: 10,
  },
});

export default ProductItem;
