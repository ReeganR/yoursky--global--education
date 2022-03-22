import React, { createContext } from "react";
import useFetch from "../customeHook/useFetch";

export const CourseContext = createContext();

const CourseContextProvider = (props) => {
  const { data: pokemons, isLoading, error } = useFetch(
    "https://pokeapi.co/api/v2/pokemon"
  );

  const providerValue = {
    pokemons,
    isLoading,
    error,
  };
  return (
    <CourseContext.Provider value={providerValue}>
      {props.children}
    </CourseContext.Provider>
  );
};

export default CourseContextProvider;
