import { Pressable, StyleSheet, Text, View, ImageBackground } from "react-native";
import { FontAwesome6 } from '@expo/vector-icons';
import React from "react";
import { colors } from "../constants/colors";

const AddressItem = ({ location, navigation }) => {

    const onChangeLocation = () => {
        navigation.navigate('Location Selector')
    }

    return (
        <ImageBackground
            source={require('../../assets/toques.webp')}
            style={styles.backgroundImage}
        >
            <View style={styles.card}>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {location.address}
                    </Text>
                </View>
                <Pressable onPress={onChangeLocation}>
                    <FontAwesome6 name="map-location-dot" size={34} color="red" />
                    <Text style={styles.text2}>Change</Text>
                </Pressable>
            </View>
        </ImageBackground>
    );
};

export default AddressItem;

const styles = StyleSheet.create({
    backgroundImage: {
     height: "65%",
     width: "100%",
     marginTop: 100,
        justifyContent: "center",
        alignItems: "center",
    },
    card: {
        height: 150,
        width: "90%",
        padding: 10,
        marginTop: 320,
        borderWidth: 2,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: colors.lightColor,
    },
    textContainer: {
        width: "70%",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
    text: {
        fontFamily: "Josefin",
        fontSize: 17,
        color: colors.backgroundColor,
        
    },
    text2: {
        fontFamily: "Josefin",
        fontSize: 19,
        color: colors.backgroundColor,
        marginTop: 25
    },
});
