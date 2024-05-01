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
    const productSelected = allProducts.find(
      (product) => product.id === itemSelected
    );
    setProduct(productSelected);
  }, [itemSelected]);

  return (
    <View>
      <Pressable onPress={() => navigation.goBack()} style={styles.button}>
        <Text style={styles.buttonText}>Ir a categorias</Text>
      </Pressable>
      {product ? (
        <View
          style={
            orientation === "portrait"
              ? styles.detailContainer
              : styles.detailContainerOtherView
          }
        >
          <View style={styles.imageContainer1}>
            <Image
              source={{ uri: product.images[0] }}
              style={
                orientation === "portrait"
                  ? styles.imageOnly
                  : styles.imageOtherView
              }
              resizeMode="cover"
            />
          </View>
          <View
            style={
              orientation === "portrait"
                ? styles.textContainer1
                : styles.textDetailOtherView
            }
          >
            <View style={styles.textContainer1}>
              <Text>{product.title}</Text>
              <Text>{product.description}</Text>
              <Text style={styles.priceDetail}>
                {" "}
                <Text>Precio</Text> ${product.price}
              </Text>
            </View>
            <View style={styles.buttonContainer}>
              <Pressable style={styles.button}>
                <Text style={styles.buttonText}>Agregar Al Carrito</Text>
              </Pressable>
            </View>
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
  
  },
  detailContainerOtherView: {
  marginTop: "1%",
    padding: 0,
    height: "0%",
    width: "20%",
marginLeft: 120,
 
  },
  imageOnly: {
    height: "85%",
    width: "100%",
    marginBottom: 20,
    marginTop: 40,
  },
  imageOtherView: {
    width: "135%",
    height: 200,
    marginTop: 50,
    marginLeft:500
   
  },
  textDetailOtherView: {
    width: "240%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "start",
    height: 260,
    marginTop: 30,
 
  },
  priceDetail: {
    textAlign: "center",
    width: "100%",
    backgroundColor: "red",
    height: 30,
    fontSize: 20,
    color: colors.lightColor,
    fontWeight: "bold",
  },
  textContainer1: {
    height: 100,
    width: "100%",
    gap: 5,
    backgroundColor: colors.lightColor,
  },
  buttonContainer: {
    marginTop: 20,
    height: 30,
    width: "40%",
    justifyContent: "center",
    marginLeft: 10,
  },
  button: {
    height: "10%",
    width: "100%",
    top: "5%",
  },
  buttonText: {
    fontSize: 18,
    borderRadius: 40,
    fontWeight: "bold",
    height: 40,

    width: "100%",
    textAlign: "center",
    color: colors.lightColor,
    backgroundColor: colors.cardColor,
  },
});

export default ItemDetail;
