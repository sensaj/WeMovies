import { LiaCalendar, LiaLanguageSolid } from "react-icons/lia";
import styles from "./modules/seriesShimmerCard.module.css";
export default function SeriesShimmerCard() {
  return (
    <div className={`col-3 m-1 ${styles.seriesShimmerCard}`}>
      <div className="row">
        <div className={`col-5 ${styles.seriesPoster}`}></div>
        <div className={`col-7 ${styles.seriesDetails}`}>
          <h4 className={styles.title}></h4>
          <hr />
          <span className={styles.overview}></span>
          <span className={styles.overview}></span>
          <span className={styles.overview}></span>
          <span className={styles.overview}></span>
          <span className={styles.overview}></span>
          <span className={styles.overview}></span>
          <span className={styles.overview}></span>
          <span className={styles.overview}></span>
          <span className={styles.overview}></span>
          <span className={styles.overview}></span>
          <span className={styles.overview}></span>
          <span className={styles.overview}></span>
          <span className={styles.overview}></span>
          <span className={styles.overview}></span>
          <span className={styles.overview}></span>
          <span className={styles.overview}></span>
          <span className={styles.overview}></span>
          <span className={styles.overview}></span>
          <span className={styles.overview}></span>
          <span className={styles.overview}></span>
          <hr />
          <div className="row">
            <div className="col">
              <LiaLanguageSolid className={styles.statIcon} size={20} />
              <span className={styles.stat}></span>
            </div>
            <div className="col">
              <LiaCalendar className={styles.statIcon} size={20} />
              <span className={styles.stat}></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
