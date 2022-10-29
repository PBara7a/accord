import { Grid, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import TagIcon from "@mui/icons-material/Tag";

// Placeholder
const rooms = [
  { roomTitle: "General" },
  { roomTitle: "One" },
  { roomTitle: "Two" },
];

function ChannelsBar() {
  return (
    <Grid
      container
      direction="column"
      padding={2}
      sx={{ height: "100%", background: "#3a3c3d" }}
    >
      <Typography variant="h5" component="h1">
        Room
      </Typography>

      {rooms.map((room) => (
        <Stack direction="row" alignItems="center">
          <TagIcon />
          <Typography variant="subtitle1" component="h3">
            {room.roomTitle}
          </Typography>
        </Stack>
      ))}
    </Grid>
  );
}

export default ChannelsBar;
