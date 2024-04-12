import { useEffect, useState } from "react";
import Moviecard from "./MovieCard";
import { AUTHORIZATION, BASE_URL } from "../services/apis";
import MovieShimmerCard from "./MovieShimmerCard";

export default function AllMoviesList() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function fetchAllMoviesList() {
      const headers = {
        Authorization: AUTHORIZATION,
        "Content-Type": "application/json",
      };
      setIsLoading(true);
      const response = await fetch(
        `${BASE_URL}/discover/movie?include_video=true`,
        {
          method: "GET",
          headers: headers,
        }
      );
      const data = await response.json();

      setIsLoading(false);
      setMovies(data.results);
    }
    fetchAllMoviesList();
  }, []);
  return (
    <div className="row">
      (
      {isLoading
        ? Array.from({ length: 15 }).map((el, i) => {
            return <MovieShimmerCard key={i} />;
          })
        : movies.map((movie) => <Moviecard key={movie.id} movie={movie} />)}
      )
    </div>
  );
}
