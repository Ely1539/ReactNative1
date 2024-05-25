import React from "react";
import { StyleSheet, Image, Text, Pressable } from "react-native";
import Card from "./Card";
import { colors } from "../constants/colors";

const ProductItem = ({ item, setProductSelected = () => {}, navigation }) => {
  return (
    <Card style={styles.cardDetailStyle}>
  
      <Pressable
      
        style={styles.pressable}
        onPress={() =>
          navigation.navigate("ItemDetail", {
            productId: item.id,
            productName: item.title,
          })
          
        }
      >
        <Image
          resizeMode="cover"
          style={styles.image}
          source={{ uri: item.images[0] }}
        />
        <Text style={styles.textCategory}>{item.title}</Text>
      </Pressable>
    </Card>
    
  );
};

const styles = StyleSheet.create({
  cardDetailStyle: {
    width: "90%",
    height: 200,
    marginVertical: 10,
    borderRadius: 15,
    overflow: "hidden",
    backgroundColor: colors.background,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  pressable: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  image: {
    width: "100%",
    height: 140,
    borderRadius: 15,
  },
  textCategory: {
    color: colors.primary,
    fontFamily: "Josefine",
    fontSize: 18,
    marginTop: 10,
    textAlign: "center",
  },
});

export default ProductItem;

