//Icon
import { FiSearch } from "react-icons/fi";

//Styles
import styles from "./SearchBar.module.css";

function SearchBar({ placeholder, action, inputName }) {
  const submitForm = () => {
    const searchBar = document.querySelector("form");
    searchBar.submit();
  };

  return (
    <form
      className={styles.searchBar}
      method="GET"
      action={action ? action : ""}
    >
      <FiSearch onClick={submitForm} />
      <input
        className={styles.searchBarInput}
        type="search"
        placeholder={placeholder}
        name={inputName}
        id={inputName}
      />
    </form>
  );
}
export default SearchBar;
