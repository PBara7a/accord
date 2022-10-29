import { Grid } from "@mui/material";
import ChannelsBar from "./components/ChannelsBar";
import Main from "./components/Main";
import ServersBar from "./components/ServersBar";

function App() {
  return (
    <Grid container height="100vh">
      <Grid item xs={1} md={0.7} lg={0.5}>
        <ServersBar />
      </Grid>
      <Grid item xs={3} md={2} lg={2}>
        <ChannelsBar />
      </Grid>
      <Grid item xs={8} md={9.3} lg={9.5}>
        <Main />
      </Grid>
    </Grid>
  );
}

export default App;
