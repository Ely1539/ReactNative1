import React, { useState, useEffect } from 'react';
import { ImageBackground, Pressable, StyleSheet, Text, View, Platform } from 'react-native';
import { colors } from '../constants/colors';
import InputForm from '../components/InputForm';
import SubmitButton from '../components/SubmitButton';
import { useSignInMutation } from '../services/authService';
import { setUser } from '../features/User/userSlice';
import { useDispatch } from 'react-redux';
import { insertSession } from '../persistence';

const LoginScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const [triggerSignIn, result] = useSignInMutation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        if (result?.data && result.isSuccess) {
            (async () => {
                try {
                    if (Platform.OS !== 'web') {
                        await insertSession({
                            email: result.data.email,
                            localId: result.data.localId,
                            token: result.data.idToken,
                        });
                    }
                    dispatch(
                        setUser({
                            email: result.data.email,
                            idToken: result.data.idToken,
                            localId: result.data.localId,
                        })
                    );
                } catch (error) {
                    console.log(error);
                }
            })();
        }
    }, [result]);

    const onSubmit = () => {
        triggerSignIn({ email, password });
    };

    return (
       
        <ImageBackground source={require('../../assets/toques.webp')} style={styles.loginImg}>
            <View style={styles.main}>
                <View style={styles.container}>
                    <Text style={styles.title}>Inicio Sesion</Text>
                    <InputForm label={'Email'} onChange={setEmail} error={''} />
                    <InputForm label={'Password'} onChange={setPassword} error={''} isSecure={true} />
                    <SubmitButton onPress={onSubmit} title="Enviar" />
                    <Text style={styles.sub}>No Tienes Cuenta?</Text>
                    <Pressable onPress={() => navigation.navigate('Signup')}>
                        <Text style={styles.subLink}>Registrate</Text>
                    </Pressable>
                </View>
            </View>
        </ImageBackground>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
    },
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
        color: "red",
        marginTop: 20,
    },
    loginImg: {
     height: '60%',
     width: '100%',
     marginTop: 120
    },
});
