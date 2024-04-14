import { StyleSheet, View } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors'

const Card = ({children, style}) => {
  return (
    <View style={{...styles.containerCard, ...style}}>
        {children}
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    containerCard: {
        backgroundColor:colors.cardColor,
        width: 360,
        height: 40,
        shadowColor: colors.lightColor,
        shadowOpacity: 0.7,
        shadowRadius: 2.65,
        elevation: 8,
        marginBottom: 20,
        marginTop: 2,
    }
})