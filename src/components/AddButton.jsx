import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";
import { colors } from "../constants/colors";

const AddButton = ({
    title = "",
    onPress = () => {},
    color = colors.lightColor,
}) => {
    return (
        <Pressable
            style={{ ...styles.button}}
            onPress={onPress}
        >
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
};

export default AddButton;

const styles = StyleSheet.create({
    button: {
        width: "40%",
        justifyContent: "center",
        alignItems: "center",
        padding: 6,
        marginTop: 30,
        borderRadius: 10,
        backgroundColor: colors.cardScreens,
        marginLeft: 150,
        borderWidth: 2, 
        borderColor: colors.lightColor, 
       
    },
    text: {
        fontFamily: "Josefin",
        fontSize: 18,
        color: colors.lightColor,
    },
});