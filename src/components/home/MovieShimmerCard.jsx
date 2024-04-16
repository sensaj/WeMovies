import styles from "../modules/movieShimmercard.module.css";
export default function MovieShimmerCard({ width }) {
  if (!width) {
    width = "col-md-2 col-sm-5";
  }
  return (
    <div className={`${width} my-3 mx-sm-4 ${styles.movieShimmerCard}`}></div>
  );
}
