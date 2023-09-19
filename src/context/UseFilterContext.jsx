import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const FilterContext = createContext();

const UseFilterContext = ({ children }) => {
  const [filter, setFilter] = useState({
    category: "Ordinary Drink",
    name: "",
  });

  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  );
};

export default UseFilterContext;
