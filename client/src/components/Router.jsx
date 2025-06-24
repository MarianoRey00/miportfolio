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
import UsersPage from "../pages/UsersPage";
import AdminUserDetailPage from "../pages/AdminUserDetailPage";
import UpgradePage from "../pages/UpgradePage";
import Plans from "../pages/Plans";
import Sales from "../pages/Sales";
import AdminPlans from "../pages/AdminPlans";
import CreatePlan from "../pages/CreatePlan";
import EditPlan from "../pages/EditPlan";
import Success from "../pages/Success";
import Error from "../pages/Error";
import Pending from "../pages/Pending";

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
            <Route path="/panel/compra-exitosa" element={<Success />}></Route>
            <Route path="/panel/compra-fallida" element={<Error />}></Route>
            <Route path="/panel/compra-pendiente" element={<Pending />}></Route>
          </Route>

          <Route element={<AdminProtectedRoute />}>
            <Route path="/admin" element={<Admin />}>
              <Route path="usuarios" element={<UsersPage />} />
              <Route path="ventas" element={<Sales />} />
              <Route path="planes" element={<AdminPlans />} />
              <Route path="planes/crear-plan" element={<CreatePlan />} />
              <Route path="planes/editar-plan/:id" element={<EditPlan />} />
              <Route path=":username" element={<AdminUserDetailPage />} />
            </Route>
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
