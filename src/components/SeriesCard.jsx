import { LiaCalendar, LiaLanguageSolid } from "react-icons/lia";
import { IMAGE_BASE_URL } from "../services/apis";
import styles from "./modules/seriesCard.module.css";

export default function SeriesCard({ series }) {
  const imgUrl = `${IMAGE_BASE_URL}/${series.poster_path}`;
  return (
    <div className={styles.seriesCard}>
      <div className="row">
        <div
          style={{ backgroundImage: `url(${imgUrl})` }}
          className={`col-5 ${styles.seriesPoster}`}
        ></div>
        <div className={`col-7 ${styles.seriesDetails}`}>
          <h4 className={styles.title}>{series.name}</h4>
          <hr />
          <p className={styles.overview}>{series.overview}</p>
          <hr />
          <div className="row">
            <div className="col">
              <LiaLanguageSolid className={styles.statIcon} size={20} />
              <span>{series.original_language}</span>
            </div>
            <div className="col">
              <LiaCalendar className={styles.statIcon} size={20} />
              <span className={styles.stat}>{series.first_air_date}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
