import React, { useState, useEffect } from "react";

import { useContext } from "react";
import { createContext } from "react";

const AppContext = createContext();
export const API_ENDPOINT = `http://www.omdbapi.com/?apikey=c5346fb&`;

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState("batman");
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState({ show: false, msg: "" });
  const fetchMovies = async () => {
    let url = `${API_ENDPOINT}s=${query}`;
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data.Response);
      if (data.Response==='True') {
          setMovies(data.Search);
          setError({ show: false, msg: "" });
          setLoading(false);
      } else {
          console.log('movie' ,movies);
          setError({ show: true, msg: data.Error });
         
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchMovies();
  }, [query]);

  return <AppContext.Provider value={{movies,error,loading,query,setQuery}}> {children} </AppContext.Provider>;
};

export const useGlobalContext = () => useContext(AppContext);
export default AppProvider;
