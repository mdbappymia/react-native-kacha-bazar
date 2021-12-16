import React, {useState} from 'react';
import {
  Alert,
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {Link} from 'react-router-native';

const AddProduct = () => {
  const [productName, setProductName] = useState('');
  const [productImage, setProductImage] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [price, setPrice] = useState(0);
  const handleSubmit = () => {
    if (!productName || !price || !productImage || !productDescription) {
      Alert.alert('All filed are required');
      return;
    }
    const product = {productName, price, productImage, productDescription};
    fetch('https://whispering-dusk-72267.herokuapp.com/products', {
      method: 'POST',
      Accept: 'application/json',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(product),
    })
      .then(res => res.json())
      .then(result => {
        if (result.acknowledged) {
          Alert.alert('Product added successfully');
          setProductDescription('');
          setProductImage('');
          setProductName('');
          setPrice('');
        }
        console.log(result);
      });
  };
  return (
    <ScrollView style={styles.addProduct}>
      <Text style={styles.productHeading}>Insert a new product</Text>
      <Text style={styles.label}>Product Name:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setProductName}
        value={productName.toString()}
        placeholder="Product Name"
      />
      <Text style={styles.label}>Product Image Link:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setProductImage}
        value={productImage.toString()}
        placeholder="Product Image Link"
      />
      <Text style={styles.label}>Product Description:</Text>
      <TextInput
        style={styles.description}
        onChangeText={setProductDescription}
        value={productDescription.toString()}
        placeholder="Product Description"
      />
      <Text style={styles.label}>Product Price:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setPrice}
        value={price.toString()}
        placeholder="Product Price"
        keyboardType="numeric"
      />
      <View style={styles.submitButton}>
        <Button onPress={handleSubmit} title="Submit" />
      </View>
      <Link to="/">
        <Text>Back to home</Text>
      </Link>
    </ScrollView>
  );
};

export default AddProduct;

const styles = StyleSheet.create({
  productHeading: {
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  label: {
    marginLeft: 12,
  },
  description: {
    height: 100,
    textAlignVertical: 'top',
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  submitButton: {
    width: 150,
    marginLeft: 12,
    marginBottom: 100,
  },
  addProduct: {
    marginBottom: 200,
  },
});
