import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";
import { Link } from "react-router-dom";

function Movie({ id, year, title, summary, poster, genres }) {
  return (
    <div className="container-fluid">
      <Link
        to={{
          pathname: `/movie-details/${id}`,
          state: {
            year,
            title,
            summary,
            poster,
            genres,
          },
        }}
      >
        <div className="movie">
          <img src={poster} alt={title} title={title} />
          <div className="movie_column">
            <h3 className="movie_title">{title}</h3>
            <h5 className="movie_year">{year}</h5>
            <ul className="movie_genres">
              {genres.map((genre, index) => {
                return (
                  <li key={index} className="genres_genre">
                    {genre}
                  </li>
                );
              })}
            </ul>
            <p className="movie_summury">{summary.slice(0, 140)}...</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
