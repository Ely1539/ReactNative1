import React from 'react';
import { StyleSheet, Image,Text, Pressable } from 'react-native';
import Card from './Card';
import { colors } from '../constants/colors';
import { View } from 'react-native-web';

const ProductItem = ({
  item,
  setProductSelected = () => {},
  setItemIdSelected = () => {},

}) => {
   
    return (
  
        <Card style={styles.cardDetailStyle}>
         <Pressable style={styles.Pressable} onPress={() => 
          setItemIdSelected(item.id)}>
<Text style={styles.textCategory}>{item.title}</Text>
<Image
    resizeMode='cover'
    style ={styles.image}
    source={{uri:item.images[0]}}
/>
         </Pressable>
        </Card>
    );
}

const styles = StyleSheet.create({

    image: {
      marginBottom: 10,
        width: "100%",
        height: 200,
        marginTop: 1,
        shadowColor: colors.lightColor,
        borderColor: colors.lightColor,
        borderWidth: 1,
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
        height: "18%",
        width: "93%",
      fontFamily: 'Josefine',
      marginTop: 1,
      left: 20,
      fontSize: 18,
      gap: 15,
     
    
      },
  
      cardDetailStyle: {

        backgroundColor: colors.cardColor,
        width: "100%",
        height: "22%",
      }
    })

export default ProductItem;
