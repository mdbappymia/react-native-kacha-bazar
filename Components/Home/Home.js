import React from 'react';
import {ActivityIndicator, ScrollView, StyleSheet, View} from 'react-native';

import useStore from '../../hooks/useStore';
import ProductCard from './../ProductCard/ProductCard';
const Home = () => {
  const {products} = useStore();
  return (
    <View>
      <ScrollView>
        {!products.length && <ActivityIndicator size={40} color="orange" />}
        <View style={styles.productsContainer}>
          {products.map(product => (
            <ProductCard key={product._id} product={product} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  productsContainer: {
    marginBottom: 200,
  },
});
