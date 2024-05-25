import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Pressable,
  Modal,
  TouchableOpacity,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { colors } from "../constants/colors";
import { usePostOrderMutation } from "../services/shopService";
import CartItem from "../components/CartItem";
import { removeCartItem } from "../features/Cart/cart.slice";

const Cart = ({ navigation }) => {
  const { items: CartData, total } = useSelector((state) => state.cart.value);
  const [triggerPostOrder] = usePostOrderMutation();
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [emptyCartModalVisible, setEmptyCartModalVisible] = useState(false);
  const { localId } = useSelector((state) => state.auth.value);

  const onConfirmOrder = () => {
    if (CartData.length === 0) {
      setEmptyCartModalVisible(true);
      return;
    }

    triggerPostOrder({ items: CartData, user: localId, total });

    CartData.forEach((cartItem) => {
      dispatch(removeCartItem(cartItem));
    });

    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    navigation.navigate("Home");
  };

  const closeEmptyCartModal = () => {
    setEmptyCartModalVisible(false);
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={CartData}
        keyExtractor={(cart) => cart.id}
        renderItem={({ item }) => <CartItem cartItem={item} />}
        contentContainerStyle={styles.flatListContent}
      />
      <View style={styles.totalContainer}>
        <Pressable onPress={onConfirmOrder} style={styles.confirmButton}>
          <Text style={styles.confirmButtonText}>Confirmar Compra</Text>
        </Pressable>
        <Text style={styles.totalText}>Total: ${total}</Text>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>¡Compra Exitosa!</Text>
            <Text style={styles.modalText}>Verifica Mis Órdenes</Text>
            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
              <Text style={styles.closeButtonText}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={emptyCartModalVisible}
        onRequestClose={() => setEmptyCartModalVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>El carrito está vacío</Text>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={closeEmptyCartModal}
            >
              <Text style={styles.closeButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
    paddingVertical: 10,
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
    borderColor: colors.lightColor,
    borderWidth: 1,
  },
  confirmButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  totalText: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.lightColor,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    backgroundColor: "white",
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
    fontWeight: "bold",
  },
  closeButton: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  closeButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Cart;
