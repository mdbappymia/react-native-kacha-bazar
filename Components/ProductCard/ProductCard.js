import React from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';
import useStore from '../../hooks/useStore';

const ProductCard = ({product}) => {
  const {cart, setCart} = useStore();
  const {productName, productImage, price, productDescription} = product;
  let select = false;
  const cartHandler = () => {
    for (let item of cart) {
      if (item._id === product._id) {
        return;
      }
    }
    setCart([...cart, {...product, quantity: 1}]);
  };
  if (cart.find(item => item._id === product._id)) {
    select = true;
  }
  return (
    <View style={styles.card}>
      <Image
        style={styles.productImg}
        source={{
          uri: productImage,
        }}
      />
      <View style={styles.priceAndName}>
        <Text style={styles.name}>{productName}</Text>
        <Text style={styles.price}>Price: {price}TK</Text>
      </View>
      <Text style={styles.description}>{productDescription}</Text>
      <View style={styles.buttonAndCount}>
        <View style={styles.addCartBtn}>
          <Button
            disabled={select}
            onPress={cartHandler}
            color="green"
            title="Add to cart"
          />
        </View>
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderWidth: 1,
    margin: 12,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#EAF5F5',
  },
  productImg: {
    height: 200,
    flex: 1,

    borderRadius: 100,
  },
  priceAndName: {
    flex: 2,
    flexDirection: 'row',
  },
  name: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    flex: 1,
    marginTop: 5,
    textAlign: 'right',
  },
  description: {
    color: 'gray',
    marginTop: 20,
  },
  addCartBtn: {
    flex: 2,
    width: 200,
    marginTop: 20,
  },
  buttonAndCount: {
    flex: 4,
    flexDirection: 'row',
  },
  count: {
    flex: 2,
    textAlign: 'right',
    marginTop: 30,
    fontWeight: 'bold',
  },
});
