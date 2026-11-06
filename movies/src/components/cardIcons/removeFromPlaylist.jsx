import { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import PlaylistRemoveIcon from "@mui/icons-material/PlaylistRemove";
import { MoviesContext } from "../../contexts/moviesContext";
import Tooltip from "@mui/material/Tooltip";

const RemoveFromPlaylistIcon = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleRemoveFromPlaylist = (e) => {
    e.preventDefault();
    context.removeFromPlaylist(movie);
  };
  return (
    <Tooltip title="Remove from playlist">
    <IconButton
      aria-label="remove from playlist"
      onClick={handleRemoveFromPlaylist}
    >
      <PlaylistRemoveIcon color="primary" fontSize="large" />
    </IconButton>
    </Tooltip>
  );
};

export default RemoveFromPlaylistIcon;
