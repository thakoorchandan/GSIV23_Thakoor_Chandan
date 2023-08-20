import PlayIcon from "../../assets/img/play.png";
import { Link } from "react-router-dom";
import { useState } from "react";

//Styles
import styles from "./Card.module.css";

function Card({ id, title, image, overview, type, reloadDocument, rating }) {
  const linkTitle = `/${type}/${title.toLowerCase().replace(/\s/g, "-")}/${id}`;

  return (
    <figure className={styles.card}>
      <div className={styles.cardImgBox}>
        <Link to={linkTitle} reloadDocument={reloadDocument}>
          <img
            className={styles.cardImg}
            src={
              image != null
                ? `https://image.tmdb.org/t/p/w185${image}`
                : "https://i.ibb.co/d4F5nGV/no-image.png"
            }
            alt={`${title} Poster`}
          />
          <img
            id="playIcon"
            className={styles.playIcon}
            src={PlayIcon}
            alt="Play"
          />
        </Link>
      </div>

      <div className={styles.cardTitleRating}>
        <div className={styles.cardTitle}>{title}</div>
        <div>{rating}</div>
      </div>
      <div className={styles.cardOverview}>{overview}</div>
    </figure>
  );
}
export default Card;
