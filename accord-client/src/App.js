import { Grid } from "@mui/material";
import ChannelsBar from "./components/ChannelsBar";
import ServersBar from "./components/ServersBar";

function App() {
  return (
    <Grid container height="100vh">
      <Grid item columns={1}>
        <ServersBar />
      </Grid>
      <Grid item columns={3}>
        <ChannelsBar />
      </Grid>
    </Grid>
  );
}

export default App;
