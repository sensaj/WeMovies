import { useState } from "react";
import "./App.css";
import MainLayout from "./layout/MainLayout";
import TopRatedMovies from "./components/TrendingMovies";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <div className="App">
      <Homepage />
    </div>
  );
}

export default App;
