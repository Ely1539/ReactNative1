import React, { useEffect, useState } from "react";
import {
  Pressable,
  Image,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import { colors } from "../constants/colors";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedItem } from "../features/Shop/ShopSlice"; 
import { useGetProductByIdQuery } from "../services/shopService";
import { addCartItem } from "../features/Cart/cart.slice";

const ItemDetail = ({ route, navigation }) => {
  const dispatch = useDispatch(); 
  const [quantity, setQuantity] = useState(1);
  const { productId: itemSelected } = route.params;
  const {data: product, error, isLoading}= useGetProductByIdQuery(itemSelected);

const handleAddCart = () => {
  dispatch(addCartItem({...product, quantity}));
};

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
            <Pressable style={styles.button} onPress = {() => handleAddCart()}>
              <Text style={styles.buttonText}>Agregar al carrito</Text>

            </Pressable>
          </View>
        </View>
      ) : null}
      <View style={styles.quantityContainer}>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    height: 40,
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.cardColor,
    borderRadius: 20,
    alignSelf: "center",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "red",
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

