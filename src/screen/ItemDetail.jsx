import React, { useEffect, useState } from "react";
import {
  Pressable,
  Image,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import allProducts from "../data/products.json";
import { colors } from "../constants/colors";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedItem } from "../features/Shop/ShopSlice"; 

const ItemDetail = ({ route, navigation }) => {
  const dispatch = useDispatch(); 

  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { width, height } = useWindowDimensions();
  const { productId: itemSelected } = route.params;

  useEffect(() => {
    const productSelected = allProducts.find(
      (product) => product.id === itemSelected
    );
    setProduct(productSelected);
    dispatch(setSelectedItem(productSelected)); 
  }, [itemSelected, dispatch]);

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };

  return (
    <View>
      <Pressable onPress={() => navigation.goBack()} style={styles.button}>
        <Text style={styles.buttonText}>Ir a categorías</Text>
      </Pressable>
      {product ? (
        <View style={styles.detailContainer}>
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: product.images[0] }}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
          <View style={styles.textContainer}>
            <Text>{product.title}</Text>
            <Text>{product.description}</Text>
            <Text style={styles.priceDetail}>
              Precio: ${product.price * quantity}
            </Text>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>Agregar al carrito</Text>
            </Pressable>
          </View>
        </View>
      ) : null}
      <View style={styles.quantityContainer}>
        <Pressable
          onPress={() => handleQuantityChange(quantity - 1)}
          style={styles.quantityButton}
        >
          <Text style={styles.more}>-</Text>
        </Pressable>
        <Text>{quantity}</Text>
        <Pressable
          onPress={() => handleQuantityChange(quantity + 1)}
          style={styles.quantityButton}
        >
          <Text style={styles.more}>+</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    height: 40,
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.cardColor,
    borderRadius: 20,
    alignSelf: "center",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.lightColor,
  },
  detailContainer: {
    marginTop: "1%",
    height: "70%",
    width: "100%",
    backgroundColor: "brown",
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 40,
  },
  image: {
    height: "85%",
    width: "100%",
  },
  textContainer: {
    padding: 10,
    backgroundColor: colors.lightColor,
  },
  priceDetail: {
    textAlign: "center",
    marginTop: 70,
    backgroundColor: colors.cardColor,
    height: 30,
    fontSize: 20,
    color: colors.lightColor,
    fontWeight: "bold",
  },
  quantityContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 20,
    width: "100%",
  },
  quantityButton: {
    justifyContent: "center",
    width: 40,
    alignItems: "center",
    height: 40,
  },
  more: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
});

export default ItemDetail;

