import { Grid, Typography } from "@mui/material";
import SearchBar from "./SearchBar";
import UserCount from "./UserCount";
import { useSelector } from "react-redux";

function ChatHeader() {
  const { currentChannel } = useSelector((state) => state.app);

  return (
    <Grid container alignItems="center" gap={2} sx={{ color: "#eee" }}>
      <Grid item>
        <Typography variant="h5" component="h2">
          {currentChannel}
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
