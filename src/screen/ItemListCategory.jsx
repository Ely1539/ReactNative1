import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList, useWindowDimensions } from "react-native";
import { colors } from "../constants/colors";
import products from "../data/products.json";
import ProductItem from "../components/ProductItem";
import Search from "../components/Search";

const ItemListCategory = ({ navigation, route }) => {
  const [keyWord, setKeyword] = useState("");
  const [filterProducts, setFilterProducts] = useState([]);
  const [error, setError] = useState("");
  const { category: categorySelected } = route.params;
  const { width, height } = useWindowDimensions();
  const isPortrait = height > width;

  useEffect(() => {
    const filteredProducts = products.filter(
      (product) => product.category === categorySelected
    );
    const productFilter = filteredProducts.filter((product) =>
      product.title.toLowerCase().includes(keyWord.toLowerCase())
    );
    const regex = /\d/;
    const noDigits = regex.test(keyWord);

    if (noDigits) {
      setError("Ingresa solo letras");
    } else {
      setError("");
    }

    setFilterProducts(productFilter);
  }, [keyWord, categorySelected]);

  return (
    <View style={[styles.container, isPortrait ? styles.portraitContainer : styles.landscapeContainer]}>
      <Search
        error={error}
        onSearch={setKeyword}
        goBack={() => navigation.goBack()}
      />
      <FlatList
        data={filterProducts}
        renderItem={({ item }) => (
          <ProductItem item={item} navigation={navigation} />
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.flatListContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: colors.groundColor,

  },
  portraitContainer: {
    alignItems: "center",

    
  },
  landscapeContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "95%",
    
  },
  
  
  flatListContainer: {
    width: "100%",
    gap: 130,
  },
  
});

export default ItemListCategory;

