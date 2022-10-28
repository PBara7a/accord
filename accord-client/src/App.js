import { Grid } from "@mui/material";
import ServersBar from "./components/ServersBar";

function App() {
  return (
    <Grid container>
      <Grid item columns={1}>
        <ServersBar />
      </Grid>
    </Grid>
  );
}

export default App;
