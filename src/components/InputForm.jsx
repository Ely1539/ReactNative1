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
    height: 80,

  },
  label: {
    fontSize: 16,
    color: colors.cardScreens,
    marginBottom: 0,
    height: 20,
    
    
  },
  input: {
    width: '100%',
    height: 40,
    padding: 2,
    borderWidth: 1,
    borderColor: colors.cardScreens,
    borderRadius: 5,
    backgroundColor: colors.cardScreens,
    color: colors.lightColor,
  },
  error: {
   
    fontSize: 14,
    color: colors.lightColor,
    
  },
});

export default InputForm;
