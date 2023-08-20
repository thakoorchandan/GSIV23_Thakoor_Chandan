import React from "react";
import { Link } from "react-router-dom";

import SearchBar from "./SearchBar";
import HomeIcon from "../../assets/img/home-icon.png";

//Styles
import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <div className={styles.navBar}>
      <div className={styles.items}>
        <SearchBar action="/search" placeholder="Search" inputName="q" />
      </div>
      <Link to={"/"} reloadDocument={false}>
        <img className={styles.homeIcon} src={HomeIcon} alt="User" />
      </Link>
    </div>
  );
}
export default NavBar;
