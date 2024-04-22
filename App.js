import React, { useCallback, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Header from './src/components/Header';
import Home from './src/screen/Home';
import ItemDetail from './src/screen/ItemDetail';
import ItemListCategory from './src/screen/ItemListCategory';
import { colors } from './src/constants/colors';

const App = () => {
  const [fontsLoaded, fontError] = useFonts({
    'Josefine': require('./assets/JosefinSans-Italic.ttf'),
    'Jersey': require('./assets/Jersey20Charted-Regular.ttf'),
  });
  const [categorySelected, setCategorySelected] = useState('');
  const [itemIdSelected, setItemIdSelected] = useState('');

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Header title={'COMPANY DETAIL SHOP'} />
      {!categorySelected ? (
        <Home setCategorySelected={setCategorySelected} />
      ) : !itemIdSelected ? (
        <ItemListCategory
          categorySelected={categorySelected}
          setCategorySelected={setCategorySelected}
          setItemIdSelected={setItemIdSelected}
        />
      ) : (
        <ItemDetail
          itemSelected={itemIdSelected}
          setProductSelected={setItemIdSelected}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    height: '120%',
    alignItems: 'center',
    backgroundColor: colors.groundColor,
  },
});

export default App;
