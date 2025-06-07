import React from "react";
import { Link } from "react-router-dom";

function HomeMenu({ toggleMenu, isMenuOpen }) {
	return (
		<>
			<button
				onClick={() => toggleMenu()}
				className="block md:hidden text-customColor-blue focus:outline-none"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-8 w-8"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M4 6h16M4 12h16M4 18h16"
					/>
				</svg>
			</button>
			<div
				className={`absolute md:relative md:flex md:items-center md:gap-4 top-20 md:top-0 left-0 md:left-auto w-full md:w-auto bg-orange-50 md:bg-transparent px-6 md:px-0 py-4 md:py-0 z-10 transition-all duration-200 text-center text-black border-x border-b border-customColor-blue md:border-0  ${
					isMenuOpen ? "block" : "hidden"
				}`}
			>
				<Link
					to="/login"
					className="block hover:bg-customColor-blue hover:text-orange-50 md:hover:bg-transparent md:hover:text-inherit p-3 w-full rounded"
				>
					Ingresar
				</Link>
				<Link
					to="/register"
					className="block hover:bg-customColor-blue p-3 hover:text-orange-50 rounded md:bg-customColor-blue md:hover:bg-slate-900 md:py-4 md:px-6 md:text-orange-50"
				>
					Registrarse
				</Link>
			</div>
		</>
	);
}

export default HomeMenu;
