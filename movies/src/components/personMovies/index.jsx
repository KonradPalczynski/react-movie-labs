import { useQuery } from "@tanstack/react-query";
import Spinner from '../spinner'
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { getPersonMovieCredits } from "../../api/tmdb-api";
import MovieList from "../movieList";
import AddToFavoritesIcon from "../cardIcons/addToFavorites";


export default function PersonMovies({ person }) {
    const { data, error, isPending, isError } = useQuery({
    queryKey: ['personMovies', { id: person.id }],
    queryFn: getPersonMovieCredits,
  });
  
  if (isPending) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  
  const movies = [...data.cast]
    .sort((a, b) => b.popularity - a.popularity)
    .slice(0,10);

  return (
    <>
    <Typography variant="h5" component="h3" sx={{margin: 2}}>
        Known for
    </Typography>

    <Grid container>
        <MovieList
        movies={movies}
        action={(movie) => {
            return <AddToFavoritesIcon movie={movie} />;
        }}
        />
    </Grid>
    </>
  );
}
