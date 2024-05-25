import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  ScrollView,
} from "react-native";

const OrderDetailScreen = ({ route }) => {
  const { order } = route.params;

  return (
    <ImageBackground
      source={require("../../assets/toques.webp")}
      style={styles.background}
    >
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.heading}>Detalles de la Orden</Text>
          {order.items.map((item, index) => (
            <View key={index} style={styles.itemContainer}>
              <Image source={{ uri: item.images[0] }} style={styles.image} />
              <View style={styles.textContainer}>
                <Text style={styles.text}>{item.description}</Text>
                <Text style={styles.text}>Cantidad: {item.quantity}</Text>
                <Text style={styles.text}>Precio: ${item.price}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  itemContainer: {
    flexDirection: "row",
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: "rgba(255, 255, 255, 0.0)",
    padding: 10,
    borderWidth: 1,
    borderColor: "#000",
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#000",
  },
  textContainer: {
    flex: 1,
    marginTop: 40,
  },
  text: {
    fontSize: 25,
    marginBottom: 30,
  },
});

export default OrderDetailScreen;
