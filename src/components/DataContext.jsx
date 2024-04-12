import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const [hoveredData, setHoveredData] = useState(null);

  const handleHover = (data) => {
    setHoveredData(data);
  };

  return (
    <DataContext.Provider value={{ hoveredData, handleHover }}>
      {children}
    </DataContext.Provider>
  );
};
