import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NativeRouter, Switch, Route, Link} from 'react-router-native';
import useStore from '../../hooks/useStore';
import AddProduct from '../AddProduct/AddProduct';
import AppBar from '../AppBar/AppBar';
import Cart from '../Cart/Cart';
import Home from '../Home/Home';

const Main = () => {
  const {display, setDisplay} = useStore();
  return (
    <View>
      <NativeRouter>
        <AppBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/addProduct" component={AddProduct} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
        <View style={styles.menu}>
          {display && (
            <View>
              <Link onPress={() => setDisplay(!display)} to="/">
                <Text style={styles.menuItem}>Home</Text>
              </Link>
              <Text
                onPress={() => setDisplay(!display)}
                style={styles.menuItem}>
                Login
              </Text>
              <Text
                onPress={() => setDisplay(!display)}
                style={styles.menuItem}>
                Register
              </Text>
              <Link onPress={() => setDisplay(!display)} to="/addProduct">
                <Text style={styles.menuItem}>Add</Text>
              </Link>
            </View>
          )}
        </View>
      </NativeRouter>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  menu: {
    backgroundColor: '#1154E5',
    position: 'absolute',
    right: 0,
    top: 65,
  },
  menuItem: {
    textAlign: 'right',
    color: 'red',
    paddingTop: 5,
    paddingRight: 20,
    paddingLeft: 20,
    paddingBottom: 10,
  },
});
