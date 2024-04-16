import { useEffect, useState } from "react";
import { AUTHORIZATION, BASE_URL } from "../../services/apis";
import Moviecard from "../home/MovieCard";
import MovieShimmerCard from "../home/MovieShimmerCard";
import styles from "../modules/similarMoviesSection.module.css";
import { useParams } from "react-router-dom";

export default function SimilarMovieSection({ isLoadingMovie }) {
  if (isLoadingMovie) {
    <section className="container-fluid">
      <hr className={styles.divider} />
      <div className="row justify-content-center">
        {Array.from({ length: 3 }).map((el, i) => {
          return (
            <div
              key={i}
              className={`col-md-5 me-3 mb-3 ${styles.videoShimmerCard}`}
            ></div>
          );
        })}
      </div>
    </section>;
  }

  const [isLoading, setIsLoading] = useState(false);
  const [similarMovies, setSimilarMovies] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function fetchSimilarMovies() {
      const headers = {
        Authorization: AUTHORIZATION,
        "Content-Type": "application/json",
      };
      setIsLoading(true);
      const response = await fetch(`${BASE_URL}/movie/${id}/similar`, {
        method: "GET",
        headers: headers,
      });
      let data = await response.json();

      setSimilarMovies(data.results);
      setIsLoading(false);
    }

    fetchSimilarMovies();
  }, [id]);

  return (
    <section className="col-md-8">
      <h2 className={styles.title}>Similar Movies</h2>
      <div className="row">
        {isLoading ? (
          Array.from({ length: 6 }).map((el, i) => {
            return <MovieShimmerCard key={i} width={`col-md-3 col-sm-5`} />;
          })
        ) : similarMovies ? (
          similarMovies.slice(0, 6).map((similarMovie) => {
            return (
              <Moviecard
                key={similarMovie.id}
                movie={similarMovie}
                width={`col-md-3 col-sm-5`}
              />
            );
          })
        ) : (
          <></>
        )}
      </div>
    </section>
  );
}
