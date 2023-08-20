import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/Header/NavBar";
import ListPage from "./Pages/ListPage";
import DetailsPage from "./Pages/DetailsPage";
import { useState } from "react";
import { useSelector } from "react-redux";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<ListPage />} />
          <Route path="/movie/:movieId" element={<DetailsPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
