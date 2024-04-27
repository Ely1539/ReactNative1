import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet } from "react-native";
import Home from "../../screen/Home";
import ItemDetail from "../../screen/ItemDetail";
import ItemListCategory from "../../screen/ItemListCategory";
import Header from "../Header";
const Stack = createNativeStackNavigator();
const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          header: () => {
            return (
              <Header
                title={
                  route.name === "Home"
                    ? "Categories"
                    : route.name === "ItemListCategory"
                    ? route.params.category
                    : "Detalle del producto"
                }
              />
            );
          },
        })}
      >
        <Stack.Screen component={Home} name="Home" />
        <Stack.Screen component={ItemListCategory} name="ItemListCategory" />
        <Stack.Screen component={ItemDetail} name="ItemDetail" />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default Navigator;
