import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import { API_ENDPOINT } from "./context";
import { Link } from "react-router-dom";
const SingleMovie = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState({});
  const [error, setError] = useState({ show: false, msg: "" });

  const fetchMovie = async (url) => {
   
    const response = await fetch(url);
    const data = await response.json();
    if (data.Response === "False") {
      setError({ show: false, msg: data.Error });
      setIsLoading(false);
    } else {
      setMovie(data);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMovie(`${API_ENDPOINT}i=${id}`);

    console.log(`${API_ENDPOINT}i=${id}`);
  }, [id]);

  if (isLoading) {
    console.log("first");
    return <div className="loading"></div>;
  }
  if (isLoading) {
    return <div className="loading"></div>;
  }
  if (error.show) {
    return (
      <div className="page-error">
        <h1>{error.msg}</h1>
        <Link to="/" className="btn">
          back to movies
        </Link>
      </div>
    );
  }
  const { Poster: poster, Title: title, Plot: plot, Year: year } = movie;
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
