import React, { useState } from "react";
import { Image, View, StyleSheet, Text, ImageBackground } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useDispatch, useSelector } from "react-redux";
import { setCameraImage } from "../features/User/userSlice";
import AddButton from "../components/AddButton";
import { colors } from "../constants/colors";
import { usePostProfileImageMutation } from "../services/shopService";

const ImageSelector = ({ navigation }) => {
    const [image, setImage] = useState(null);

    const [triggerPostImage, result] = usePostProfileImageMutation();
    const { localId } = useSelector((state) => state.auth.value);
    const dispatch = useDispatch();
  

    const verifyCameraPermissions = async () => {
        const { granted } = await ImagePicker.requestCameraPermissionsAsync();
        return granted;
    };

    const pickImage = async () => {
        try {
            const permissionCamera = await verifyCameraPermissions();
            if (permissionCamera) {
                let result = await ImagePicker.launchCameraAsync({
                    mediaTypes: ImagePicker.MediaTypeOptions.All,
                    allowsEditing: true,
                    aspect: [1, 1],
                    base64: true,
                    quality: 0.2,
                });
                if (!result.cancelled) {
                    const image = `data:image/jpeg;base64,${result.assets[0].base64}`;
                    setImage(image);
                }
            }
        } catch (error) {
       
        }
    };

    const confirmImage = async () => {
        try {
            dispatch(setCameraImage(image));
            triggerPostImage({ image, localId });
            navigation.goBack();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require("../../assets/toques.webp")}
                style={styles.backgroundSelector}
            >
                {image ? (
                    <View style={styles.imageContainer}>
                        <Image source={{ uri: image }} style={styles.image} />
                        <AddButton title="Tomar Otra Foto" onPress={pickImage} />
                        <AddButton title="Confirmar Foto" onPress={confirmImage} />
                    </View>
                ) : (
                    <View style={styles.noPhotoContainer}>
                        <Text style={styles.noPhotoText}>Sin Foto</Text>
                        <AddButton title="Añadir una Foto" onPress={pickImage} />
                    </View>
                )}
            </ImageBackground>
        </View>
    );
};
export default ImageSelector;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.cardScreens,
    },
    backgroundImage: {
        flex: 1,
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.lightColor,
     
    },
    imageContainer: {
        alignItems: "center",
     
      
    },
    image: {
        width: 350,
        height: 250,
      
        borderRadius: 10,
        marginTop: 550,
       
      
    },
    noPhotoContainer: {
        alignItems: "center",
     
    },
    noPhotoText: {
        fontSize: 18,
        marginBottom: 40,
        marginTop: 300,
        color: colors.lightColor,
    },
    backgroundSelector: {
     marginBottom: 300,
        width: "100%",
        height: "60%",
        justifyContent: "center",
        alignItems: "center",
    },
});
