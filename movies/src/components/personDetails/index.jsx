import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import CakeIcon from "@mui/icons-material/Cake";
import PlaceIcon from "@mui/icons-material/Place"


const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};
const chip = { margin: 0.5 };

const PersonDetails = ({ person }) => {  // Don't miss this!


  return (
    <>
      <Typography variant="h5" component="h3">
        Biography
      </Typography>

      <Typography variant="h6" component="p">
        {person.biography }
      </Typography>

      <Paper 
        component="ul" 
        sx={{...root}}
      >
        <li>
          <Chip label="Details" sx={{...chip}} color="primary" />
        </li>

        <li>
            <Chip label ={person.known_for_department} sx={{ ...chip}} />
        </li>
        {person.birthday && (
          <li>
            <Chip icon={<CakeIcon></CakeIcon>} label={`Born: ${person.birthday}`} sx={{...chip}} />
          </li>
        )}

        {person.place_of_birth && (
            <li>
                <Chip icon={<PlaceIcon></PlaceIcon>} label={person.place_of_birth} sx={{ ...chip}} />
            </li>
        )}
      </Paper>
     </>
  );
};
export default PersonDetails;
