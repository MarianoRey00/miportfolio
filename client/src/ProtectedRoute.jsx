import React from "react";
import { useAuth } from "./context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";
import PulseLoader from "react-spinners/PulseLoader";
import Navbar from "../src/components/Navbar";

function ProtectedRoute() {
	const { loading, isAuthenticated } = useAuth();

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
	if (!loading && !isAuthenticated) {
		return <Navigate to="/login" replace />;
	}
	return <Outlet />;
}

export default ProtectedRoute;
