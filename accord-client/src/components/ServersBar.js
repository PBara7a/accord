import { Grid, Avatar } from "@mui/material";

// Placeholders
const servers = [
  {
    img: "https://imgs.search.brave.com/prjQBDSyJtEpt6TzO4mzQasHpl5wY2YsJ4SI2uF3LH0/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vc3VwZXJi/b3dsLWFkcy5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMTgv/MDEvcHJpbmdsZXNf/bG9nby5qcGVnP2Zp/dD0yNzAwJTJDMjA4/Ng",
    namespaceTitle: "Pringles1",
  },
  {
    img: "https://imgs.search.brave.com/prjQBDSyJtEpt6TzO4mzQasHpl5wY2YsJ4SI2uF3LH0/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vc3VwZXJi/b3dsLWFkcy5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMTgv/MDEvcHJpbmdsZXNf/bG9nby5qcGVnP2Zp/dD0yNzAwJTJDMjA4/Ng",
    namespaceTitle: "Pringles2",
  },
  {
    img: "https://imgs.search.brave.com/prjQBDSyJtEpt6TzO4mzQasHpl5wY2YsJ4SI2uF3LH0/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vc3VwZXJi/b3dsLWFkcy5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMTgv/MDEvcHJpbmdsZXNf/bG9nby5qcGVnP2Zp/dD0yNzAwJTJDMjA4/Ng",
    namespaceTitle: "Pringles3",
  },
];

function ServersBar() {
  return (
    <Grid
      container
      direction="column"
      padding={2}
      gap={1}
      sx={{ height: "100%", background: "#292b2c" }}
    >
      {servers.map((server, i) => (
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
