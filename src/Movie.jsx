import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeConext } from "./App";

function Movies() {
  let theme = useContext(ThemeConext);
  console.log(theme);
  const url =
    "https://api.themoviedb.org/3/movie/top_rated?api_key=01947fdc028668cbba608f3d08618bef&language=en&page=1";

  const [moviesData, setMoviesData] = useState([]);

  async function fetchMovies() {
    let data = await fetch(url);
    let movies = await data.json();
    setMoviesData(movies.results);
    console.log(movies.results, "all movies from api");
  }

  useEffect(() => {
    fetchMovies();
  }, []);
  return (
    <div className="d-flex gap-4 flex-wrap mt-4 justify-content-center">
      {moviesData.map((movie) => (
        <Link to={`/movie/${movie.id}`} key={movie.id}>
          {" "}
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            />
            <Card.Body>
              <Card.Title>{movie.title}</Card.Title>
              <Card.Text>{movie.overview}</Card.Text>
              <Button variant="primary">Add to fav</Button>
            </Card.Body>
          </Card>
        </Link>
      ))}
    </div>
  );
}

export default Movies;
