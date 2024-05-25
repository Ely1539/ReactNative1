import {
  Pressable,
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from "react-native";
import React, { useState, useEffect } from "react";
import { colors } from "../constants/colors";
import InputForm from "../components/InputForm";
import SubmitButton from "../components/SubmitButton";
import { useSignInMutation } from "../services/authService";
import { setUser } from "../features/User/userSlice";
import { useDispatch } from "react-redux";
import { insertSession } from "../persistence";

const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [triggerSignIn, result] = useSignInMutation();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  useEffect(() => {
    if (result?.data && result.isSuccess) {
      insertSession({
        email: result.data.email,
        localId: result.data.localId,
        token: result.data.idToken,
      })
        .then((response) => {
          dispatch(
            setUser({
              email: result.data.email,
              idToken: result.data.idToken,
              localId: result.data.localId,
            })
          );
        })
        .catch((err) => {});
    }
  }, [result]);

  const onSubmit = () => {
    triggerSignIn({ email, password });
  };

  return (
    <ImageBackground
      source={require("../../assets/toques.webp")}
      style={styles.backgroundImage}
    >
      <View style={styles.main}>
        <View style={styles.container}>
          <Text style={styles.title}>Inicio De Sesion</Text>
          <InputForm label={"email"} onChange={setEmail} error={""} />
          <InputForm
            label={"clave"}
            onChange={setPassword}
            error={""}
            isSecure={true}
          />
          <SubmitButton onPress={onSubmit} title="Enviar" />
          <Text style={styles.sub}>¿ No Tienes Cuenta ?</Text>
          <Pressable onPress={() => navigation.navigate("Signup")}>
            <Text style={styles.subLink}>Registrate</Text>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  backgroundImage: {
    height: "70%",
    marginTop: 50,
  },
  main: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 300,
  },
  container: {
    width: "90%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.platinum,
    gap: 15,
    paddingVertical: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 22,
    fontFamily: "Josefin",
  },
  sub: {
    fontSize: 14,
    color: "black",
  },
  subLink: {
    fontSize: 14,
    color: "blue",
  },
});
