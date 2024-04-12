import { useEffect, useState } from "react";
import { AUTHORIZATION, BASE_URL } from "../services/apis";
import MovieSection from "../components/MovieSection";
import PeopleSection from "../components/PeopleSection";
import TVSeriesSection from "../components/TVSeriesSection";
import TrendingMovies from "../components/TrendingMovies";
import MainLayout from "../layout/MainLayout";
import AppLoader from "../components/AppLoader";

export default function Homepage() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoadingTrendingMovies, setIsLoadingTrendingMovies] = useState(false);
  useEffect(() => {
    async function fetchTrendingMovies() {
      setIsLoadingTrendingMovies(true);
      const headers = {
        Authorization: AUTHORIZATION,
        "Content-Type": "application/json",
      };
      const response = await fetch(`${BASE_URL}/trending/movie/day`, {
        method: "GET",
        headers: headers,
      });
      const data = await response.json();

      setTrendingMovies(data.results);
      setIsLoadingTrendingMovies(false);
    }
    fetchTrendingMovies();
  }, []);
  return (
    <div>
      {isLoadingTrendingMovies ? (
        <AppLoader />
      ) : (
        <MainLayout>
          <TrendingMovies movies={trendingMovies} />
          <MovieSection />
          <TVSeriesSection />
          <PeopleSection />
        </MainLayout>
      )}
    </div>
  );
}
