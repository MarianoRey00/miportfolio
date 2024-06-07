import React from "react";
import { Link } from "react-router-dom";
import Logo from "../components/Logo.jsx";
import Cel from "../assets/mp-png.png";

function HomePage() {
	return (
		<div className="flex justify-between bg-orange-50 px-10 py-12">
			<div className="text-black w-[48%]">
				<h1 className="text-7xl text-[#1E2330] font-medium">
					<span>Crea tu portfolio online en minutos con</span>
					<Logo />.
				</h1>
				<p className="text-xl text-[#1E2330] mt-8 font-medium">
					Empezá a usar la mejor página de Link in Bio para compartir tus
					trabajos.
				</p>
				<button class="bg-[#1E2330] mt-12 text-orange-50 w-48 h-12">
					Empezar ahora
					<svg
						className="inline ml-2"
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
				</button>
			</div>
			<div className=" w-[48%] flex justify-center">
				<img src={Cel} alt="" width="250px" />
			</div>
		</div>
	);
}

export default HomePage;
