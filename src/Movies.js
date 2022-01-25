import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "./context";

const Movies = () => {
  const { movies, loading } = useGlobalContext();
  const url =
    "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";
  if (loading) {
    return <div className="loading"></div>;
  }
  return (
    <section className="movies">
      {movies.map((movie) => {
        console.log(movie);
        const { Title: title, Year: year, Poster: poster, imdbID: id } = movie;
        return (
          <Link to={`/movies/${id}`} className="movie">
            <article>
              <p>{year}</p>
              <img src={poster === "N/A" ? url : poster} alt={title} />
            </article>
          </Link>
        );
      })}
    </section>
  );
};

export default Movies;
