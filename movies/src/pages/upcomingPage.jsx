import { useQuery } from '@tanstack/react-query';
import PageTemplate from '../components/templateMovieListPage';
import { getUpcomingMovies } from "../api/tmdb-api";
import AddToPlaylistIcon from "../components/cardIcons/addToPlaylist";
import Spinner from"../components/spinner";

const UpcomingPage = () => {
  const { data, error, isLoading, isError } = useQuery({
      queryKey: ['upcoming'],
      queryFn: getUpcomingMovies,
    });
  
    if (isLoading) {
      return <Spinner />;
    }
  
    if (isError) {
      return <h1>{error.message}</h1>;
    }
  
  return (
    <PageTemplate
      title='Upcoming Movies'
      movies={data.results}
      action={(movie) => {
        return <AddToPlaylistIcon movie={movie} />;
      }}
    />
  );
};
export default UpcomingPage;