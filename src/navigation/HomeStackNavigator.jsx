import React from "react";
import { StyleSheet, View } from "react-native";
import Home from "../screen/Home";
import ItemListCategory from "../screen/ItemListCategory";
import ItemDetail from "../screen/ItemDetail";
import HoroscopeS from "../screen/HoroscopeS";
import OrderDetailScreen from "../screen/OrderDetailScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen component={Home} name="Home" />
      <Stack.Screen component={ItemListCategory} name="ItemListCategory" />
      <Stack.Screen component={ItemDetail} name="ItemDetail" />
      <Stack.Screen component={HoroscopeS} name="HoroscopeS" />
      <Stack.Screen component={OrderDetailScreen} name="OrderDetailScreen" />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});

export default HomeStackNavigator;
