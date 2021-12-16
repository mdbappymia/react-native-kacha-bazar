/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableHighlight as TouchableOpacity,
  View,
} from 'react-native';

const CartItem = ({item, handleDecrease, handleIncrease, handleRemove}) => {
  const {productName, productImage, quantity, _id} = item;

  return (
    <View style={styles.cart}>
      <Image style={styles.cartImage} source={{uri: productImage}} />
      <View style={styles.element}>
        <Text style={styles.name}>{productName}</Text>
        <View>
          <View style={styles.functionalButton}>
            <View>
              <View style={styles.quantityFunction}>
                <TouchableOpacity
                  onPress={() => handleDecrease(_id)}
                  style={styles.decrease}>
                  <Text style={styles.quantityBtnText}>-</Text>
                </TouchableOpacity>
                <Text style={{fontSize: 20}}>{quantity}kg </Text>
                <TouchableOpacity
                  onPress={() => handleIncrease(_id)}
                  style={styles.decrease}>
                  <Text style={styles.quantityBtnText}>+</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.removeButton}>
                <Button onPress={() => handleRemove(_id)} title="Remove" />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  cart: {
    flexDirection: 'row',
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    borderRadius: 10,
    borderColor: 'lightgray',
  },
  cartImage: {
    flex: 1,
  },
  element: {
    flex: 2,
    marginLeft: 12,
  },
  name: {
    textAlign: 'center',
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  functionalButton: {
    textAlign: 'right',
  },
  quantityFunction: {
    flexDirection: 'row',
  },
  decrease: {
    backgroundColor: 'goldenrod',

    marginRight: 5,
    paddingLeft: 10,
    borderRadius: 5,
    paddingRight: 10,
  },
  removeButton: {
    marginTop: 20,
  },
  quantityBtnText: {
    fontSize: 20,
  },
});
