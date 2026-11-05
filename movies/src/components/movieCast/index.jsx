import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { getMovieCredits } from "../../api/tmdb-api";
import { useQuery } from "@tanstack/react-query";
import Spinner from '../spinner'
import Typography from "@mui/material/Typography";
import { Link } from "react-router";

export default function MovieCast({ movie }) {
    const { data, error, isPending, isError } = useQuery({
    queryKey: ['credits', { id: movie.id }],
    queryFn: getMovieCredits,
  });
  
  if (isPending) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  
  const cast = data.cast.slice(0,15);


  return (
    <>
    <Typography variant="h5" component="h3" sx={{margin: 2}}>
        Cast
    </Typography>

    <TableContainer component={Paper}>
      <Table sx={{minWidth: 550}} aria-label="cast table">
        <TableHead>
          <TableRow>
            <TableCell >Actor</TableCell>
            <TableCell align="right">Character</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cast.map((c) => (
            <TableRow key={c.id}>
              <TableCell component="th" scope="row">
                <Link to={`/person/${c.id}`}>{c.name}</Link>
              </TableCell>
              <TableCell align="right">{c.character}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
