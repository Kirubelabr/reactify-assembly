import { useContext } from "react";
import {
  Navigate,
  Route,
  Routes
} from "react-router-dom";
import AppLayout from "../components/AppLayout";
import { AuthContext } from "../contexts/auth.context";
import AdminPage from "../features/admin/AdminPage";
import HomePage from "../features/home/HomePage";
import MeetingPage from "../features/meeting/MeetingPage";
import PollingPage from "../features/polling/PollingPage";
import SignInPage from "../features/user-management/signIn/SignInPage";

// @ts-ignore: Object is possibly 'undefined'.
const AuthenticatedRoute = ({ component }) => {
  const auth = useContext(AuthContext);

  return auth.isAuthenticated && auth.isAuthenticated() ? (
    component
  ) : (
    <Navigate to="/sign-in" replace={true} />
  )
};

// @ts-ignore: Object is possibly 'undefined'.
const AdminRoute = ({ component }) => {
  const auth = useContext(AuthContext);

  return auth.isAdmin && auth.isAdmin() ? (
    component
  ) : (
    <Navigate to="/sign-in" replace={true} />
  )
};

function AppRoutes() {

  return (
    <Routes>
      <Route path="/" element={<Navigate to={'/home'} />} />
      <Route path="home" element={<AuthenticatedRoute component={<AppLayout component={<HomePage />} />} />} />
      <Route path="admin" element={<AdminRoute component={<AppLayout component={<AdminPage />} />} />} />
      <Route path="meeting" element={<MeetingPage />} />
      <Route path="polls" element={<PollingPage />} />
      <Route path="sign-in" element={<SignInPage />} />
    </Routes>
  );
}

export default AppRoutes;
