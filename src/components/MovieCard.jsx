import { IMAGE_BASE_URL } from "../services/apis";
import styles from "./modules/movieCard.module.css";

export default function Moviecard({ movie }) {
  const imgUrl = `${IMAGE_BASE_URL}/${movie.poster_path}`;

  return (
    <div
      className={`col-md-2 col-sm-5 my-3 mx-sm-4 ${styles.movieCard}`}
      style={{ backgroundImage: `url(${imgUrl})` }}
    ></div>
  );
}
