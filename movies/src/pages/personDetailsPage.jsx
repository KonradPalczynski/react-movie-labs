import Grid from "@mui/material/Grid";
import { useQuery } from "@tanstack/react-query";
import { useParams} from "react-router";
import Typography from "@mui/material/Typography";
import { getPerson } from "../api/tmdb-api";
import PersonHeader from "../components/headerPerson";
import PersonDetails from "../components/personDetails";
import Spinner from "../components/spinner";
import PersonMovies from "../components/personMovies";

const PersonDetailsPage = () => {
    const { id } = useParams();
    const { data: person, error, isPending, isError } = useQuery({
    queryKey: ['person', { id: id }],
    queryFn: getPerson,
  });

  if (isPending) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  


  return (
    <>
      <PersonHeader person={person} />

      <Grid container spacing={5} style={{ padding: "15px" }}>
        <Grid size={{xs: 3}}>
          {person.profile_path ? (
            <img
            src={`https://image.tmdb.org/t/p/w500/${person.profile_path}`}
            alt={person.name}
            style={{width: "100%"}}
            />
          ) : (
            <Typography>No photo available</Typography>
          )}

          </Grid>
            

        <Grid size={{xs: 9}}>
          <PersonDetails person={person}/>
        </Grid>
      </Grid>
      <PersonMovies person={person} />
    </>
  );
};

export default PersonDetailsPage;
