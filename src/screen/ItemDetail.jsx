import React, { useEffect, useState } from 'react';
import { Pressable, Image, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import allProducts from '../data/products.json';
import { colors } from '../constants/colors';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

const ItemDetail = ({ itemSelected, setProductSelected }) => {
  const [product, setProduct] = useState(null);
  const [orientation, setOrientation] = useState('portrait');
  const { width, height } = useWindowDimensions();
  

  useEffect(() => {
    if (width > height) setOrientation('landscape');
    else setOrientation('portrait');
  }, [width, height]);

  useEffect(() => {
    const productSelected = allProducts.find((product) => product.id === itemSelected);
    setProduct(productSelected);
  }, [itemSelected]);

  return (
    <View>
      <Pressable onPress={() => setProductSelected('')} style={styles.button}>
        <Text style={styles.buttonText}>Ir a categorias</Text>
      </Pressable>
      {product ? (
        <View style={orientation === 'portrait' ? styles.detailContainer : styles.detailContainerOtherView}>
          <View style={styles.imageContainer1}>
            <Image
              source={{ uri: product.images[0] }}
              style={orientation === 'portrait' ? styles.imageOnly : styles.imageOtherView}
              resizeMode="contain"
            />
          </View>
          <View style={orientation === 'portrait' ? styles.textContainer1 : styles.textDetailOtherView}>
            <View style={styles.textContainer1}>
              <Text>{product.title}</Text>
              <Text>{product.description}</Text>
              <Text style={styles.priceDetail}> <Text>Precio</Text>  ${product.price}</Text>
            </View>
            <View style={styles.buttonContainer}>
              <Pressable style={styles.button}>
                <Text style={styles.buttonText}>Agregar Al Carrito</Text>
              </Pressable>
            </View>
          </View>
        </View>
      ) : null}
    </View>
  );
};

export default ItemDetail;

const styles = StyleSheet.create({
  detailContainer: {
    marginTop: '1%',
    height: '60%',
    textAlign: 'center',
   
  },
  detailContainerOtherView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 10,
    gap: 10,
  },
  imageOnly: {
    height: '85%',
    width: '100%',
    marginBottom: 20,
    marginTop: 40,
   
  },
  imageOtherView: {
    width: '45%',
    height: 200,
  },
  textDetailOtherView: {
    width: '50%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'start',
  },
  priceDetail: {
    textAlign: 'center',
    width: '100%',
    backgroundColor: 'red',
    top: 40,
    height: 30,
    fontSize: 20,
    color: colors.lightColor,
    fontWeight: 'bold',
    
  },
  textContainer1: {
    height: 100,
    width: '100%',
   gap: 5,

  
    backgroundColor: colors.lightColor,
  },
  buttonContainer: {
   
    marginTop: 110,
    right: "50%",
   
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "red",
    height: 50,
    width: '60%',
    left: "55%",
    top: "3%",
   
  
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: colors.lightColor,
  
  },
});


