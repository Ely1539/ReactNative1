import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList, useWindowDimensions } from "react-native";
import { colors } from "../constants/colors";
import allProducts from "../data/products.json";
import ProductItem from "../components/ProductItem";
import Search from "../components/Search";

const ItemListCategory = ({ navigation, route }) => {
  const [keyword, setKeyword] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [error, setError] = useState("");
  const { category: categorySelected } = route.params;
  const { width, height } = useWindowDimensions();
  const isPortrait = height > width;

  useEffect(() => {
    const regex = /\d/;
    const noDigits = regex.test(keyword);

    if (noDigits) {
      setError("Ingresa solo letras");
      return;
    } else {
      setError("");
    }

    const filtered = allProducts.filter(
      (product) =>
        product.category === categorySelected &&
        product.title.toLowerCase().includes(keyword.toLowerCase())
    );

    setFilteredProducts(filtered);
  }, [keyword, categorySelected]);

  return (
    <View style={[styles.container, isPortrait ? styles.portraitContainer : styles.landscapeContainer]}>
      <Search
        error={error}
        onSearch={setKeyword}
        goBack={() => navigation.goBack()}
      />
      <FlatList
        data={filteredProducts}
        renderItem={({ item }) => (
          <ProductItem key={item.id} item={item} navigation={navigation} />
        )}
        contentContainerStyle={styles.flatListContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 1,
    height: 550,
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  portraitContainer: {
    alignItems: "center",
  },
  landscapeContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "95%",
    backgroundColor: "red",
  },
  flatListContainer: {
    width: "100%",
    height: 1700,
    gap: 140,
  },
});

export default ItemListCategory;


