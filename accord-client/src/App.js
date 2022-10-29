import { Grid } from "@mui/material";
import ChannelsBar from "./components/ChannelsBar";
import Main from "./components/Main";
import ServersBar from "./components/ServersBar";

function App() {
  return (
    <Grid container height="100vh">
      <Grid item xs={1}>
        <ServersBar />
      </Grid>
      <Grid item xs={2}>
        <ChannelsBar />
      </Grid>
      <Grid item xs={9}>
        <Main />
      </Grid>
    </Grid>
  );
}

export default App;
