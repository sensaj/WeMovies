import { Link } from "react-router-dom";
import { IMAGE_BASE_URL } from "../../services/apis";
import styles from "../modules/movieCard.module.css";

export default function Moviecard({ movie, width }) {
  if (!width) {
    width = "col-md-2 col-sm-5";
  }
  const imgUrl = `${IMAGE_BASE_URL}/${movie.poster_path}`;

  return (
    <Link
      to={`/movie/${movie.id}`}
      state={movie}
      className={`${width} my-3 mx-sm-4 ${styles.movieCard}`}
      style={{ backgroundImage: `url(${imgUrl})` }}
    ></Link>
  );
}
