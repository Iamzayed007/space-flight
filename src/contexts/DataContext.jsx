import React, { createContext, useContext } from "react";
import useDataFetching from "../hooks/useDataFetching";

const DataContext = createContext("");

export function useDataContext() {
  return useContext(DataContext);
}

export function DataProvider({ children }) {
  const {
    data,
    loading,
    error,
    currentPage,
    totalPages,
    setCurrentPage,
    setUpcoming,
    setSearch,
    setFilterType,
    setFilterValue
  } = useDataFetching("https://api.spacexdata.com/v3/launches"); // Provide the API endpoint here

  return (
    <DataContext.Provider
      value={{
        data,
        loading,
        error,
        currentPage,
        totalPages,
        setCurrentPage,
        setUpcoming,
        setSearch,
        setFilterType,
        setFilterValue
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
