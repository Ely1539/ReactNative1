// components/InputForm.jsx
import React from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';
import { colors } from '../constants/colors';


const InputForm = ({ label, onChange, error, isSecure }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChange}
        secureTextEntry={isSecure}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: colors.cardScreens,
    marginBottom: 5,
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: colors.cardScreens,
    borderRadius: 5,
    backgroundColor: colors.cardScreens,
    color: colors.lightColor,
  },
  error: {
    marginTop: 5,
    fontSize: 14,
    color: colors.li,
    
  },
});

export default InputForm;
