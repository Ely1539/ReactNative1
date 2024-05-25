import React, { useState, useEffect } from "react";
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
  Modal,
  Button,
  Alert,
} from "react-native";
import { colors } from "../constants/colors";
import InputForm from "../components/InputForm";
import SubmitButton from "../components/SubmitButton";
import { useSignUpMutation } from "../services/authService";
import { useDispatch } from "react-redux";
import { setUser } from "../features/User/userSlice";
import { signupSchema } from "../validations/authSchema";

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorModalVisible, setErrorModalVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const dispatch = useDispatch();
  const [triggerSignUp, result] = useSignUpMutation();

  useEffect(() => {
    if (result.isSuccess) {
      dispatch(
        setUser({
          email: result.data.email,
          idToken: result.data.idToken,
        })
      );
      Alert.alert("Éxito", "Usuario creado con éxito", [{ text: "OK" }]);
      navigation.navigate("Login");
    } else if (result.isError) {
      let errorMessage = "Error al crear el usuario";
      switch (result.error?.data?.error?.message) {
        case "EMAIL_EXISTS":
          errorMessage = "El email ya está en uso";
          break;
        case "INVALID_EMAIL":
          errorMessage = "Email inválido";
          break;
        case "WEAK_PASSWORD":
          errorMessage = "La clave es débil";
          break;
        case "CONFIRM_PASSWORD_REQUIRED":
          errorMessage = "Confirma tu clave es requerido";
          break;
        default:
          break;
      }
      setErrorMessage(errorMessage);
      setErrorModalVisible(true);
    }
  }, [result, dispatch, navigation]);

  const onSubmit = () => {
    try {
      signupSchema.validateSync({ email, password, confirmPassword });
      triggerSignUp({ email, password, returnSecureToken: true });
    } catch (err) {
      setErrorMessage(err.message);
      setErrorModalVisible(true);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ImageBackground
        source={require("../../assets/toques.webp")}
        style={styles.backgroundImage}
      >
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <View style={styles.main}>
            <Text style={styles.title}>Regístrate</Text>
            <View style={styles.formContainer}>
              <InputForm label={"Email"} onChange={setEmail} />
              <InputForm
                label={"Ingresa Tu Clave"}
                onChange={setPassword}
                isSecure={true}
              />
              <InputForm
                label={"Confirma Tu Clave"}
                onChange={setConfirmPassword}
                isSecure={true}
              />
              <SubmitButton onPress={onSubmit} title="Enviar" />
              <Text style={styles.sub}>¿Ya tienes una cuenta?</Text>
              <Pressable onPress={() => navigation.navigate("Login")}>
                <Text style={styles.subLink}>Inicia sesión</Text>
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
      <Modal
        visible={errorModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setErrorModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>{errorMessage}</Text>
            <Button
              title="OK"
              onPress={() => setErrorModalVisible(false)}
              color={colors.primary}
            />
          </View>
        </View>
      </Modal>
    </KeyboardAvoidingView>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    height: 1500,
  },
  backgroundImage: {
    height: "48%",
    width: "100%",
    marginTop: 65,
  },
  contentContainer: {},
  main: {
    justifyContent: "center",
    alignItems: "center",
  },
  formContainer: {
    width: "90%",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    borderRadius: 10,
    elevation: 2,
    shadowColor: colors.background,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    alignItems: "center",
    paddingVertical: 20,
    marginTop: 315,
  },
  title: {
    fontSize: 20,
    color: colors.cardScreens,
    marginTop: 10,
    width: "100%",
    textAlign: "center",
  },
  sub: {
    fontSize: 16,
    color: "black",
    marginTop: 20,
  },
  subLink: {
    fontSize: 16,
    color: "red",
    marginTop: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  modalText: {
    fontSize: 16,
    color: "black",
    marginBottom: 10,
  },
});
