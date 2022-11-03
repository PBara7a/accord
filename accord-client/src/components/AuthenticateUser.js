import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

function AuthenticateUser({ redirectPath = "/login" }) {
  const { isLoggedIn } = useSelector((state) => state.user);

  if (!isLoggedIn) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
}

export default AuthenticateUser;
