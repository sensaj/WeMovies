import { Carousel } from "react-bootstrap";
import styles from "../modules/movieCarouselItem.module.css";
import { IMAGE_BASE_URL } from "../../services/apis";
import { LiaCalendar, LiaLanguageSolid } from "react-icons/lia";
import { PiShootingStar } from "react-icons/pi";
import { SlPeople } from "react-icons/sl";
import { Link } from "react-router-dom";

export default function TrendingMovieItem({ movie }) {
  const imgUrl = `${IMAGE_BASE_URL}/${movie.backdrop_path}`;
  return (
    <div className={styles.movieCarouselItem}>
      <img src={imgUrl} className={styles.movieCover} />
      <Carousel.Caption>
        <div className={styles.caption}>
          <Link to={`/movie/${movie.id}`} className={styles.movieTitle}>
            {movie.title}
          </Link>
          <div className={styles.movieStats}>
            <div className={styles.statContainer}>
              <LiaLanguageSolid className={styles.statIcon} size={20} />
              <span className={styles.stat}>{movie.original_language}</span>
            </div>
            <div className={styles.statContainer}>
              <LiaCalendar className={styles.statIcon} size={20} />
              <span className={styles.stat}>{movie.release_date}</span>
            </div>

            <div className={styles.statContainer}>
              <SlPeople className={styles.statIcon} size={20} />
              <span className={styles.stat}>{movie.popularity}</span>
            </div>

            <div className={styles.statContainer}>
              <PiShootingStar className={styles.statIcon} size={20} />
              <span className={styles.stat}>{movie.vote_count}</span>
            </div>
          </div>
        </div>
      </Carousel.Caption>
    </div>
  );
}
