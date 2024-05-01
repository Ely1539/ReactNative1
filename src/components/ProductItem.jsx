import React from "react";
import { StyleSheet, Image, Text, Pressable } from "react-native";
import Card from "./Card";
import { colors } from "../constants/colors";
import { View } from "react-native-web";

const ProductItem = ({ item, setProductSelected = () => {}, navigation }) => {
  return (
    <Card style={styles.cardDetailStyle}>
      <Pressable
        style={styles.Pressable}
        onPress={() =>
          navigation.navigate("ItemDetail", { productId: item.id })
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
  marginTop: 30,

    width: "48%",
    height: "100%",
    shadowColor: colors.lightColor,
    borderColor: colors.cardColor,
    borderWidth: 1,
    shadowOffset: {
      width: 10,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
  },

  textCategory: {
    color: colors.lightColor,
    height: 20,
    width: "100%",
    fontFamily: "Josefine",
    fontSize: 18,
  
    
  },

  cardDetailStyle: {
    width: "200%",
    height: 150,
    marginTop:30,


  },
});

export default ProductItem;
