import { List } from "@mui/material";
import Message from "./Message";
import { useSelector } from "react-redux";

function Chat() {
  const { messages } = useSelector((state) => state.app);

  return (
    <List sx={{ flex: 1 }}>
      {messages.map((msg, i) => {
        const { avatar, username, time, text } = msg;
        return (
          <Message
            key={i}
            avatar={avatar}
            username={username}
            time={time}
            text={text}
          />
        );
      })}
    </List>
  );
}

export default Chat;
