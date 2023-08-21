import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Rating from "@mui/material/Rating";

//Components
import List from "../components/items/List";

import styles from "./Movie.module.css";

function Movie() {
  const { id } = useParams();
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}`, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYjQxNDVjMmRhZjAyNGY0OTg1MTcwY2U5MzJkYzc1MiIsInN1YiI6IjYzYWUxOWQ4N2VmMzgxMWY4ZGNkMDYzNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uNozGWnwBIbnaMQMQQYd688m4FQDwT_wB-sHZDvSLLg",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setMovieData(data);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {Object.values(movieData).length > 0 && (
        <div className={styles.detailsContainer}>
          <img
            className={styles.DetailCardImage}
            src={
              movieData?.poster_path != null
                ? `https://image.tmdb.org/t/p/w185${movieData?.poster_path}`
                : "https://i.ibb.co/d4F5nGV/no-image.png"
            }
            alt={`${movieData?.title} Poster`}
          />
          <div className={styles.detailsData}>
            <div className={styles.titleRating}>
              <p>{movieData?.title}</p>
              <Rating
                name="read-only"
                value={Math.floor(movieData?.vote_average)}
                readOnly
              />
            </div>
            <p>{`${movieData?.release_date} | ${movieData?.runtime} mins`}</p>
            <p>{movieData?.overview}</p>
          </div>
        </div>
      )}
      <h2 style={{ marginLeft: "30px" }}>Recommended Movies</h2>
      <List
        fetchUrl={`https://api.themoviedb.org/3/movie/${id}/recommendations`}
        reloadDocument={true}
      />
    </div>
  );
}
export default Movie;
