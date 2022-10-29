import { Grid, Typography } from "@mui/material";
import SearchBar from "./SearchBar";
import UserCount from "./UserCount";

function ChatHeader() {
  return (
    <Grid container alignItems="center" gap={2}>
      <Grid item>
        <Typography variant="h5" component="h2">
          New Articles
        </Typography>
      </Grid>

      <Grid item>
        <UserCount />
      </Grid>

      <Grid item marginLeft="auto">
        <SearchBar />
      </Grid>
    </Grid>
  );
}

export default ChatHeader;
