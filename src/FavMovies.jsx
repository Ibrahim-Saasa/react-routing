import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import "./favMovies.css";

function FavMovies() {
  const [favMovies, setFavMovies] = useState([]);
  let FavMovies = JSON.parse(localStorage.getItem("fav-movies"));
  console.log(FavMovies, "in localstorage");

  function deleteFavMovie(id) {
    let Movies = JSON.parse(localStorage.getItem("fav-movies"));
    let filteredMovies = Movies.filter((item) => {
      return item.id != id;
    });

    localStorage.setItem("fav-movies", JSON.stringify(filteredMovies));
  }

  useEffect(() => {
    let movies = JSON.parse(localStorage.getItem("fav-movies"));
    console.log(FavMovies, "in localStorage");
    setFavMovies(movies);
  }, [favMovies]);
  return (
    <div>
      {favMovies?.map((item) => (
        <div className="fav-movies-item">
          <div className="card">
            <img
              className="card-img"
              src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
            />
            <div>
              <p>{item.title}</p>
              <FaTrash
                color="red"
                size={20}
                onClick={() => deleteFavMovie(item.id)}
              ></FaTrash>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FavMovies;
