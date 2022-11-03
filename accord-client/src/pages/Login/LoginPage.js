import { useEffect } from "react";
import jwt_decode from "jwt-decode";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useSelector, useDispatch } from "react-redux";
import { userLogin } from "../../features/userSlice";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "631714661832-6kualj6mchp038nf3n49i76dqemfmoa6.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outlined",
      size: "large",
      text: "Continue with Google",
      width: "400",
    });

    function handleCallbackResponse(response) {
      const userObject = jwt_decode(response.credential);

      const createdUser = {
        email: userObject.email,
        username: userObject.name,
        avatar: userObject.picture,
      };

      dispatch(userLogin(createdUser));
      navigate("../", { replace: true });
    }
  }, []);

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "primary.main" }} />

        <Typography component="h1" variant="h5" mb={3}>
          Sign in
        </Typography>

        <div id="signInDiv"></div>
      </Box>
    </Container>
  );
}

export default LoginPage;
