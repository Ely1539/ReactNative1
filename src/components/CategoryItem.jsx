import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors';
import Card from './Card';

const CategoryItem = ({category}) => {
  return (
    <Card style={{borderRadius:15,}}>
      <Text style = {styles.text}>{category}</Text>
    </Card>
  )
}

export default CategoryItem

const styles = StyleSheet.create({
    categoryContainer: {
        shadowColor: colors.cardColor,
        shadowOffset:{
          width: 20,
          height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },
    text: {
        color: colors.lightColor,
        textAlign: 'center',
        fontSize: 18
    }
})