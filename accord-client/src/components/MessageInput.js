import { useState } from "react";
import { Paper, InputBase } from "@mui/material";
import { useWebsocket } from "../contexts/SocketManager";

function MessageInput() {
  const [message, setMessage] = useState("");
  const { nsSocket } = useWebsocket();

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessageToServer(message);
    setMessage("");
  };

  const sendMessageToServer = (message) => {
    nsSocket.emit("newMessageToServer", { text: message });
  };

  return (
    <Paper
      onSubmit={handleSubmit}
      component="form"
      sx={{
        background: "#292b2c",
        p: "2px 4px",
        display: "flex",
        height: 40,
        width: "100%",
      }}
    >
      <InputBase
        fullWidth
        sx={{ ml: 1, color: "#fff" }}
        placeholder="Message Room"
        value={message}
        onChange={handleChange}
      />
    </Paper>
  );
}

export default MessageInput;
