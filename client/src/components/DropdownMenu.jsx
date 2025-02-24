import React from "react";
import { Link } from "react-router-dom";
import { MdAccountBox } from "react-icons/md";

function DropdownMenu({
	toggleDropdownMenu,
	isDropdownMenuOpen,
	logout,
	isAdmin,
}) {
	return (
		<>
			<div className="relative cursor-pointer">
				<div
					onClick={() => toggleDropdownMenu()}
					className="flex items-center gap-2"
				>
					<MdAccountBox className="w-12 h-12" />
				</div>

				<div
					className={`absolute right-0 mt-2 w-48 bg-orange-50 text-neutral-900 rounded-md shadow-lg overflow-hidden transition-all duration-200 ${
						isDropdownMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
					}`}
				>
					<Link
						to="/panel/perfil"
						className="block px-4 py-2 text-sm hover:bg-slate-200 transition"
						onClick={() => {
							toggleDropdownMenu();
						}}
					>
						Perfil
					</Link>
					<Link
						to="/panel/cambiar-plan"
						className="block px-4 py-2 text-sm hover:bg-slate-200 transition"
						onClick={() => {
							toggleDropdownMenu();
						}}
					>
						Cambiar plan
					</Link>
					{isAdmin && (
						<Link
							to="/admin/usuarios"
							className="block px-4 py-2 text-sm hover:bg-slate-200 transition"
							onClick={() => {
								toggleDropdownMenu();
							}}
						>
							Admin
						</Link>
					)}
					<button
						onClick={() => {
							logout();
							toggleDropdownMenu();
						}}
						className="w-full text-left px-4 py-2 text-sm hover:bg-slate-200 transition"
					>
						Cerrar sesión
					</button>
				</div>
			</div>
		</>
	);
}

export default DropdownMenu;
