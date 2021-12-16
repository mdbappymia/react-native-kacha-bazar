import React from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableHighlight,
} from 'react-native';
import AppBar from './Components/AppBar/AppBar';
import {
  NativeRouter,
  Route,
  Link,
  Switch,
  useHistory,
} from 'react-router-native';
import Home from './Components/Home/Home';
import AllProvider from './Context/AllProvider';
import AddProduct from './Components/AddProduct/AddProduct';
import Main from './Components/Main/Main';

const App = () => {
  const history = useHistory();
  return (
    <SafeAreaView>
      <AllProvider>
        <Main />
      </AllProvider>
    </SafeAreaView>
  );
};

export default App;
