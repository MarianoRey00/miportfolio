import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import DashboardPage from "../pages/DashboardPage";
import DashboardProfilePage from "../pages/DashboardProfilePage";
import Admin from "../pages/Admin";
import PortfolioPage from "../pages/PortfolioPage";
import ProjectDetailPage from "../pages/ProjectDetailPage";
import Error404 from "../pages/Error404";
import ProtectedRoute from "../ProtectedRoute";
import AdminProtectedRoute from "../AdminProtectedRoute";
import AdminUserDetailPage from "../pages/AdminUserDetailPage";
import UpgradePage from "../pages/UpgradePage";
import Plans from "../pages/Plans";

function Router() {
  return (
    <div className="text-orange-50">
      <Routes>
        <Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/panel" element={<DashboardPage />}></Route>
            <Route
              path="/panel/perfil"
              element={<DashboardProfilePage />}
            ></Route>
            <Route path="/panel/cambiar-plan" element={<UpgradePage />}></Route>
            <Route path="/panel/planes" element={<Plans />}></Route>
          </Route>

          <Route element={<AdminProtectedRoute />}>
            <Route path="/admin/usuarios" element={<Admin />}></Route>
            <Route
              path="/admin/:username"
              element={<AdminUserDetailPage />}
            ></Route>
          </Route>

          <Route path="/:username" element={<PortfolioPage />}></Route>
          <Route path="/:username/:id" element={<ProjectDetailPage />}></Route>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/error-404" element={<Error404 />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default Router;
