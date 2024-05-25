import { Image, StyleSheet, View } from "react-native";
import React from "react";
import AddButton from "../components/AddButton";
import { useDispatch, useSelector } from "react-redux";
import { useGetProfileImageQuery } from "../services/shopService";
import { clearUser } from "../features/User/userSlice";
import { colors } from "../constants/colors";
import { truncateSessionsTable } from "../persistence";

const MyProfile = ({ navigation }) => {
  const dispatch = useDispatch();
  const { imageCamera, localId } = useSelector((state) => state.auth.value);
  const { data: imageFromBase } = useGetProfileImageQuery(localId);

  const launchCamera = async () => {
    navigation.navigate("Image selector");
  };
  const launchLocation = async () => {
    navigation.navigate("List Address");
  };
  const signOut = async () => {
    try {
      const response = await truncateSessionsTable();
      dispatch(clearUser());
    } catch (error) {}
  };

  const defaultImageRoute = "../../assets/defaultImage.png";

  return (
    <View style={styles.container}>
      {imageFromBase || imageCamera ? (
        <Image
          source={{ uri: imageFromBase?.image || imageCamera }}
          style={styles.image}
          resizeMode="cover"
        />
      ) : (
        <Image
          source={require(defaultImageRoute)}
          style={styles.image}
          resizeMode="cover"
        />
      )}
      <AddButton
        onPress={launchCamera}
        title={imageFromBase || imageCamera ? "Cambiar Foto " : "Agregar Foto"}
      />
      <AddButton onPress={launchLocation} title="Mi Direccion" />
      <AddButton onPress={signOut} title="Cerrar Sesion" />
    </View>
  );
};

export default MyProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    padding: 10,
    gap: 50,
    alignItems: "center",
    backgroundColor: colors.lightColor,
  },
  image: {
    width: 400,
    height: 300,
    borderRadius: 50,
  },
});
