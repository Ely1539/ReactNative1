import { Image, StyleSheet, View } from "react-native";
import React from "react";
import AddButton from "../components/AddButton";
import { useDispatch, useSelector } from "react-redux";
import { useGetProfileImageQuery } from "../services/shopService";
import { clearUser } from "../features/User/userSlice";
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

  const defaultImageRoute = "../../assets/toques.webp";

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
        title={
          imageFromBase || imageCamera
            ? "Modify profile picture"
            : "Add profile picture"
        }
      />
      <AddButton onPress={launchLocation} title="Mi Direccion" />
      <AddButton onPress={signOut} title="Cerrar Sesion" />
    </View>
  );
};

export default MyProfile;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    gap: 15,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  image: {
    width: 350,
    height: 290,
    borderRadius: 50,
  },
});
