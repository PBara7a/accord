import { Grid } from "@mui/material";
import ChatHeader from "./ChatHeader";
import MessageInput from "./MessageInput";

function Main() {
  return (
    <Grid container padding={2} sx={{ background: "#4e4e4e" }}>
      <ChatHeader />
      <MessageInput />
    </Grid>
  );
}

export default Main;
