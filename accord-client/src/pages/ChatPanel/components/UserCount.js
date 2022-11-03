import { Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { useSelector } from "react-redux";

function UserCount() {
  const { membersInChannel } = useSelector((state) => state.app);

  return (
    <Typography
      variant="body1"
      component="p"
      sx={{ display: "flex", alignItems: "center", color: "#999" }}
    >
      {membersInChannel}
      <PersonIcon />
    </Typography>
  );
}

export default UserCount;
