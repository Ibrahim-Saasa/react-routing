import React, { useState, useEffect } from "react";

function ErrorBoundry({ children }) {
  const [hasError, setHasError] = useState(false);
  async function fetchMovies() {
    try {
      let data = await fetch("Data");
      return data;
    } catch (error) {
      setHasError(true);
    }
  }
}

useEffect(() => {
  fetchMovies();
}, []);

return hasError ? <div>error 404! Check Back Again Later!</div> : children;
