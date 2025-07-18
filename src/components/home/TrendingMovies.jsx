import Carousel from "react-bootstrap/Carousel";
import TrendingMovieItem from "./TrendingMovieItem";

export default function TrendingMovies({ movies }) {
  return (
    <div>
      <Carousel>
        {movies.map((movie) => (
          <Carousel.Item key={movie.id}>
            <TrendingMovieItem movie={movie} />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
