import React from 'react';
import { StyleSheet, View, Text,FlatList, Pressable } from 'react-native';
import { colors } from '../constants/colors';
import products from '../data/products.json';
import ProductItem from '../components/ProductItem';
import Search from '../components/Search';
import { useState, useEffect } from 'react'


const ItemListCategory = ({categorySelected="", 
setCategorySelected = ()=> {},
setItemIdSelected = ()=> {},
}) => {
   const [keyWord, setKeyword] = useState("")
   const [filterProduct, setFilterProduct] = useState([])
    const[error,setError] = useState("")

   
   
   useEffect(() => {
    const filterProducts = products.filter(product => product.category === categorySelected)
    const productFilter = filterProducts.filter(product => product.title.toLowerCase().includes(keyWord.toLowerCase()));
    regex= /\d/
    const noDigits =(regex.test(keyWord))
    

    if(noDigits){
        setError("Ingresa solo letras")
        return
    }
   

setFilterProduct(productFilter)
setError("")
   },[keyWord, categorySelected] )
    return (
        <View style = {styles.FlatListContainer}>
          <Search error={error}	 onSearch={setKeyword} goBack= {()=> setCategorySelected("")}/>

         <FlatList
            data= {filterProduct}
            renderItem={({item}) => <ProductItem item ={item} setItemIdSelected={setItemIdSelected}/>}
            keyExtractor={(item) => item.id}
        />
    
        </View>
    );
}

const styles = StyleSheet.create({
    FlatListContainer: {
   
        height: "80%",
        width: "95%",
        marginTop: 10,
       
    },

})

export default ItemListCategory;
