import React from "react";
import { Link } from "react-router-dom";
import Logo from "../components/Logo.jsx";
import Logo2 from "../components/Logo2.jsx";
import CellMockup from "../assets/Mockup.png";
import Navbar from "../components/Navbar";

function HomePage() {
	return (
		<>
			<Navbar background={"#fff7ed"} border={"1px solid #18181b"} />

			<section className="flex flex-col justify-between items-center md:items-start bg-orange-50 px-10 py-12 gap-6 md:flex md:flex-row md:justify-between md:bg-orange-50 md:px-10 md:py-12">
				<div className="md:w-[50%] text-customColor-blue ">
					<h1 className="text-3xl  font-bold sm:text-4xl md:text-5xl lg:text-7xl">
						<span>
							Crea tu portfolio online en minutos con{" "}
							<span className="hidden">miportfolio</span>
						</span>
						<Logo2 className="w-[230px] h-[60px] lg:w-[400px] lg:h-[120px] inline-block lg:ml-4" />
						.
					</h1>
					<p className="text-lg  mt-8 md:text-xl">
						Empezá a usar la mejor página de Link in Bio para compartir tus
						trabajos.
					</p>
					<Link
						to="/register"
						className="bg-customColor-blue mt-12 text-orange-50 w-56 h-12 py-3 px-8 block md:h-16 md:py-5 hover:bg-slate-900"
					>
						Empezar ahora
						<svg
							className="inline ml-4"
							width="24"
							height="12"
							viewBox="0 0 31 16"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M0 8L30 8" stroke="white" stroke-width="2" />
							<path
								d="M30 7.99167C26.6667 8.12486 20 6.713 20 0"
								stroke="white"
								stroke-width="2"
							/>
							<path
								d="M30 8.00833C26.6667 7.87514 20 9.287 20 16"
								stroke="white"
								stroke-width="2"
							/>
						</svg>
					</Link>
				</div>
				<div className="w-full xxs:w-[95%] xs:w-[80%] md:w-[25%] flex justify-center">
					<img
						src={CellMockup}
						alt=""
						className="Imagen de un perfil de miportfolio."
					/>
				</div>
			</section>

			<section className="bg-customColor-blue px-8 py-32">
				<div className="flex flex-col border border-white px-6 py-16 rounded-xl gap-4 md:flex-row lg:gap-16">
					<div className="lg:w-[50%]">
						<h2 className="text-3xl mb-4 md:text-4xl lg:text-5xl">
							¡Compartí tu trabajo!
						</h2>
						<p className="text-base mb-8 md:text-lg font-sans font-medium">
							miportfolio permite subir fotos, videos y archivos PDF, haciendolo
							ideal para un sin fin de áreas.
						</p>
						<Link to="/register">
							<button className="hidden md:block rounded-lg py-4 px-8 bg-customColor-purple">
								Registrarse
							</button>
						</Link>
					</div>
					<div className="grid gap-4 md:gap-2 lg:gap-8 xs:grid-cols-2 lg:grid-cols-3">
						<div className="bg-customColor-purple text-xs px-2 h-10 rounded flex items-center justify-center sm:text-sm sm:px-4 lg:text-base lg:w-32 lg:px-0">
							<p>Cocina</p>
						</div>
						<div className="bg-customColor-purple text-xs px-2 h-10 rounded flex items-center justify-center sm:text-sm sm:px-4 lg:text-base">
							<p>Música</p>
						</div>
						<div className="bg-customColor-purple text-xs px-4 h-10 rounded flex items-center justify-center sm:text-sm sm:px-4 lg:text-base lg:w-32 lg:px-0">
							<p>Pintura</p>
						</div>
						<div className="bg-customColor-purple text-xs px-4 h-10 rounded flex items-center justify-center sm:text-sm sm:px-4 lg:text-base">
							<p>Programación</p>
						</div>
						<div className="bg-customColor-purple text-xs px-4 h-10 rounded flex items-center justify-center sm:text-sm sm:px-4 lg:text-base lg:w-32 lg:px-0">
							<p>Animación</p>
						</div>
						<div className="bg-customColor-purple text-xs px-4 h-10 rounded flex items-center justify-center sm:text-sm sm:px-4 lg:text-base lg:w-32 lg:px-0">
							<p>Fotografia</p>
						</div>
						<div className="bg-customColor-purple text-xs px-4 h-10 rounded flex items-center justify-center sm:text-sm sm:px-4 lg:text-base lg:w-32 lg:px-0">
							<p>Diseño</p>
						</div>
						<div className="bg-customColor-purple text-xs px-4 h-10 rounded flex items-center justify-center sm:text-sm sm:px-4 lg:text-base">
							<p>Arquitectura</p>
						</div>
						<div className="bg-customColor-purple text-xs px-4 h-10 rounded flex items-center justify-center sm:text-sm sm:px-4 lg:text-base lg:px-4">
							<p>Escritura</p>
						</div>
					</div>
					<Link to="/register">
						<button className="block w-32 py-4 px-4 text-sm rounded-lg mt-6 bg-customColor-purple sm:text-lg sm:px-6 sm:w-40 md:hidden">
							Registrarse
						</button>
					</Link>
				</div>
			</section>

			<section className="bg-customColor-magenta px-8 py-16">
				<h2 className="text-2xl font-bold mb-6 text-orange-50 text-center md:text-4xl">
					¿Por qué elegir miportfolio?
				</h2>
				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
					<div className="p-6 bg-white rounded-lg shadow-md">
						<p className="text-lg text-customColor-blue text-center">
							Sin límite de proyectos, compartí cuantos quieras.
						</p>
					</div>
					<div className="p-6 bg-white rounded-lg shadow-md">
						<p className="text-lg text-customColor-blue text-center">
							Soporte para múltiples formatos de fotos y videos.
						</p>
					</div>
					<div className="p-6 bg-white rounded-lg shadow-md">
						<p className="text-lg text-customColor-blue text-center">
							Personalización avanzada sin complicaciones.
						</p>
					</div>
					<div className="p-6 bg-white rounded-lg shadow-md">
						<p className="text-lg text-customColor-blue text-center">
							Simple y rápido.
						</p>
					</div>
					<div className="p-6 bg-white rounded-lg shadow-md">
						<p className="text-lg text-customColor-blue text-center">
							Compatible con dispositivos móviles y de escritorio.
						</p>
					</div>
					<div className="p-6 bg-white rounded-lg shadow-md">
						<p className="text-lg text-customColor-blue text-center">
							Diseño intuitivo y fácil de usar.
						</p>
					</div>
				</div>
			</section>

			<section className="bg-red-800 flex flex-col gap-16 justify-center items-center p-8 md:p-16 lg:p-32">
				<div>
					<h2 className="text-2xl text-customColor-pink font-bold sm:text-3xl md:text-4xl md:text-center">
						Compartí lo que sabes hacer, allá afuera hay alguien que lo necesita
						pero que todavia no lo sabe.
					</h2>
				</div>
				<Link
					to="/register"
					className="bg-customColor-pink hover:bg-customColor-darkPink text-red-800 px-4 py-4 text-base rounded-lg w-54 sm:py-6 md:text-xl md:w-64 md:px-6"
				>
					Empezar a compartir
				</Link>
			</section>

			<section className="bg-orange-50 p-8">
				<h2 className="text-center text-4xl text-customColor-blue mb-6">
					Planes
				</h2>
				<div className="flex flex-col gap-8 justify-center items-center lg:flex-row lg:items-start ">
					<div className="bg-customColor-blue rounded-xl text-orange-50 flex flex-col gap-6 p-8 w-72 sm:w-96 md:w-[80%] lg:w-[25%] md:gap-3 md:p-6 lg:gap-6 lg:p-8">
						<h2 className="text-4xl ">Gratuito</h2>
						<p className="text-2xl">$0</p>
						<p className="md:text-xl">Duración: ilimitada</p>
						<ul className="md:text-lg lg:text-base">
							<li className="mb-2">Con el plan gratuito vas a poder:</li>
							<li className="mb-4">
								<span className="text-green-400">&#10003;</span> Subir hasta 10
								imagenes en la galeria por proyecto
							</li>
							<li className="mb-4">
								<span className="text-green-400">&#10003;</span> Subir hasta 10
								proyectos
							</li>
							<li className="mb-4">
								<span className="text-green-400">&#10003;</span> Modificar la
								apariencia del portfolio
							</li>
						</ul>
					</div>
					<div className="bg-customColor-blue rounded-xl text-orange-50 flex flex-col gap-6 p-8 w-72 sm:w-96 md:w-[80%] lg:w-[25%] md:gap-3 md:p-6 lg:gap-6 lg:p-8">
						<h2 className="text-4xl">Premium</h2>
						<p className="text-2xl">$100</p>
						<p className="md:text-xl">Duración: ilimitada</p>
						<ul className="md:text-lg lg:text-base">
							<li className="mb-2">Con el plan premium vas a poder:</li>
							<li className="mb-4">
								<span className="text-green-400">&#10003;</span> Subir videos
							</li>
							<li className="mb-4">
								<span className="text-green-400">&#10003;</span> Subir PDFs
							</li>
							<li className="mb-4">
								<span className="text-green-400">&#10003;</span> Agregar tu CV
								en el perfil
							</li>
							<li className="mb-4">
								<span className="text-green-400">&#10003;</span> Sacar el boton
								de miportfolio en el portfolio
							</li>
							<li className="mb-4">
								<span className="text-green-400">&#10003;</span> Subir proyectos
								sin limite
							</li>
						</ul>
					</div>
				</div>
			</section>

			<footer className="bg-zinc-900 p-8 flex items-center justify-center">
				<Link to="/">
					<Logo
						logoColor="#FFF7ED"
						textColor="#FFF7ED"
						logoWidth="250"
						logoHeight="100"
						className="w-[250px] h-[100px] sm:w-[400px] sm:h-[155px] lg:w-[611px] lg:h-[155px]"
					/>
				</Link>
			</footer>
		</>
	);
}

export default HomePage;
