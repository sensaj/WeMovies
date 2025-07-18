import { useEffect, useState } from "react";
import { AUTHORIZATION, BASE_URL } from "../services/apis";
import MovieSection from "../components/home/MovieSection";
import PeopleSection from "../components/home/PeopleSection";
import TVSeriesSection from "../components/home/TVSeriesSection";
import TrendingMovies from "../components/home/TrendingMovies";
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
