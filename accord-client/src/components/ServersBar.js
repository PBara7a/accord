import { useEffect } from "react";
import { Grid, Avatar } from "@mui/material";
import socket from "../utilities/socketClient";
import { useSelector, useDispatch } from "react-redux";
import { setEndpoints, connectToServer } from "../features/appSlice";

function ServersBar() {
  const servers = useSelector((state) => state.app.endpoints);
  const dispatch = useDispatch();

  useEffect(() => {
    socket.on("namespacesList", (data) => {
      dispatch(setEndpoints(data));
    });
  }, [dispatch]);

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      paddingY={2}
      gap={1}
      sx={{ height: "100%", background: "#292b2c" }}
    >
      {servers?.map((server, i) => (
        <Avatar
          key={i}
          alt={server.namespaceTitle}
          src={server.img}
          sx={{ width: 48, height: 48 }}
          onClick={() => dispatch(connectToServer(server.endpoint))}
        />
      ))}
    </Grid>
  );
}

export default ServersBar;
