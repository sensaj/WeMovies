import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import styles from "./modules/tvSeriesSection.module.css";
import { useEffect, useState } from "react";
import SeriesCard from "./SeriesCard";
import { AUTHORIZATION, BASE_URL } from "../services/apis";
import SeriesShimmerCard from "./SeriesShimmerCard";

export default function TVSeriesSection() {
  const [seriesList, setSeries] = useState([]);
  const [isLoading, setIsLoading] = useState([]);

  useEffect(() => {
    async function fetchPopularTVSeries() {
      const headers = {
        Authorization: AUTHORIZATION,
        "Content-Type": "application/json",
      };
      setIsLoading(true);
      const response = await fetch(`${BASE_URL}/tv/popular`, {
        method: "GET",
        headers: headers,
      });
      const data = await response.json();

      setIsLoading(false);
      setSeries(data.results);
    }
    fetchPopularTVSeries();
  }, []);
  return (
    <section className="container-fluid">
      <h4 className={`text-center ${styles.tvSectionTitle}`}>TV Series</h4>

      {isLoading ? (
        <div className="row justify-content-center">
          {Array.from({ length: 3 }).map((el, i) => {
            return <SeriesShimmerCard key={i} />;
          })}
        </div>
      ) : (
        <OwlCarousel className="owl-theme" loop margin={10} nav>
          {seriesList.map((series) => (
            <div className="item" key={series.id}>
              <SeriesCard series={series} />
            </div>
          ))}
        </OwlCarousel>
      )}
    </section>
  );
}
