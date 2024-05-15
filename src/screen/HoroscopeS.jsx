import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, Alert, ImageBackground, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../constants/colors';
import { Picker } from "@react-native-picker/picker";


const Horoscope = () => {
    const navigation = useNavigation();

    const [selectedSign, setSelectedSign] = useState('');
    const [horoscope, setHoroscope] = useState('');

    const fetchHoroscope = async () => {
        try {
            if (!selectedSign) {
                Alert.alert('Error', 'Por favor seleccione un signo zodiacal.');
                return;
            }

            const url = `https://best-daily-astrology-and-horoscope-api.p.rapidapi.com/api/Detailed-Horoscope/?zodiacSign=${selectedSign}`;
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '22d4712af9mshb9c6671f1dd9349p1cf740jsned5f8f3d2153',
                    'X-RapidAPI-Host': 'best-daily-astrology-and-horoscope-api.p.rapidapi.com'
                }
            };

            const response = await fetch(url, options);
            const data = await response.json();
            console.log('Respuesta de la API:', data);
            setHoroscope(data.prediction); 
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
            <Picker
                selectedValue={selectedSign}
                onValueChange={(itemValue ) =>
                    setSelectedSign(itemValue)
                }
                style={styles.input}
            >
                <Picker.Item label="Seleccione un signo zodiacal" value="" />
                <Picker.Item label="Aries" value="aries" />
                <Picker.Item label="Tauro" value="taurus" />
                <Picker.Item label="Geminis" value="gemini" />
                <Picker.Item label="Cancer" value="cancer" />
                <Picker.Item label="Leo" value="leo" />
                <Picker.Item label="Virgo" value="virgo" />
                <Picker.Item label="Libra" value="libra" />
                <Picker.Item label="sagitario" value="sagittarius" />
                <Picker.Item label="Capriconio" value="capricorn" />
                <Picker.Item label="Acuario" value="aquarius" />
                <Picker.Item label="Piscis" value="pisces" />
              
            </Picker>
            <Button
                title="Obtener Horóscopo"
                onPress={fetchHoroscope}
            />

            {horoscope !== '' && (
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
        borderColor: colors.lightColor,
        color: colors.cardColor,
        backgroundColor: colors.lightColor,
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    
    horoscopeText: {
        fontSize: 14, 
        color: colors.lightColor,
        fontStyle: 'italic', 
        textAlign: 'center', 
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


