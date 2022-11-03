import { Routes, Route } from "react-router-dom";
import AuthenticateUser from "./components/AuthenticateUser";
import ChatPanel from "./pages/ChatPanel/ChatPanel";
import LoginPage from "./pages/Login/LoginPage";

function App() {
  return (
    <Routes>
      <Route element={<AuthenticateUser />}>
        <Route path="/" element={<ChatPanel />} />
      </Route>

      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
