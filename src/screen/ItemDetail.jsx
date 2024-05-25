import React, { useEffect, useState } from "react";
import { Pressable, Image, StyleSheet, Text, View, Modal } from "react-native";
import { colors } from "../constants/colors";
import { useSelector, useDispatch } from "react-redux";

import { useGetProductByIdQuery } from "../services/shopService";
import { addCartItem } from "../features/Cart/cart.slice";

const ItemDetail = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const [modalVisible, setModalVisible] = useState(false); 
  const { productId: itemSelected } = route.params;
  const {
    data: product,
    error,
    isLoading,
  } = useGetProductByIdQuery(itemSelected);

  const handleAddCart = () => {
    dispatch(addCartItem({ ...product, quantity }));
    setModalVisible(true); 
    setTimeout(() => {
      setModalVisible(false); 
    }, 3000);
  };

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };

  return (
    <View style={styles.container}>
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
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.description}>{product.description}</Text>
            <Text style={styles.priceDetail}>
              Precio: ${product.price * quantity}
            </Text>
            <View style={styles.quantityContainer}>
              <Pressable
                style={styles.quantityButton}
                onPress={() => handleQuantityChange(quantity - 1)}
              >
                <Text style={styles.quantityText}>-</Text>
              </Pressable>
              <Text style={styles.quantityText}>{quantity}</Text>
              <Pressable
                style={styles.quantityButton}
                onPress={() => handleQuantityChange(quantity + 1)}
              >
                <Text style={styles.quantityText}>+</Text>
              </Pressable>
            </View>
            <Pressable style={styles.button} onPress={handleAddCart}>
              <Text style={styles.buttonText}>Agregar al carrito</Text>
            </Pressable>
          </View>
        </View>
      ) : null}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Agregado correctamente al carrito
            </Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.cardScreens,
  },
  button: {
    marginTop: 10,
    height: 40,
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary,
    borderRadius: 25,
    alignSelf: "center",
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  detailContainer: {
    marginHorizontal: 20,
    borderRadius: 15,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  image: {
    width: "90%",
    height: 200,
    borderRadius: 15,
  },
  textContainer: {
    padding: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: colors.primary,
    marginBottom: 10,
    textAlign: "center",
  },
  description: {
    fontSize: 15,
    color: "#555",
    textAlign: "center",
    marginBottom: 10,
  },
  priceDetail: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.accent,
    marginBottom: 20,
    textAlign: "center",
  },
  quantityContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  quantityButton: {
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
    backgroundColor: colors.primary,
    borderRadius: 20,
    marginHorizontal: 10,
  },
  quantityText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    margin: 20,
    backgroundColor: colors.cardScreens,
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 20,
    color: colors.lightColor,
  },
});

export default ItemDetail;
