import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

class Home extends React.Component {
  state = {
    isLoading: true, //check if site is loading
    movies: [],
  };

  //async - javascript will wait until this func will finish
  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts.mx/api/v2/list_movies.json?sort_by=rating"
    ); //get info from API
    this.setState({ movies, isLoading: false }); //movies=movies =becouse they same can delete one "movies". Once we get the data, state will be changed to false.
  };

  // componentDidMount = invoked immediately after a component is mounted
  componentDidMount() {
    this.getMovies();
  }
  render() {
    //way to get movies.map = have to be movies in const
    const { isLoading, movies } = this.state; //not to read this.state, we will read only "isLoading"
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => (
              <Movie
                key={movie.id} //in map have to be key, so here key is id
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    ); //Trinary: if state is true:"loading...", else: already...
  }
}

export default Home;
