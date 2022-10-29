import { Grid, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

function UserCount() {
  return (
    <Typography
      variant="body1"
      component="p"
      sx={{ display: "flex", alignItems: "center", color: "#999" }}
    >
      1
      <PersonIcon />
    </Typography>
  );
}

export default UserCount;
