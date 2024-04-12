import AllMoviesList from "./AllMoviesList";
import styles from "./modules/movieSection.module.css";

export default function MovieSection() {
  return (
    <section className="container-fluid my-3">
      <div className="row">
        <div className="col-12">
          <h4 className={`col-11 ${styles.movieSectionTitle}`}>Movies</h4>
          <AllMoviesList />
        </div>
      </div>
    </section>
  );
}
