import React, { useState, useEffect } from "react";

function ErrorBoundry({ children }) {
  const [hasError, setHasError] = useState(false);
  async function fetchMovies() {
    try {
      const url =
        "https://api.themoviedb.org/3/movie/top_rated?api_key=01947fdc028668cbba608f3d08618bef&language=en&page=1";
      let data = await fetch(url);
      console.log(data, "here is data");

      if (data.status != 200) {
        setHasError(true);
      }
      return data;
    } catch (error) {
      setHasError(true);
    }
  }
  useEffect(() => {
    fetchMovies();
  }, []);

  return hasError ? <div>error 404! Check Back Again Later!</div> : children;
}

export default ErrorBoundry;
