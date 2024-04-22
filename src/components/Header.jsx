import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors'

const Header = ({title}) => {
  const {height, width} = useWindowDimensions()

  return (
    <View style = {styles.headerContainer}>
      <Text style = {width>=360 ? styles.headerTextResp : styles.headerText}>{title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 10,
    width: '100%',
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: colors.cardColor,
    shadowOffset:{
      width: 10,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    backgroundColor: colors.cardColor,
  },
  headerText: {
    color: colors.lightColor,
    width: "100%",
    fontFamily: 'Josefine',
    textAlign: 'center',
    fontSize: 15,
    
  },
  headerTextResp: {
    fontSize: 10,
    backgroundColor: colors.cardColor,
    color: colors.lightColor,
    width: "100%",
    textAlign: 'center', 
  },
})