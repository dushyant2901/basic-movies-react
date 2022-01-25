import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import { API_ENDPOINT } from "./context";
import { Link } from "react-router-dom";
const SingleMovie = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movieData, setMovieData] = useState();
  const [error, setError] = useState({ show: false, msg: "" });

  const fetchMovieData = async (url) => {
    console.log(movieData);
    const response = await fetch(url);
    const data = await response.json();
console.log(data);
    setMovieData(data);
    setLoading(false);
    console.log(movieData);
  };

  useEffect(() => {
    fetchMovieData(`${API_ENDPOINT}i=${id}`);

    console.log(`${API_ENDPOINT}i=${id}`);
  }, []);
  const { Poster: poster, Title: title, Plot: plot, Year: year } = movieData;

  if (loading) {
    console.log("first");
    return <div className="loading"></div>;
  }
  console.log(movieData);
  return (
    <section className="single-movie">
       <img src={poster} alt={title} />
      <div className="single-movie-info">
        <h2>{title}</h2>
        <p>{plot}</p>
        <h4>{year}</h4>
        <Link to="/" className="btn">
          back to movies
        </Link>
      </div> 
    </section>
  );
};

export default SingleMovie;
