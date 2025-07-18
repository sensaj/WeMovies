import styles from "../modules/movieGenreList.module.css";

export default function MovieGenreList({ genres, isLoading }) {
  if (isLoading) {
    return (
      <div className="row">
        {Array.from({ length: 5 }).map((el, i) => {
          return (
            <div
              key={i}
              className={`me-2 col-3 col-sm-2 p-2 mb-2 ${styles.genreShimmerContainer}`}
            ></div>
          );
        })}
      </div>
    );
  }
  return !genres ? (
    <div></div>
  ) : (
    <div className="row">
      {genres.map((genre) => {
        return (
          <div
            key={genre.id}
            className={`me-2 col-3 col-sm-2  mb-2 ${styles.genreContainer}`}
          >
            <span className={styles.genreName}>{genre.name}</span>
          </div>
        );
      })}
    </div>
  );
}
