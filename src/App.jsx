import "./App.css";
import Movies from "./Movie";
import React, { createContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import NavbarUI from "./Navbar";
import Films from "./Films";
import SingleMovie from "./SingleMovie";
import ErrorBoundry from "./ErrorBoundry";
export const ThemeConext = createContext();

function App() {
  return (
    <ErrorBoundry>
      <ThemeConext.Provider value={{ color: "light" }}>
        <BrowserRouter>
          <NavbarUI />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/Films" element={<Films />} />
            <Route path="/movie/:id" element={<SingleMovie />} />
          </Routes>
        </BrowserRouter>
      </ThemeConext.Provider>
    </ErrorBoundry>
  );
}

export default App;
