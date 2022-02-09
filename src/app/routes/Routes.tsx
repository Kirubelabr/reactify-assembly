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

const AuthenticatedRoute = (component: any) => {
  const auth = useContext(AuthContext);

  console.log('AUTH FUNCTION: ', auth);
  // @ts-ignore: Object is possibly 'undefined'.
  return auth.isAuthenticated() ? (
    <AppLayout component={component} />
  ) : (
    <Navigate to="/sign-in" />
  )
};

function AppRoutes() {

  return (
    <Routes>
      <Route path="/" element={<Navigate to={'/home'} />} />
      <Route path="home" element={<AppLayout component={<AuthenticatedRoute component={<HomePage />} />} />} />
      <Route path="admin" element={<AuthenticatedRoute component={<AdminPage />} />} />
      <Route path="meeting" element={<MeetingPage />} />
      <Route path="polls" element={<PollingPage />} />
      <Route path="sign-in" element={<SignInPage />} />
    </Routes>
  );
}

export default AppRoutes;
