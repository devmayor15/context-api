import React, { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      name: "Harry Potter",
      price: "$10",
      id: 23124,
    },
    {
      name: "Game of Thrones",
      price: "$10",
      id: 23424,
    },
    {
      name: "Inception",
      price: "$10",
      id: 23131,
    },
  ]);
  return (
    <MovieContext.Provider value={[movies, setMovies]}>
    {props.children}
  </MovieContext.Provider>
  );
};
