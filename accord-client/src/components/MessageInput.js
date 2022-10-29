import { Paper, InputBase } from "@mui/material";

function MessageInput() {
  return (
    <Paper
      component="form"
      sx={{
        background: "#292b2c",
        p: "2px 4px",
        display: "flex",
        height: 40,
        width: "100%",
      }}
    >
      <InputBase sx={{ ml: 1, color: "#fff" }} placeholder="Message Room" />
    </Paper>
  );
}

export default MessageInput;
