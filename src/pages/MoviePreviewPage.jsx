import { useLocation, useParams } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import { AUTHORIZATION, BASE_URL, IMAGE_BASE_URL } from "../services/apis";
import { useEffect, useState } from "react";
import AppLoader from "../components/AppLoader";
import { convertMinutesToHours } from "../services/global_functions";
import MovieDetailsSection from "../components/movie_preview/MovieDetailsSection";
import ProductionCompaniesSection from "../components/movie_preview/ProductionCompaniesSection";
import MovieVideosSection from "../components/movie_preview/MovieVideosSection";
import SimilarMovieSection from "../components/movie_preview/SimilarMovieSection";
import MovieReviewsSection from "../components/movie_preview/MovieReviewsSection";

export default function MoviePreviewPage() {
  const { state } = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [movie, setMovie] = useState({});
  const [imgUrl, setImgUrl] = useState("");
  const { id } = useParams();

  async function fetchMovieDetails() {
    const headers = {
      Authorization: AUTHORIZATION,
      "Content-Type": "application/json",
    };
    setIsLoading(true);
    const response = await fetch(`${BASE_URL}/movie/${id}`, {
      method: "GET",
      headers: headers,
    });
    let data = await response.json();

    setIsLoading(false);
    const runtime = convertMinutesToHours(data.runtime);

    data.runtime = runtime;
    setMovie(data);
    const url = `${IMAGE_BASE_URL}/${data.poster_path}`;
    setImgUrl(url);
  }

  useEffect(() => {
    if (state) {
      setMovie(state);
      const url = `${IMAGE_BASE_URL}/${state.poster_path}`;
      setImgUrl(url);
    }
    fetchMovieDetails();
  }, []);

  return (
    <div>
      {!state && isLoading ? (
        <AppLoader />
      ) : (
        <MainLayout>
          <section className="container-fluid">
            <MovieDetailsSection movie={movie} isLoading={isLoading} />
            <ProductionCompaniesSection movie={movie} isLoading={isLoading} />
            <MovieVideosSection isLoading={isLoading} />
            <div className="row mt-3">
              <MovieReviewsSection isLoading={isLoading} />
              <SimilarMovieSection isLoading={isLoading} />
            </div>
          </section>
        </MainLayout>
      )}
    </div>
  );
}
