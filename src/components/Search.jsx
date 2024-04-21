import { useState} from 'react'
import { StyleSheet, View , Pressable, TextInput,Text} from 'react-native';
import { Feather ,  MaterialIcons, Octicons  } from '@expo/vector-icons';

import { colors } from '../constants/colors';
const Search = ({ onSearch = () => {}, error = "", goBack = () => {} }) => {
    const [keyword, setKeyword] = useState("")
    return (
        <View>

<View style = {styles.iconContainer}>
    
        <Pressable onPress={()=> onSearch(keyword)}> 
        <Octicons name="search" size={30} color="red" />
         </Pressable>  
         <Pressable onPress={()=> setKeyword(keyword)}> 
         <MaterialIcons name="phonelink-erase" size={30} color="red" />
         </Pressable>  
         <Pressable onPress={goBack}>
         <Feather name="skip-back" size={30} color="red" />
         </Pressable>  
        </View>
        <TextInput
        style={styles.input}
        placeholder="Busqueda......"
        value={keyword}
        onChangeText={setKeyword}
        />      

       {error ? <Text  style = {styles.errorStyle}> {error}</Text> : null}
         </View>
    );
}

const styles = StyleSheet.create({
    input:{
        height: 40,
        width: '100%',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        backgroundColor: 'white',
        marginTop:20,
      
    },
  
    iconContainer:{
        marginTop: 20,
        flexDirection: 'row',
        gap: 20,
        left: "138%",
        height: 30,
        width: "35%",
        backgroundColor: colors.cardColor,
        marginHorizontal: 25,
    } ,
    errorStyle:{
        backgroundColor: "tomato", 
        marginTop: 10,      
     
       width:"70%",
       height: 30,
       marginHorizontal: 105,
        textAlign: 'center',
        alignItems: 'center',
        color: colors.lightColor,
        borderRadius: 10,
    }  
})

export default Search;
