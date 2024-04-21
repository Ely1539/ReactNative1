import React from 'react';
import { StyleSheet, Image,Text } from 'react-native';
import Card from './Card';
import { colors } from '../constants/colors';

const ProductItem = ({item}) => {
    return (
        <Card style={styles.cardDetailStyle}>
<Text style={styles.textCategory}>{item.title}</Text>
<Image
    resizeMode='cover'
    style ={styles.image}
    source={{uri:item.images[0]}}
/>
        </Card>
    );
}

const styles = StyleSheet.create({

    image: {
      marginBottom: 50,
        width: "100%",
        height: 200,
        marginTop: 1,
        shadowColor: colors.lightColor,
        shadowOffset:{
          width: 10,
          height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

      },
    
      textCategory: {
        color: colors.lightColor,
        textAlign:"right",
        height: "70%",
        width: "90%",
      fontFamily: 'Josefine',
      
      },
  
      cardDetailStyle: {

        backgroundColor: colors.cardColor,
        width: "100%",
        height: "22%",
        shadowColor: colors.cardColor,
        shadowOffset:{
          width: 10,
          height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
      }
    })

export default ProductItem;
