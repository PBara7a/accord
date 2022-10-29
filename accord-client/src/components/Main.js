import { Grid } from "@mui/material";
import Chat from "./Chat";
import ChatHeader from "./ChatHeader";
import MessageInput from "./MessageInput";

function Main() {
  return (
    <Grid
      container
      direction="column"
      padding={2}
      height={"100%"}
      sx={{ background: "#4e4e4e" }}
    >
      <ChatHeader />
      <Chat />
      <MessageInput />
    </Grid>
  );
}

export default Main;
