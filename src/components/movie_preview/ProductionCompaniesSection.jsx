import { IMAGE_BASE_URL } from "../../services/apis";
import styles from "../modules/productionCompaniesSection.module.css";

export default function ProductionCompaniesSection({ movie, isLoading }) {
  if (isLoading) {
    return (
      <section className="container">
        <h3 className={styles.title}>Production Companies</h3>
        <div className="row justify-content-center">
          {Array.from({ length: 3 }).map((el, i) => {
            return (
              <div
                key={i}
                className={`col-3 mx-3 ${styles.companyShimmerContainer}`}
              ></div>
            );
          })}
        </div>
      </section>
    );
  }
  return (
    <section className="container">
      {!movie.production_companies ? (
        <></>
      ) : (
        <>
          <div className="row justify-content-center">
            <h3 className={styles.title}>Production Companies</h3>
            {movie.production_companies.slice(0, 5).map((company) => {
              const imgUrl = `${IMAGE_BASE_URL}/${company.logo_path}`;
              return (
                <div
                  key={company.id}
                  className={`col-3 mx-3 mb-3 ${styles.logoContainer}`}
                >
                  <div
                    className={`col-12 ${styles.logo}`}
                    style={{ backgroundImage: `url(${imgUrl})` }}
                  >
                    <span className={`px-3 ${styles.companyOrigin}`}>
                      {company.origin_country}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </section>
  );
}
