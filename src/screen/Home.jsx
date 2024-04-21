import React from 'react';
import { FlatList, StyleSheet, Text, View, ImageBackground } from 'react-native';
import { colors } from '../constants/colors';
import CategoryItem from '../components/CategoryItem';
import categories from '../data/categories.json';

const Home = ({setCategorySelected}) => {

  return (
    <View style={styles.contentContainer}>
<ImageBackground 
      source={require('../../assets/detailing1.jpg')} 
      style={styles.logoStyle}
    >
       <View style={styles.flatStyles}> 

      <FlatList
        keyExtractor = {item => item}
        data={categories.sort()}
        renderItem={({ item }) => <CategoryItem 
        selectCategoryHandler={setCategorySelected} category={item} />}
      />
       </View>
   </ImageBackground>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
logoStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: "30%", 
    width: "100%", 
    opacity: 0.9,
    marginTop: 3,
    
 
  },
  contentContainer: {
    flex: 1,
    height: "100%",
    width: "100%",
    marginTop: 20,
   
  },
  flatStyles:{
    backgroundColor: "red",
    marginTop: 290,
    
    
  }
 
});
