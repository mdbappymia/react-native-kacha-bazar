/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Alert, Button, ScrollView, StyleSheet, Text, View} from 'react-native';
import useStore from '../../hooks/useStore';
import CartItem from '../CartItem/CartItem';

const Cart = () => {
  const {cart, setCart} = useStore();

  let price = 0;
  for (let cartItem of cart) {
    price = price + cartItem.quantity * cartItem.price;
  }

  const handleRemove = id => {
    const remainingCart = cart.filter(cartItem => cartItem._id !== id);
    setCart(remainingCart);
  };
  const handleIncrease = id => {
    for (let cartItem of cart) {
      if (cartItem._id === id) {
        if (cartItem.quantity === 5) {
          Alert.alert('Maximum 5 kg');
          return;
        }
        cartItem.quantity = cartItem.quantity + 1;
      }
    }
    setCart([...cart]);
  };
  const handleDecrease = id => {
    for (let cartItem of cart) {
      if (cartItem._id === id) {
        if (cartItem.quantity === 1) {
          return;
        }
        cartItem.quantity = cartItem.quantity - 1;
      }
    }
    setCart([...cart]);
  };

  if (!cart.length) {
    return (
      <Text style={{textAlign: 'center', margin: 20}}>Your cart is empty</Text>
    );
  }

  return (
    <View style={styles.cartContainer}>
      <Text style={styles.priceText}>
        Total price:{' '}
        <Text style={{color: 'green', fontWeight: 'bold'}}>{price}TK</Text>
      </Text>
      <View style={{marginBottom: 10, zIndex: -1}}>
        <Button title="Order now" />
      </View>
      <ScrollView>
        {cart.map(item => (
          <CartItem
            key={item._id}
            handleIncrease={handleIncrease}
            handleDecrease={handleDecrease}
            handleRemove={handleRemove}
            item={item}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  cartContainer: {
    margin: 12,
    marginBottom: 450,
  },
  priceText: {
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 10,
  },
});
