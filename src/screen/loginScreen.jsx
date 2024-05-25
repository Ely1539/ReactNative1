import React, { useState, useEffect } from "react";
import { ImageBackground, Pressable, StyleSheet, Text, View, Platform, KeyboardAvoidingView, ScrollView, Modal, Button } from "react-native";
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
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorModalVisible, setErrorModalVisible] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        if (result.isSuccess) {
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
            .catch((err) => {
                setErrorMessage('Error al guardar la sesión');
                setErrorModalVisible(true);
                console.log(err);
            });
        } else if (result.isError) {
            let errorMessage = 'Error al iniciar sesión';
            switch (result.error?.data?.error?.message) {
                case 'EMAIL_NOT_FOUND':
                    errorMessage = 'Email no encontrado';
                    break;
                case 'INVALID_EMAIL':
                    errorMessage = 'Email inválido';
                    break;
                case 'INVALID_PASSWORD':
                    errorMessage = 'Clave inválida';
                    break;
               
                default:
                    break;
            }
            setErrorMessage(errorMessage);
            setErrorModalVisible(true);
        }
    }, [result, dispatch]);

    const onSubmit = () => {
        triggerSignIn({ email, password });
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.keyboardAvoidingView}
        >
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <ImageBackground source={require('../../assets/toques.webp')} style={styles.loginImg}>
                    <View style={styles.main}>
                        <Text style={styles.title}>Iniciar Sesion</Text>
                        <View style={styles.container}>
                            <InputForm label={"Email"} onChange={setEmail} error={""} />
                            <InputForm
                                label={"Clave"}
                                onChange={setPassword}
                                error={""}
                                isSecure={true}
                            />
                            <SubmitButton onPress={onSubmit} title="Enviar" />
                            <Text style={styles.sub}>No tienes cuenta?</Text>
                            <Pressable onPress={() => navigation.navigate("Signup")}>
                                <Text style={styles.subLink}>Registrate</Text>
                            </Pressable>
                        </View>
                    </View>
                </ImageBackground>
            </ScrollView>
            <Modal
                visible={errorModalVisible}
                animationType="slide"
                transparent={true}
                onRequestClose={() => setErrorModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalText}>{errorMessage}</Text>
                        <Button title="OK" onPress={() => setErrorModalVisible(false)} color={colors.primary} />
                    </View>
                </View>
            </Modal>
        </KeyboardAvoidingView>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    keyboardAvoidingView: {
        flex: 1,
    },
    scrollViewContent: {
        flexGrow: 1,
        justifyContent: "center",
    },
    main: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
    },
    container: {
        width: "70%",
        marginTop: 310,
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        borderRadius: 10,
        elevation: 2,
        shadowColor: colors.background,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        alignItems: "center",
    },
    title: {
        fontSize: 20,
        color: colors.cardScreens,
        marginTop: 1,
        width: "100%",
        marginLeft: 50,
    },
    sub: {
        fontSize: 16,
        color: "black",
        marginTop: 4,
    },
    subLink: {
        fontSize: 16,
        color: "red",
        marginTop: 4,
    },
    loginImg: {
        height: "60%",
        width: "100%",
        marginTop: 1,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        elevation: 5,
    },
    modalText: {
        fontSize: 18,
        marginBottom: 20,
    },
});
