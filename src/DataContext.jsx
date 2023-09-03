import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export const useData = () => {
  return useContext(DataContext);
};

export const DataProvider = ({ children }) => {
  const [betData, setBetData] = useState([]);

  return (
    <DataContext.Provider value={{ betData, setBetData }}>
      {children}
    </DataContext.Provider>
  );
};