import { Avatar, Box, Typography, Container, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { userLogin } from "../../features/userSlice";
import { useNavigate } from "react-router-dom";
import {
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../configs/firebaseConfig";

function LoginPage() {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const login = async (method) => {
    let result;

    try {
      if (method === "Google") {
        result = await signInWithPopup(auth, new GoogleAuthProvider());
      } else if (method === "GitHub") {
        result = await signInWithPopup(auth, new GithubAuthProvider());
      }

      const user = {
        username: result.user.displayName,
        avatar: result.user.photoURL,
      };

      dispatch(userLogin(user));
      navigate("../", { replace: true });
    } catch (err) {
      console.error(err.message);
      console.log(err.code);
    }
  };

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

        <Button
          fullWidth
          variant="outlined"
          sx={{ marginBottom: "8px" }}
          onClick={() => login("Google")}
        >
          Continue with Google
        </Button>
        <Button fullWidth variant="outlined" onClick={() => login("GitHub")}>
          Continue with GitHub
        </Button>
      </Box>
    </Container>
  );
}

export default LoginPage;
