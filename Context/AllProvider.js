import React, {createContext} from 'react';
import useData from '../hooks/useData';
export const MyContext = createContext();
const AllProvider = ({children}) => {
  const allContext = useData();
  return <MyContext.Provider value={allContext}>{children}</MyContext.Provider>;
};

export default AllProvider;
