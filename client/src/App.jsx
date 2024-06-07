import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import AdminPage from "./pages/AdminPage";
import ProjectFormPage from "./pages/ProjectFormPage";
// import EditFormPage from './pages/EditFormPage'
import AdminProfilePage from "./pages/AdminProfilePage";
import ProjectDeletePage from "./pages/ProjectDeletePage";
import PortfolioPage from "./pages/PortfolioPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import ProtectedRoute from "./ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";
import { ProjectProvider } from "./context/ProjectContext";
import Navbar from "./components/Navbar";

function App() {
	return (
		<AuthProvider>
			<ProjectProvider>
				<BrowserRouter>
					<Navbar />
					<div className="text-orange-50">
						<Routes>
							<Route path="/" element={<HomePage />}></Route>
							<Route path="/register" element={<RegisterPage />}></Route>
							<Route path="/login" element={<LoginPage />}></Route>

							<Route element={<ProtectedRoute />}>
								<Route path="/admin" element={<AdminPage />}></Route>
								<Route
									path="/admin/create"
									element={<ProjectFormPage />}
								></Route>
								<Route
									path="/admin/:id/edit"
									element={<ProjectFormPage />}
								></Route>
								<Route
									path="/admin/:id/delete"
									element={<ProjectDeletePage />}
								></Route>
								<Route
									path="/admin/profile"
									element={<AdminProfilePage />}
								></Route>
							</Route>
							<Route path="/:user" element={<PortfolioPage />}></Route>
							<Route path="/:user/:id" element={<ProjectDetailPage />}></Route>
						</Routes>
					</div>
				</BrowserRouter>
			</ProjectProvider>
		</AuthProvider>
	);
}

export default App;
