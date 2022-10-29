import { List } from "@mui/material";
import Message from "./Message";

// Placeholder
const messages = [
  {
    text: "Can anyone read this?",
    time: Date.now(),
    username: "pbara7a",
    avatar: "https://www.fillmurray.com/30/30",
  },
  {
    text: "Yes!",
    time: Date.now(),
    username: "Jacob",
    avatar: "https://www.fillmurray.com/30/30",
  },
];

function Chat() {
  return (
    <List sx={{ flex: 1 }}>
      {messages.map((msg) => {
        const { avatar, username, time, text } = msg;
        return (
          <Message
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
