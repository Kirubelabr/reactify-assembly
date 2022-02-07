import {
  Navigate,
  Route,
  Routes
} from "react-router-dom";
import AdminPage from "../features/admin/AdminPage";
import HomePage from "../features/home/HomePage";
import MeetingPage from "../features/meeting/MeetingPage";
import PollingPage from "../features/polling/PollingPage";
import SignInPage from "../features/user-management/signIn/SignInPage";
import SignUpPage from "../features/user-management/signUp/SignUpPage";

function AppRoutes() {

  return (
    <Routes>
      <Route path="/" element={<Navigate to={'/sign-in'} />} />
      <Route path="home" element={<HomePage />} />
      <Route path="admin" element={<AdminPage />} />
      <Route path="meeting" element={<MeetingPage />} />
      <Route path="polling" element={<PollingPage />} />
      <Route path="sign-in" element={<SignInPage />} />
      <Route path="sign-up" element={<SignUpPage />} />

    </Routes>

  );
}

export default AppRoutes;
