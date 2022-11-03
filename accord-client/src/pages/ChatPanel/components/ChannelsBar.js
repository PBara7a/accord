import { Grid, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import TagIcon from "@mui/icons-material/Tag";
import { useSelector, useDispatch } from "react-redux";
import { useWebsocket } from "../../../contexts/SocketManager";
import { setCurrentChannel } from "../../../features/appSlice";
import LoggedInUser from "./LoggedInUser";

function ChannelsBar() {
  const { channels, currentServer } = useSelector((state) => state.app);
  const { nsSocket } = useWebsocket();
  const dispatch = useDispatch();

  const joinChannel = (channel) => {
    nsSocket.emit("joinRoom", channel);
    dispatch(setCurrentChannel(channel));
  };

  return (
    <Grid
      container
      direction="column"
      justifyContent="space-between"
      sx={{ height: "100%", background: "#3a3c3d", color: "#ccc" }}
    >
      <Grid item padding={2}>
        <Typography variant="h5" component="h1" sx={{ color: "#eee" }}>
          {currentServer}
        </Typography>

        {channels.map((room, i) => (
          <Stack
            key={i}
            direction="row"
            alignItems="center"
            onClick={() => joinChannel(room.roomTitle)}
            sx={{ cursor: "pointer" }}
          >
            <TagIcon />
            <Typography variant="subtitle1" component="h3">
              {room.roomTitle}
            </Typography>
          </Stack>
        ))}
      </Grid>

      <Grid item>
        <LoggedInUser />
      </Grid>
    </Grid>
  );
}

export default ChannelsBar;
