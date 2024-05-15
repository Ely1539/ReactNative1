import { useState } from "react";
import { StyleSheet, View, Pressable, TextInput, Text } from "react-native";
import { Feather, MaterialIcons, Octicons } from "@expo/vector-icons";

import { colors } from "../constants/colors";
const Search = ({ onSearch = () => {}, error = "", goBack = () => {} }) => {
  const [keyword, setKeyword] = useState("");
  return (
    <View>
      <View style={styles.iconContainer}>
        <Pressable onPress={() => onSearch(keyword)}>
          <Octicons name="search" size={30} color="red" />
        </Pressable>
        <Pressable onPress={() => setKeyword("")}>
          <MaterialIcons name="phonelink-erase" size={30} color="red" />
        </Pressable>
        <Pressable onPress={goBack}>
          <Feather name="skip-back" size={30} color="red" />
        </Pressable>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Ingresa tu búsqueda aquí..."
        value={keyword}
        onChangeText={setKeyword}
      />

      {error ? <Text style={styles.errorStyle}> {error}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 30,
    width: 180,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 4,
    backgroundColor: "white",
    marginTop: 12,
    marginLeft: 1,
    marginBottom: 10,
  },

  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginLeft: 150,
    marginTop: 5,
    width: "70%",
    backgroundColor: colors.cardColor,
  },
  errorStyle: {
    backgroundColor: "tomato",
    marginTop: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    textAlign: "center",
    color: colors.lightColor,
    borderRadius: 10,
  },
});

export default Search;
