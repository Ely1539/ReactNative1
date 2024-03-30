import { StyleSheet, TextInput, Button, View } from "react-native"
import React from "react"
import { colors } from "../constants/colors"

const taskInput = ({textItem, addItem, handleChangeText}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        onChangeText={handleChangeText}
        value={textItem}
        placeholder={"Añade tarea por hacer..."}
      />
      <Button title="Añadir" color='#00000080' onPress={addItem} />
    </View>
  )
}

export default taskInput

const styles = StyleSheet.create({
    inputContainer: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
        gap: 10,
        backgroundColor: colors.transBlack,
    },
    input: {
        borderBottomWidth: 1,
        width: 300,
        fontSize: 12,
        height: 45,
        marginTop:40,
    },
})