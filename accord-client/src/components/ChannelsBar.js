import { Grid, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import TagIcon from "@mui/icons-material/Tag";
import { useSelector } from "react-redux";
import { useWebsocket } from "../contexts/SocketManager";

function ChannelsBar() {
  const { channels, currentServer } = useSelector((state) => state.app);
  const { joinChannel } = useWebsocket();

  return (
    <Grid
      container
      direction="column"
      padding={2}
      sx={{ height: "100%", background: "#3a3c3d", color: "#ccc" }}
    >
      <Typography variant="h5" component="h1" sx={{ color: "#eee" }}>
        {currentServer}
      </Typography>

      {channels.map((room, i) => (
        <Stack
          key={i}
          direction="row"
          alignItems="center"
          onClick={() => joinChannel(room.roomTitle)}
        >
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
