import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, Alert, TextInput, ImageBackground, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../constants/colors';

const Horoscope = () => {
    const navigation = useNavigation();

    const [sign, setSign] = useState('');
    const [period, setPeriod] = useState('');
    const [language, setLanguage] = useState('');
    const [horoscope, setHoroscope] = useState('');

    const fetchHoroscope = async () => {
        try {
            const signLower = sign.toLowerCase();
            const periodLower = period.toLowerCase();
            const languageLower = language.toLowerCase();

            if (!signLower || !periodLower || !languageLower) {
                Alert.alert('Error', 'Por favor ingrese todos los campos.');
                return;
            }

            const url = `https://horoscopes-ai.p.rapidapi.com/get_horoscope/${signLower}/${periodLower}/general/${languageLower}`;

            const response = await fetch(url, {
                headers: {
                    'X-RapidAPI-Key': '22d4712af9mshb9c6671f1dd9349p1cf740jsned5f8f3d2153',
                    'X-RapidAPI-Host': 'horoscopes-ai.p.rapidapi.com'
                }
            });

            if (!response.ok) {
                throw new Error('Error en la solicitud a la API');
            }

            const contentType = response.headers.get('content-type');
            if (!contentType || !contentType.includes('application/json')) {
                throw new Error('La respuesta no es de tipo JSON');
            }

            const data = await response.json();
            setHoroscope(data.general[0]);
        } catch (error) {
            console.error('Error fetching horoscope:', error);
            Alert.alert('Error', 'No se pudo obtener el horóscopo. Por favor, inténtelo de nuevo más tarde.');
        }
    };

    return (
        <View style={styles.container}>
            <Pressable onPress={() => navigation.goBack()} style={styles.button}>
                <Text style={styles.buttonHoroscope}>Volver a Home</Text>
            </Pressable>
            <ImageBackground
                source={require("../../assets/toques.webp")}
                style={styles.imageHoroscope}
            ></ImageBackground>
            <TextInput
                style={styles.input}
                onChangeText={setSign}
                value={sign}
                placeholder="Signo zodiacal"
            />
            <TextInput
                style={styles.input}
                onChangeText={setPeriod}
                value={period}
                placeholder="Período (ejemplo: today, weekly, monthly)"
            />
            <TextInput
                style={styles.input}
                onChangeText={setLanguage}
                value={language}
                placeholder="Idioma (ejemplo: en, es, fr)"
            />
            <Button
                title="Obtener Horóscopo"
                onPress={fetchHoroscope}
            />

            {/* Código para mostrar el horóscopo */}
            {horoscope && (
                <View style={styles.horoscopeContainer}>
                    <Text style={styles.horoscopeText}>Horóscopo: {horoscope}</Text>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.cardScreens,
        marginTop: 10,
    },
    input: {
        width: '80%',
        height: 40,
        borderColor: 'white',
        color: colors.lightColor,
        backgroundColor: colors.lightColor,
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    
    horoscopeText: {
        fontSize: 18,
        color: colors.lightColor,
    },
    imageHoroscope: {
        flex: 0.8,
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0.9,
        height: "80%",
        width: "100%",

    },

    buttonHoroscope: {
        backgroundColor: colors.cardScreens,
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 10,
        marginRight: 250,
        marginTop: 10,
        width: 150,
        textAlign: 'center',
        fontSize: 16,
        color: colors.lightColor,
    },
});

export default Horoscope;






