import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from "@tanstack/react-query";
import { getSearchMovies } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const searchMoviesPage = () => {
    const [searchText, setSearchText] = useState("");
    const [query, setQuery] = useState("");


  const { data, error, isLoading, isError } = useQuery({
    queryKey: ['search', { query: query}],
    queryFn: getSearchMovies,
    enabled: query !== "",
  });

  const handleSearch = (e) => {
    e.preventDefault();
    setQuery(searchText.trim());
  };

  return (
    <>
    <Box 
    component="form"
    onSubmit={handleSearch}
    sx={{display: "flex", gap:2, padding:2, justifyContent: "center"}}
    >
        <TextField
        label="Search all movies"
        variant="outlined"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        sx={{minWidth:"50%"}}
        />
        <Button type = "submit" variant="contained">
            Search
        </Button>
    </Box>

    {query === "" ? (
     <Typography variant="h6" sx={{textAlign: "center"}}>
        Type a movie title to search TMDB.
     </Typography>   
    ) : isLoading ? (
        <Spinner/>
    ) : isError ? (
        <h1>{error.message}</h1>
    ) : (
        <PageTemplate
        title={`Results for "${query}"`}
        movies={data.results}
        action={(movie) => {
            return <AddToFavoritesIcon movie ={movie} />;
        }}
        />
    )}
    </>
  );
};

        
        
        
  


export default searchMoviesPage;
