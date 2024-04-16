import { useEffect, useState } from "react";
import { AUTHORIZATION, BASE_URL } from "../../services/apis";
import styles from "../modules/movieVideosSection.module.css";
import YouTubeVideo from "../modules/YoutubeVideo";
import { useParams } from "react-router-dom";

export default function MovieVideosSection({ isLoadingMovie }) {
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

  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    async function fetchMovieVideos() {
      console.log(id);
      const headers = {
        Authorization: AUTHORIZATION,
        "Content-Type": "application/json",
      };
      setIsLoading(true);
      const response = await fetch(`${BASE_URL}/movie/${id}/videos`, {
        method: "GET",
        headers: headers,
      });
      let data = await response.json();

      setVideos(data.results);
      setIsLoading(false);
    }

    fetchMovieVideos();
  }, [id]);

  return (
    <section className="container-fluid">
      <hr className={styles.divider} />
      <div className="row justify-content-center">
        {isLoading ? (
          Array.from({ length: 3 }).map((el, i) => {
            return (
              <div
                key={i}
                className={`col-md-5 me-3 mb-3 ${styles.videoShimmerCard}`}
              ></div>
            );
          })
        ) : videos ? (
          videos.slice(0, 3).map((video) => {
            return <YouTubeVideo video={video} key={video.id} />;
          })
        ) : (
          <></>
        )}
      </div>
    </section>
  );
}
