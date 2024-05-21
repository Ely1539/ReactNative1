import React, { useState, useEffect } from 'react';
import { ImageBackground, Pressable, StyleSheet, Text, View, Platform } from 'react-native';
import { colors } from '../constants/colors';
import InputForm from '../components/InputForm';
import SubmitButton from '../components/SubmitButton';
import { useSignUpMutation } from '../services/authService';
import { useDispatch } from 'react-redux';
import { setUser } from '../features/User/userSlice';
import { signupSchema } from '../validations/authSchema';

const SignupScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [errorMail, setErrorMail] = useState('');
    const [password, setPassword] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorConfirmPassword, setErrorConfirmPassword] = useState('');

    const dispatch = useDispatch();

    const [triggerSignUp, result] = useSignUpMutation();

    useEffect(() => {
        if (result.isSuccess) {
            dispatch(
                setUser({
                    email: result.data.email,
                    idToken: result.data.idToken
                })
            );
        }
    }, [result]);

    const onSubmit = () => {
        try {
            setErrorMail('');
            setErrorPassword('');
            setErrorConfirmPassword('');
            const validation = signupSchema.validateSync({ email, password, confirmPassword });
            triggerSignUp({ email, password, returnSecureToken: true });
        } catch (err) {
            switch (err.path) {
                case 'email':
                    setErrorMail(err.message);
                    break;
                case 'password':
                    setErrorPassword(err.message);
                    break;
                case 'confirmPassword':
                    setErrorConfirmPassword(err.message);
                    break;
                default:
                    break;
            }
        }
    };

    return (
        <ImageBackground source={require('../../assets/toques.webp')} style={styles.loginImg}>
            <View style={styles.main}>
                <View style={styles.container}>
                    <Text style={styles.title}>Registrate</Text>
                    <InputForm label={'Email'} onChange={setEmail} error={errorMail} />
                    <InputForm label={'Password'} onChange={setPassword} error={errorPassword} isSecure={true} />
                    <InputForm label={'Confirm Password'} onChange={setConfirmPassword} error={errorConfirmPassword} isSecure={true} />
                    <SubmitButton onPress={onSubmit} title="Enviar" />
                    <Text style={styles.sub}>Ya tienes cuenta?</Text>
                    <Pressable onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.subLink}>Inicio de Sesion</Text>
                    </Pressable>
                </View>
            </View>
        </ImageBackground>
    );
};

export default SignupScreen;

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
    container: {
        width: '80%',
        marginTop: 550,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: 10,
        elevation: 2,
        shadowColor: colors.background,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        color: colors.cardScreens,
        marginBottom: 4,
        width: '100%',
    },
    sub: {
        fontSize: 16,
        color: 'black',
        marginTop: 20,
    },
    subLink: {
        fontSize: 16,
        color: 'red',
        marginTop: 20,
    },
    loginImg: {
        height: '60%',
        width: '100%',
        marginTop: 120
    },
});
