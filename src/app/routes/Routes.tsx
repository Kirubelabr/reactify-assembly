import {
  Navigate,
  Route,
  Routes
} from "react-router-dom";
import HomePage from "../features/home/HomePage";

function AppRoutes() {

  return (
    <Routes>
      <Route path="/" element={<Navigate to={'/home'} />} />
      <Route path="home" element={<HomePage />} />

    </Routes>

  );
}

export default AppRoutes;
