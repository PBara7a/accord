import { Avatar, Typography, IconButton, Box } from "@mui/material";
import { Stack } from "@mui/system";
import { useSelector, useDispatch } from "react-redux";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import { userLogout } from "../../../features/userSlice";
import { useNavigate } from "react-router-dom";

function LoggedInUser() {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const handleLogout = () => {
    dispatch(userLogout());
    navigate("./login", { replace: true });
  };

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      padding={1}
      sx={{ background: "#313131" }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <Avatar
          alt="user avatar"
          src={user.avatar}
          sx={{ width: 32, height: 32 }}
        />

        <Typography component="p" variant="body1">
          {user.username}
        </Typography>
      </Box>

      <IconButton color="inherit" aria-label="logout" onClick={handleLogout}>
        <PowerSettingsNewIcon />
      </IconButton>
    </Stack>
  );
}

export default LoggedInUser;
