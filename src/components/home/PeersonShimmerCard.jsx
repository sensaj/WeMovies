import styles from "../modules/personShimmerCard.module.css";
export default function PersonShimmerCard() {
  return (
    <div className="col-4 col-sm-2  col-xl-1 mb-3">
      <div className={styles.profileAvatar}></div>
    </div>
  );
}
