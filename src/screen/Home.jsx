import React from 'react';
import { FlatList, StyleSheet, Text, View, ImageBackground } from 'react-native';
import { colors } from '../constants/colors';
import CategoryItem from '../components/CategoryItem';
import categories from '../data/categories.json';

const Home = () => {
  return (
    <ImageBackground 
      source={require('../../assets/detailing1.jpg')} 
      style={styles.flatListContainer}
    >
      <FlatList
        keyExtractor = {item => item}
        data={categories.sort()}
        renderItem={({ item }) => <CategoryItem category={item} />}
        contentContainerStyle={styles.contentContainer}
      />
    </ImageBackground>
  );
};

export default Home;

const styles = StyleSheet.create({
  flatListContainer: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    height: "50%", 
    width: "100%", 
    marginTop: 10,
    opacity: 0.7,
  },
  contentContainer: {
    flex: 1,                                                        
    justifyContent: 'center',
   
    gap: 8,
    padding: 1,  
    marginTop:360,
    height: "100%", 
    width: "100%", 
  
  },
});
