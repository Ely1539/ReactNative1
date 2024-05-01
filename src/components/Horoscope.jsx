import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, Alert, TextInput, Image } from 'react-native';

const Horoscope = () => {
    const [pokemonName, setPokemonName] = useState('');
    const [pokemonData, setPokemonData] = useState(null);

    const getPokemonData = async () => {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
            const data = await response.json();
            setPokemonData(data);
        } catch (error) {
            console.error('Error fetching Pokémon data:', error);
            Alert.alert('Error', 'Failed to fetch Pokémon data. Please try again later.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Nombre del Pokémon:</Text>
            <TextInput
                style={styles.input}
                onChangeText={text => setPokemonName(text)}
                value={pokemonName}
                placeholder="Ingrese el nombre del Pokémon"
            />
            <Button
                title="Obtener Información del Pokémon"
                onPress={getPokemonData}
            />
            {pokemonData && (
                <View style={styles.pokemonInfoContainer}>
                    <Text style={styles.pokemonName}>{pokemonData.name}</Text>
                    <Text>Type: {pokemonData.types.map(type => type.type.name).join(', ')}</Text>
                    <Text>Abilities: {pokemonData.abilities.map(ability => ability.ability.name).join(', ')}</Text>
                    <Image source={{ uri: pokemonData.sprites.front_default }} style={styles.pokemonImage} />
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
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    input: {
        width: '80%',
        height: 40,
        borderColor: 'grey',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    pokemonInfoContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
    pokemonName: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    pokemonImage: {
        width: 100,
        height: 100,
        marginBottom: 10,
    },
});

export default Horoscope;
