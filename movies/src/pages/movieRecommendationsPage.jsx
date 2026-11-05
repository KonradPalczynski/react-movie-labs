import { useParams } from 'react-router';
import PageTemplate from "../components/templateMovieListPage";
import { getMovieRecommendations } from '../api/tmdb-api'
import { useQuery } from '@tanstack/react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites';


const MovieRecommendationsPage = () => {
    const { id } = useParams();
    const { data, error, isPending, isError  } = useQuery({
       queryKey: ['recommendations', {id: id}],
       queryFn: getMovieRecommendations,
  });

  if (isPending) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }


  return (
         <PageTemplate
           title = "Recommend Movies"
           movies={data.results}
           action = {(movie) => {
            return <AddToFavoritesIcon movie={movie} />;
           }}
        />
        
  );
};

export default MovieRecommendationsPage;
