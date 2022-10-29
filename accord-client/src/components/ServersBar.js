import { useState } from "react";
import { Grid, Avatar } from "@mui/material";
import socket from "../utilities/socketClient";

function ServersBar() {
  const [servers, setServers] = useState();

  socket.on("namespacesList", (data) => {
    setServers(data);
  });

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
        />
      ))}
    </Grid>
  );
}

export default ServersBar;
