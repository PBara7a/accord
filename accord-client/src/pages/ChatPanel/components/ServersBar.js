import { Grid, Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { useWebsocket } from "../../../contexts/SocketManager";

function ServersBar() {
  const servers = useSelector((state) => state.app.servers);
  const { updateSocket } = useWebsocket();

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
          sx={{ width: 48, height: 48, cursor: "pointer" }}
          onClick={() => updateSocket(server.endpoint)}
        />
      ))}
    </Grid>
  );
}

export default ServersBar;
