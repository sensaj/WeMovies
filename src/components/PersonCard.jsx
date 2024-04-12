import { IMAGE_BASE_URL } from "../services/apis";
import styles from "./modules/personCard.module.css";

export default function PersonCard({ person }) {
  const imgUrl = `${IMAGE_BASE_URL}/${person.profile_path}`;
  return (
    <div className="col-4 col-sm-2  col-xl-1 mb-3">
      <div
        style={{ backgroundImage: `url(${imgUrl})` }}
        className={styles.profileAvatar}
      ></div>
    </div>
  );
}
