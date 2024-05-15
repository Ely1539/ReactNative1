import React from "react";
import { StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStackNavigator from "./HomeStackNavigator";
import { colors } from "../constants/colors";
import CartStack from "./CartStackNavigator";
import OrderStack from "./OrderStackNavigator";
import Header from "../components/Header";
import { FontAwesome5, FontAwesome6 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import CartTemp from "../screen/CartTemp";
import OrderStackNavigator from "./OrderStackNavigator";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        header: () => {
          return <Header route={route} />;
        },
        tabBarShowLabel: true,
        tabBarStyle: styles.tabBar,
      })}
    >
      <Tab.Screen
        name="Mi Tienda"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <FontAwesome6
                  name="shop"
                  size={27}
                  color={focused ? "red" : colors.lightColor}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Mi Carrito"
        component={CartStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <FontAwesome6
                  name="opencart"
                  size={28}
                  color={focused ? "red" : colors.lightColor}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Mis Ordenes"
        component={OrderStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <FontAwesome5
                  name="money-bill-alt"
                  size={35}
                  color={focused ? "red" : colors.lightColor}
                />
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.cardScreens,

    height: 48,
   
  },
});
