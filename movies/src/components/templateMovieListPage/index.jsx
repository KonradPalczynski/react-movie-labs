import { useState } from "react";
import Header from "../headerMovieList";
import FilterCard from "../filterMoviesCard";
import MovieList from "../movieList";
import Grid from "@mui/material/Grid";

function MovieListPageTemplate({ movies, title, action }) {
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const [ratingFilter, setRatingFilter] = useState("0");
  const [sortOption, setSortOption] = useState("default");
  const [yearFilter, setYearFilter] = useState("");
  const genreId = Number(genreFilter);
  const minRating = Number(ratingFilter)

  let displayedMovies = movies
    .filter((m) => {
      return m.title.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter((m) => {
      return genreId > 0 ? m.genre_ids.includes(genreId) : true;
    })
    .filter((m) => {
      return m.vote_average >= minRating;
    })
    .filter((m) => {
      return yearFilter === ""
        ? true
        : (m.release_date).startsWith(yearFilter);
    });

    if (sortOption === "title") {
      displayedMovies.sort((a, b) => a.title.localeCompare(b.title));
    } 
    else if (sortOption === "rating") {
      displayedMovies.sort((a, b) => b.vote_average - a.vote_average);
    } 
    else if (sortOption === "newest") {
      displayedMovies.sort((a, b) => b.release_date.localeCompare(a.release_date));
    } 
    else if (sortOption === "oldest") {
      displayedMovies.sort((a, b) => a.release_date.localeCompare(b.release_date));
    } 
    else if (sortOption === "popularity") {
      displayedMovies.sort((a, b) => a.popularity - b.popularity);
    }

  const handleChange = (type, value) => {
    console.log(type,value);
    if (type === "name") setNameFilter(value);
    else if (type === "genre") setGenreFilter(value);
    else if (type === "rating") setRatingFilter(value);
    else if (type === "year") setYearFilter(value);
    else if (type === "sort") setSortOption(value);
  };

  return (
    <Grid container>
      <Grid size={12}>
        <Header title={title} />
      </Grid>
      <Grid container sx={{flex: "1 1 500px"}}>
        <Grid 
          key="find" 
          size={{xs: 12, sm: 6, md: 4, lg: 3, xl: 2}} 
          sx={{padding: "20px"}}
        >
          <FilterCard
            onUserInput={handleChange}
            titleFilter={nameFilter}
            genreFilter={genreFilter}
            ratingFilter={ratingFilter}
            yearFilter={yearFilter}
            sortOption={sortOption}
          />
        </Grid>
          <MovieList action={action} movies={displayedMovies}></MovieList>
      </Grid>
    </Grid>
  );
}
export default MovieListPageTemplate;
