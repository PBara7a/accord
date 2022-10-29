import { Grid } from "@mui/material";
import ChatHeader from "./ChatHeader";

function Main() {
  return (
    <Grid container padding={2} sx={{ background: "#4e4e4e" }}>
      <ChatHeader />
    </Grid>
  );
}

export default Main;
