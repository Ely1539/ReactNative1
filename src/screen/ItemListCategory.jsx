import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList, Text, useWindowDimensions } from "react-native";
import { useGetProductsByCategoryQuery } from "../services/shopService";
import ProductItem from "../components/ProductItem";
import Search from "../components/Search";
import { colors } from "../constants/colors";

const ItemListCategory = ({ navigation, route }) => {
  const [keyword, setKeyword] = useState("");
  const { category: categorySelected } = route.params;
  const { width, height } = useWindowDimensions();
  const isPortrait = height > width;
  const { data: productFetched, isLoading, isError } = useGetProductsByCategoryQuery(categorySelected);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (!isLoading) {
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
          <Text style={styles.errorText}>No hay productos que coincidan con: "{keyword}"</Text>
        </View>
      ) : (
        <FlatList
          data={filteredProducts}
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
    backgroundColor: colors.cardScreens,
  },
  portraitContainer: {
    paddingHorizontal: 10,
  },
  landscapeContainer: {
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  flatListContainer: {
    paddingVertical: 10,
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

  },
  errorText: {
    fontSize: 16,
    color: colors.lightColor,
    textAlign: "center",
  },
});

export default ItemListCategory;

