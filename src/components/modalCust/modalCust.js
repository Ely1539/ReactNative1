import { StyleSheet, Text, View, Modal, Button } from "react-native"
import React from "react"
import { colors } from "../constants/colors"

const ModalCust = ({
  modalVisible,
  itemSelected,
  handleCancelModal,
  handleDelete,
}) => {
  return (
    <Modal visible={modalVisible} animationType="slide" transparent={true}>
      <View style={styles.modalStyles}>
        <View style={styles.modalContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.textLeyend}>Tarea Completada?</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.textModal}>{itemSelected.value}</Text>
          </View>
          <View style={styles.btnContainer}>
            <Button title="completada" color='#00000080' onPress={handleDelete} />
            <Button title="Volver a la Lista" color='#00000080' onPress={handleCancelModal} />
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default ModalCust
const styles = StyleSheet.create({
  modalStyles: {
    backgroundColor: colors.purple,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modalContainer: {
    backgroundColor: colors.greyTrans,
    width: "80%",
    alignItems: "center",
    gap: 30,
    paddingVertical: 20,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: colors.black,
  },
  btnContainer: {
    flexDirection: "row",
    gap: 20,
  },
  textModal: {
    fontSize: 25,
    fontWeight: "bold",
    color: colors.black,
  },
  textContainer: {
    color: colors.white,
    fontWeight: "bold",
  },
  textLeyend: {
    color: colors.white,
  },
})