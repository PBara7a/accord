import { useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import TagIcon from "@mui/icons-material/Tag";
import { useSelector, useDispatch } from "react-redux";
import { setChannelData } from "../features/appSlice";

function ChannelsBar() {
  const nsSocket = useSelector((state) => state.app.nsSocket);
  const channels = useSelector((state) => state.app.channels);
  const dispatch = useDispatch();

  useEffect(() => {
    if (nsSocket) {
      nsSocket.on("namespaceRoomLoad", (nsRooms) => {
        dispatch(setChannelData(nsRooms));
      });
    }
  }, [dispatch, nsSocket]);

  return (
    <Grid
      container
      direction="column"
      padding={2}
      sx={{ height: "100%", background: "#3a3c3d", color: "#ccc" }}
    >
      <Typography variant="h5" component="h1" sx={{ color: "#eee" }}>
        Room
      </Typography>

      {channels.map((room, i) => (
        <Stack key={i} direction="row" alignItems="center">
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
