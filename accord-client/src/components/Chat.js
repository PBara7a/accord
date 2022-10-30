import { List } from "@mui/material";
import Message from "./Message";
import { useSelector } from "react-redux";

function Chat() {
  const { messages, searchString } = useSelector((state) => state.app);

  const messagesToRender = messages.filter((msg) =>
    msg.text.toLowerCase().includes(searchString.toLowerCase())
  );

  return (
    <List sx={{ flex: 1 }}>
      {messagesToRender.map((msg, i) => {
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
