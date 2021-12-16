import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Link, useHistory} from 'react-router-native';
import useStore from '../../hooks/useStore';

const AppBar = () => {
  const {display, setDisplay, cart} = useStore();
  const history = useHistory();
  return (
    <View>
      <ScrollView>
        <View style={styles.appBar}>
          <Link style={styles.titleSubtitle} to="/">
            <View>
              <Text style={styles.title}>Kacha Bazar</Text>
              <Text style={styles.subtitle}>Online Shop</Text>
            </View>
          </Link>
          <View style={styles.logos}>
            <TouchableOpacity onPress={() => history.push('/cart')}>
              <Image
                style={styles.cart}
                source={require('./../../assets/icon/cart-removebg-preview.png')}
              />
              <Text style={styles.cartBadge}>{cart.length}</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setDisplay(!display)}>
              <Image
                style={styles.bar}
                source={require('./../../assets/icon/bar.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default AppBar;

const styles = StyleSheet.create({
  appBar: {
    backgroundColor: '#400ADC',
    flexDirection: 'row',
    flex: 2,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 12,
    paddingRight: 12,
  },
  titleSubtitle: {
    flex: 4,
  },
  title: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  subtitle: {
    color: 'orange',
  },
  logos: {
    flex: 2,
    textAlign: 'right',
    marginLeft: 'auto',
    flexDirection: 'row',
    marginTop: 10,
  },
  cart: {
    flex: 1,
    width: 45,
    height: 35,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 17,
  },
  bar: {
    flex: 1,
    width: 45,
    height: 35,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 17,
    marginLeft: 20,
  },
  cartBadge: {
    color: 'white',
    backgroundColor: 'red',
    position: 'absolute',
    right: -10,
    width: 30,
    height: 30,
    top: -10,
    textAlign: 'center',
    borderRadius: 15,
  },
});
