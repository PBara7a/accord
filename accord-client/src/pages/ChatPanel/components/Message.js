import { Avatar, ListItem, ListItemAvatar, ListItemText } from "@mui/material";

function Message({ avatar, username, time, text }) {
  const messageHeader = `${username} ${new Date(time).toLocaleString()}`;
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar alt="user avatar" src={avatar} sx={{ width: 36, height: 36 }} />
      </ListItemAvatar>
      <ListItemText primary={messageHeader} secondary={text} />
    </ListItem>
  );
}

export default Message;
