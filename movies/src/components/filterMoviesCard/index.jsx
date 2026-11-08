import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import img from '../../images/pexels-dziana-hasanbekava-5480827.jpg';
import { getGenres } from "../../api/tmdb-api";
import { useQuery } from '@tanstack/react-query';
import Spinner from '../spinner';
import Button from "@mui/material/Button";



const formControl = 
  {
    margin: 1,
    minWidth: "90%",
    backgroundColor: "background.paper"
  };

export default function FilterMoviesCard(props) {

    const { data, error, isPending, isError } = useQuery({
    queryKey: ['genres'],
    queryFn: getGenres,
  });

  if (isPending) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const genres = data.genres;
  if (genres[0].name !== "All"){
    genres.unshift({ id: "0", name: "All" });
  }

  const handleChange = (e, type, value) => {
    e.preventDefault();
    props.onUserInput(type, value); 
  };

  const handleTextChange = (e, props) => {
    handleChange(e, "name", e.target.value);
  };

  const handleRatingChange = (e) => {
    handleChange(e, "rating", e.target.value);
  };

  const handleYearChange = (e) => {
    handleChange(e, "year", e.target.value);
  };

  const handleSortChange = (e) => {
    handleChange(e, "sort", e.target.value)
  };

  const handleGenreChange = (e) => {
    handleChange(e, "genre", e.target.value);
  };

  const handleReset = () => {
    props.onUserInput("name", "");
    props.onUserInput("genre", "0");
    props.onUserInput("rating", "0");
    props.onUserInput("year", "");
    props.onUserInput("sort", "default");
  }




  return (
    <Card 
      sx={{
        backgroundColor: "background.paper"
      }} 
      variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h1">
          <SearchIcon fontSize="large" />
          Filter the movies.
        </Typography>
            <TextField
      sx={{...formControl}}
      id="filled-search"
      label="Search field"
      type="search"
      variant="filled"
      value={props.titleFilter}
      onChange={handleTextChange}
    />

        <FormControl sx={{...formControl}}>
          <InputLabel id="genre-label">Genre</InputLabel>
            <Select
    labelId="genre-label"
    id="genre-select"
    defaultValue=""
    value={props.genreFilter}
    onChange={handleGenreChange}
    notched
    label="Genre"
  >

            {genres.map((genre) => {
              return (
                <MenuItem key={genre.id} value={genre.id}>
                  {genre.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>

        <FormControl sx={{...formControl}}>
          <InputLabel id="rating-label">Minimum Rating</InputLabel>
            <Select
    labelId="rating-label"
    id="rating-select"
    value={props.ratingFilter}
    onChange={handleRatingChange}
    notched
    label="Minimum Rating"
             >
          <MenuItem value="0">Any</MenuItem>
          <MenuItem value="5">+5</MenuItem>
          <MenuItem value="6">+6</MenuItem>
          <MenuItem value="7">+7</MenuItem>
          <MenuItem value="8">+8</MenuItem>

            
          </Select>
        </FormControl>

        <FormControl sx={{...formControl}}>
          <InputLabel id="decade-label" shrink >Decade</InputLabel>
            <Select
    labelId="decade-label"
    id="decade-select"
    value={props.yearFilter}
    onChange={handleYearChange}
    displayEmpty
    notched
    label="Decade"
             >
          <MenuItem value="">Any</MenuItem>
          <MenuItem value="202">2020s</MenuItem>
          <MenuItem value="201">2010s</MenuItem>
          <MenuItem value="200">2000s</MenuItem>
          <MenuItem value="199">1990s</MenuItem>
          <MenuItem value="198">1980s</MenuItem>
          <MenuItem value="197">1970s</MenuItem>
          </Select>
          </FormControl>

        <FormControl sx={{...formControl}}>
          <InputLabel id="sort-label">Sort by</InputLabel>
            <Select
    labelId="sort-label"
    id="sort-select"
    value={props.sortOption}
    onChange={handleSortChange}
    notched
    label="Sort By"
             >
          <MenuItem value="default">Any</MenuItem>
          <MenuItem value="title">Title (A-Z)</MenuItem>
          <MenuItem value="rating">Rating (High to Low)</MenuItem>
          <MenuItem value="newest">Release Date (newest)</MenuItem>
          <MenuItem value="oldest">Release Date (oldest)</MenuItem>
          <MenuItem value="popularity">Popularity</MenuItem>

            
          </Select>
        </FormControl>

        
      <Button
      variant="outlined"
      onClick={handleReset}
      sx={{ margin:1, width:"90%"}}
      >
        Reset Filters
      </Button>
      </CardContent>
      </Card>
  );
}
