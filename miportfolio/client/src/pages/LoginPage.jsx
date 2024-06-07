import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Pattern from "../assets/pattern2.png";
import { Link } from "react-router-dom";

function LoginPage() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const { signIn, isAuthenticated } = useAuth();
	const navigate = useNavigate();

	useEffect(() => {
		if (isAuthenticated) {
			navigate("/admin");
		}
	}, [isAuthenticated]);

	return (
		<section className="flex bg-orange-50">
			<div className="flex flex-col justify-center items-center w-[40%]">
				<div className="">
					<p className="text-3xl mb-8 text-left text-zinc-900">Ingresar</p>
					<form
						onSubmit={handleSubmit(async (values) => {
							signIn(values);
						})}
					>
						<div className="mb-4 w-96">
							<label className="block mb-2 text-zinc-900">
								Email:
								<input
									type="email"
									{...register("email", { required: true })}
									className=" text-zinc-900 px-3 py-2 border-2 border-zinc-900 rounded-3xl w-96 bg-orange-50"
									placeholder="Email"
								/>
								{errors.email && (
									<p className="text-red-600">El email es requerido</p>
								)}
							</label>
						</div>
						<div className="mb-4 w-96">
							<label className="block text-zinc-900 mb-2">
								Contraseña:
								<input
									type="password"
									{...register("password", { required: true })}
									className="text-zinc-900 border-2 border-zinc-900 px-3 py-2 bg-orange-50 rounded-3xl w-96 "
									placeholder="Contraseña"
								/>
								{errors.password && (
									<p className="text-red-600">La contraseña es requerida</p>
								)}
							</label>
						</div>

						<button
							type="submit"
							className="text-orange-50 px-3 py-2 bg-zinc-900 rounded-3xl w-96"
						>
							Login
						</button>
						<p className="text-center mt-6 text-zinc-900">
							¿No estas registrado?{" "}
							<Link to="/register" className="underline">
								Registrarse
							</Link>
						</p>
					</form>
				</div>
			</div>
			<div class="w-[60%]">
				<img src={Pattern} className="h-[567px]" alt="" />
			</div>
		</section>
	);
}

export default LoginPage;
