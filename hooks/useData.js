import {useEffect, useState} from 'react';

const useData = () => {
  const [products, setProducts] = useState([]);
  const [display, setDisplay] = useState(false);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch('https://whispering-dusk-72267.herokuapp.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);
  return {products, display, setDisplay, cart, setCart};
};

export default useData;
