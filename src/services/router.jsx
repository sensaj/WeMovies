import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MoviePreviewPage from "../pages/MoviePreviewPage";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      //   errorElement: <ErrorPage />,
    },
    {
      path: "movie/:id",
      element: <MoviePreviewPage />,
      //   errorElement: <ErrorPage />,
    },
  ],
  { basename: import.meta.env.DEV ? "/" : "/WeMovies/" }
);
