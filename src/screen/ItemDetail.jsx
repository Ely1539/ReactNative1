import React, { useEffect, useState } from "react";
import { Pressable, Image, StyleSheet, Text, View, useWindowDimensions } from "react-native";
import allProducts from "../data/products.json";
import { colors } from "../constants/colors";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

const ItemDetail = ({ route, navigation }) => {
  const [product, setProduct] = useState(null);
  const [orientation, setOrientation] = useState("portrait");
  const { width, height } = useWindowDimensions();
  const { productId: itemSelected } = route.params;

  useEffect(() => {
    if (width > height) setOrientation("landscape");
    else setOrientation("portrait");
  }, [width, height]);

  useEffect(() => {
    const productSelected = allProducts.find(product => product.id === itemSelected);
    setProduct(productSelected);
  }, [itemSelected]);

  return (
    <View>
      <Pressable onPress={() => navigation.goBack()} style={styles.button}>
        <Text style={styles.buttonText}>Ir a categorias</Text>
      </Pressable>
      {product ? (
        <View style={orientation === "portrait" ? styles.detailContainer : styles.detailContainerOtherView}>
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: product.images[0] }}
              style={orientation === "portrait" ? styles.imageOnly : styles.imageOtherView}
              resizeMode="cover"
            />
          </View>
          <View style={styles.textContainer}>
            <Text>{product.title}</Text>
            <Text>{product.description}</Text>
            <Text style={styles.priceDetail}>
              <Text>Precio:</Text> ${product.price}
            </Text>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>Agregar Al Carrito</Text>
            </Pressable>
          </View>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  detailContainer: {
    marginTop: "1%",
    height: "70%",
    width: "100%",
    textAlign: "center",
    backgroundColor: "brown",
  },
  detailContainerOtherView: {
    marginTop: "1%",
    padding: 0,
    height: "0%",
    width: "20%",
    marginLeft: 120,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 40,
  },
  imageOnly: {
    height: "85%",
    width: "100%",
  },
  imageOtherView: {
    width: "135%",
    height: 200,
    marginTop: 50,
    marginLeft: 500,
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
});

export default ItemDetail;

