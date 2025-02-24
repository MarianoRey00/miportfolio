import { useAuth } from "./context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";
import PulseLoader from "react-spinners/PulseLoader";
import Navbar from "../src/components/Navbar";

function AdminProtectedRoute() {
	const { loading, isAdmin} = useAuth();

	if (loading) {
		return (
			<>
				<Navbar background="#18181b" border="#fff7ed" />
				<div className="h-screen flex justify-center items-center">
					<PulseLoader
						color="#ffffff"
						loading={loading}
						size={10}
						className="mb-36"
					/>
				</div>
			</>
		);
	}
	if (!loading, !isAdmin) {
		return <Navigate to="/" replace />;
	}
	return <Outlet />;
}

export default AdminProtectedRoute;
