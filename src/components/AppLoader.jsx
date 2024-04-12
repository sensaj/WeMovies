import { RiseLoader } from "react-spinners";
import styles from "./modules/apploader.module.css";
import { useState } from "react";

export default function AppLoader({ loading }) {
  let [color, setColor] = useState("#646cff");
  return (
    <div className={styles.loaderContainer}>
      <RiseLoader
        color={color}
        loading={loading}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}
