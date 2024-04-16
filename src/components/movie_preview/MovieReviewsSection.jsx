import { useEffect, useState } from "react";
import { AUTHORIZATION, BASE_URL, IMAGE_BASE_URL } from "../../services/apis";
import { FaPerson, FaUser } from "react-icons/fa6";
import styles from "../modules/movieReviewsSection.module.css";
import { useParams } from "react-router-dom";

export default function MovieReviewsSection({ isLoadingMovie }) {
  if (isLoadingMovie) {
    return <></>;
  }

  const [isLoading, setIsLoading] = useState(false);
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function fetchReviews() {
      const headers = {
        Authorization: AUTHORIZATION,
        "Content-Type": "application/json",
      };
      setIsLoading(true);
      const response = await fetch(`${BASE_URL}/movie/${id}/reviews`, {
        method: "GET",
        headers: headers,
      });
      let data = await response.json();

      setReviews(data.results);
      setIsLoading(false);
    }

    fetchReviews();
  }, [id]);

  return (
    <section className="col-md-4">
      <h2 className={styles.title}>Reviews</h2>
      <div className="container">
        <div className="row">
          {isLoading ? (
            <div>
              <h1>isLoading</h1>
            </div>
          ) : reviews ? (
            reviews.slice(0, 5).map((review) => {
              let avatar = <FaUser size={35} color="#ffffff" />;
              if (review.avatar_path) {
                avatar = (
                  <div
                    style={{
                      backgroundImage: `url(${IMAGE_BASE_URL}/${review.avatar_path})`,
                    }}
                    className={styles.avatar}
                  ></div>
                );
              }
              return (
                <div
                  key={review.id}
                  className={`ms-2 mb-3 ${styles.reviewContainer}`}
                >
                  <div className={`row ms-1`}>
                    <div className={`col-1 ${styles.avatarContainer}`}>
                      {avatar}
                    </div>
                    <div className="col-8">
                      <span className={styles.authorName}>{review.author}</span>
                    </div>
                  </div>
                  <p className={styles.content}>{review.content}</p>
                </div>
              );
            })
          ) : (
            <></>
          )}
        </div>
      </div>
    </section>
  );
}
