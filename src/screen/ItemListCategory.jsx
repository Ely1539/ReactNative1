import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList, Text, useWindowDimensions } from "react-native";
import { useGetProductsByCategoryQuery } from "../services/shopService";
import ProductItem from "../components/ProductItem";
import Search from "../components/Search";
import { colors } from '../constants/colors';

const ItemListCategory = ({ navigation, route }) => {
  const [keyword, setKeyword] = useState("");
  const { category: categorySelected } = route.params;
  const { width, height } = useWindowDimensions();
  const isPortrait = height > width;
  const { data: productFetched, isLoading, isError } = useGetProductsByCategoryQuery(categorySelected);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (productFetched) {
      const filtered = productFetched.filter(
        (product) =>
          product.title.toLowerCase().includes(keyword.toLowerCase()) &&
          product.category === categorySelected
      );
      setFilteredProducts(filtered);
    }
  }, [keyword, productFetched, categorySelected, isLoading, isError]);

  const handleSearch = (value) => {
    setKeyword(value);
  };

  return (
    <View style={[styles.container, isPortrait ? styles.portraitContainer : styles.landscapeContainer]}>
      <Search
        onSearch={handleSearch}
        goBack={() => navigation.goBack()}
        onChangeText={handleSearch} 
      />
      {filteredProducts.length === 0 && keyword ? (
        <View style={styles.errorContainer}>
          <Text>No hay productos que coincidan con: "{keyword}"</Text>
        </View>
      ) : (
        <FlatList
          data={productFetched}
          renderItem={({ item }) => (
            <ProductItem key={item.id} item={item} navigation={navigation} />
          )}
          contentContainerStyle={styles.flatListContainer}
        />
      )}
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
    backgroundColor: "#f0f0f0",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: colors.lightColor
  },
});

export default ItemListCategory;
