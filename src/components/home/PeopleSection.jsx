import { useEffect, useState } from "react";
import styles from "../modules/peopleSection.module.css";
import { AUTHORIZATION, BASE_URL } from "../../services/apis";
import PersonCard from "./PersonCard";
import PersonShimmerCard from "./PeersonShimmerCard";
export default function PeopleSection() {
  const [people, setPeople] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchPopularTVSeries() {
      const headers = {
        Authorization: AUTHORIZATION,
        "Content-Type": "application/json",
      };
      setIsLoading(true);
      const response = await fetch(`${BASE_URL}/person/popular`, {
        method: "GET",
        headers: headers,
      });
      const data = await response.json();

      setPeople(data.results);
      setIsLoading(false);
    }
    fetchPopularTVSeries();
  }, []);
  return (
    <section className="container mt-3">
      <h4 className={`text-center ${styles.peopleSectionTitle}`}>People</h4>
      <div className="row justify-content-center">
        {isLoading
          ? Array.from({ length: 20 }).map((el, i) => {
              return <PersonShimmerCard key={i} />;
            })
          : people.map((person) => (
              <PersonCard key={person.id} person={person} />
            ))}
      </div>
    </section>
  );
}
