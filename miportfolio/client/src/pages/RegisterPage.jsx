import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function RegisterPage() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const { signUp, isAuthenticated } = useAuth();
	const navigate = useNavigate();

	useEffect(() => {
		if (isAuthenticated) {
			navigate("/admin");
		}
	}, [isAuthenticated]);

	return (
		<section className="flex justify-center items-center h-[450px] w-[800px] bg-zinc-800 container m-auto">
			<div className="m-auto">
				<form
					onSubmit={handleSubmit(async (values) => {
						signUp(values);
					})}
				>
					<div className="mb-4 w-[500px]">
						<label className="block text-gray-200  mb-2">
							Usuario:
							<input
								type="text"
								{...register("username", { required: true })}
								className="px-3 py-2 bg-white rounded-3xl w-[550px] text-black"
								placeholder="miportfolio.com/"
							/>
							{errors.username && (
								<p className="text-red-600">El usuario es requerido</p>
							)}
						</label>
					</div>
					<div className="mb-4 w-[500px]">
						<label className="block text-gray-200 mb-2">
							Email:
							<input
								type="email"
								{...register("email", { required: true })}
								className="px-3 py-2 bg-white rounded-3xl w-[550px] text-black"
								placeholder="Email"
							/>
							{errors.email && (
								<p className="text-red-600">El email es requerido</p>
							)}
						</label>
					</div>
					<div className="mb-4 w-[500px]">
						<label className="block text-gray-200 mb-2">
							Contraseña:
							<input
								type="password"
								{...register("password", { required: true })}
								className="px-3 py-2 bg-white rounded-3xl w-[550px] text-black"
								placeholder="Contraseña"
							/>
							{errors.password && (
								<p className="text-red-600">La contraseña es requerida</p>
							)}
						</label>
					</div>

					<button
						type="submit"
						className="text-black px-3 py-2 bg-white rounded-3xl w-[550px]"
					>
						Register
					</button>
				</form>
			</div>
		</section>
	);
}

export default RegisterPage;
