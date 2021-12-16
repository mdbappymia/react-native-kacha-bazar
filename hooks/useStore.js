import {useContext} from 'react';
import {MyContext} from '../Context/AllProvider';

const useStore = () => {
  return useContext(MyContext);
};

export default useStore;
