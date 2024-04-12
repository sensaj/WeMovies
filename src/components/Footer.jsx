import { FaGithub, FaReact, FaXTwitter } from "react-icons/fa6";
import {
  CiDatabase,
  CiFacebook,
  CiInstagram,
  CiLinkedin,
} from "react-icons/ci";
import styles from "./modules/footer.module.css";
export default function Footer() {
  return (
    <footer className="container mt-3">
      <hr className="border-light" />
      <div className="row">
        <div className="col-md-3">
          <h6 className={styles.title}>Developer</h6>
          <ul className={styles.footerItem}>
            <li>
              <a
                href="https://github.com/sensaj"
                target="_blank"
                className={styles.footerLink}
              >
                <FaGithub size={20} className={styles.linkIcon} />
                <span className={styles.linkInfo}>sensaj</span>
              </a>
            </li>
            <li>
              <a
                href="https://x.com/jafarsalum07"
                target="_blank"
                className={styles.footerLink}
              >
                <FaXTwitter size={20} className={styles.linkIcon} />
                <span className={styles.linkInfo}>jafarsalum07</span>
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/jafarsalum07"
                target="_blank"
                className={styles.footerLink}
              >
                <CiInstagram size={25} className={styles.linkIcon} />
                <span className={styles.linkInfo}>jafarsalum07</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/jafar-salum-94aaa7186?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                className={styles.footerLink}
              >
                <CiLinkedin size={25} className={styles.linkIcon} />
                <span className={styles.linkInfo}>Jafar Salum</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/jafar.salum.3139/"
                target="_blank"
                className={styles.footerLink}
              >
                <CiFacebook size={25} className={styles.linkIcon} />
                <span className={styles.linkInfo}>Jafar Salum</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-3">
          <h6 className={styles.title}>Apis</h6>
          <ul className={styles.footerItem}>
            <li>
              <a
                href="https://www.themoviedb.org"
                target="_blank"
                className={styles.footerLink}
              >
                <CiDatabase size={25} className={styles.linkIcon} />
                <span className={styles.linkInfo}>TMDB</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-3">
          <h6 className={styles.title}>Technology</h6>
          <ul className={styles.footerItem}>
            <li>
              <a
                href="https://react.dev/"
                target="_blank"
                className={styles.footerLink}
              >
                <FaReact size={25} className={styles.linkIcon} />
                <span className={styles.linkInfo}>React Js</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
