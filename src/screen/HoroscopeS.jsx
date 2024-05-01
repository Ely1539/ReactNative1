import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, Alert, TextInput } from 'react-native';

const Horoscope = () => {
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [attitudeNumber, setAttitudeNumber] = useState(null);

    const calculateAttitudeNumber = async () => {
        try {
            if (!day || !month) {
                Alert.alert('Error', 'Por favor ingrese el día y el mes de su nacimiento.');
                return;
            }
            const response = await fetch('https://the-numerology-api.p.rapidapi.com/attitude_number/post', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-RapidAPI-Key': '22d4712af9mshb9c6671f1dd9349p1cf740jsned5f8f3d2153',
                    'X-RapidAPI-Host': 'the-numerology-api.p.rapidapi.com'
                },
                body: JSON.stringify({
                    birth_day: parseInt(day),
                    birth_month: parseInt(month)
                })
            });
            const data = await response.json();
            setAttitudeNumber(data);
        } catch (error) {
            console.error('Error calculating attitude number:', error);
            Alert.alert('Error', 'Failed to calculate attitude number. Please try again later.');
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={setDay}
                value={day}
                keyboardType="numeric"
                placeholder="Día de nacimiento"
            />
            <TextInput
                style={styles.input}
                onChangeText={setMonth}
                value={month}
                keyboardType="numeric"
                placeholder="Mes de nacimiento"
            />
            <Button
                title="Calcular Número de Actitud"
                onPress={calculateAttitudeNumber}
            />
            {attitudeNumber && (
                <View style={styles.attitudeContainer}>
                    <Text style={styles.attitudeText}>Su número de actitud es: {attitudeNumber.attitude_number}</Text>
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
    },
    input: {
        width: '80%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    attitudeContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
    attitudeText: {
        fontSize: 16,
    },
});

export default Horoscope;


