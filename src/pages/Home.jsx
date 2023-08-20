import List from "../components/items/List";

function Home() {
  return (
    <List
      fetchUrl="https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1"
      linkPath="/movies"
      reloadDocument={true}
    />
  );
}
export default Home;
