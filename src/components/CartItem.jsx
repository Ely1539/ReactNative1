import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../constants/colors";
import { Entypo } from "@expo/vector-icons";

const CartItem = ({ cartItem }) => {
    return (
        <View style={styles.card} onPress={() => {}}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{cartItem.title} ({cartItem.quantity})</Text>
                <Text style={styles.text2}>{cartItem.brand}</Text>
                <Text style={styles.text2}>${cartItem.price}</Text>
            </View>
            <Entypo name="erase" size={30} color="red" />
        </View>
    );
};

export default CartItem;

const styles = StyleSheet.create({
    card: {
        height: 80,
        backgroundColor: colors.cardScreens,
        margin: 20,
        borderWidth: 2,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    textContainer: {
        width: "90%",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
    text: {
        fontFamily: "Josefin",
        fontSize: 19,
        color: colors.lightColor,
    },
    text2: {
        fontFamily: "Josefin",
        fontSize: 14,
        color: colors.lightColor,
    },
});