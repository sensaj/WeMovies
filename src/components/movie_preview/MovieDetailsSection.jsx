import styles from "../modules/movieDetailsSection.module.css";
import { LiaCalendar, LiaClock } from "react-icons/lia";
import MovieGenreList from "./MovieGenreList";
import { IMAGE_BASE_URL } from "../../services/apis";
export default function MovieDetailsSection({ movie, isLoading }) {
  const imgUrl = `${IMAGE_BASE_URL}/${movie.poster_path}`;
  return (
    <section className="row my-3 justify-content-center">
      <div
        className={`col-md-2 col-sm-5 me-sm-3 ${styles.poster}`}
        style={{ backgroundImage: `url(${imgUrl})` }}
      ></div>
      <div className="col-md-8">
        <h4 className={styles.title}>{movie.title}</h4>
        <p className={styles.overview}>{movie.overview}</p>
        <div className="row">
          <div className="col-md-3">
            <LiaCalendar className={styles.statIcon} size={20} />
            <span className={styles.stat}>{movie.release_date}</span>
          </div>
          <div className="col-md-3">
            <LiaClock className={styles.statIcon} size={20} />
            <span className={styles.stat}>{movie.runtime}</span>
          </div>
        </div>
        <hr className={styles.divider} />

        <h4 className={styles.title}>Genres</h4>
        <MovieGenreList genres={movie.genres} isLoading={isLoading} />
      </div>
    </section>
  );
}
