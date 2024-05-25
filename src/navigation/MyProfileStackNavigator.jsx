import { StyleSheet } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyProfile from "../screen/MyProfile";
import ImageSelector from "../screen/ImageSelector";
import ListAddress from "../screen/ListAddress";
import LocationSelector from "../screen/LocationSelector";
const Stack = createNativeStackNavigator();

const MyProfileStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="My profile Stack"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen component={MyProfile} name="My Profile Stack" />
      <Stack.Screen component={ImageSelector} name="Image selector" />
      <Stack.Screen component={ListAddress} name="List Address" />
      <Stack.Screen component={LocationSelector} name="Location Selector" />
    </Stack.Navigator>
  );
};

export default MyProfileStackNavigator;

const styles = StyleSheet.create({});
