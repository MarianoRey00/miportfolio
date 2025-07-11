import React from "react";
import { Link } from "react-router-dom";

function DropdownMenu({
  toggleDropdownMenu,
  isDropdownMenuOpen,
  logout,
  isAdmin,
  user,
}) {
  return (
    <>
      <div className="relative cursor-pointer">
        <div
          onClick={() => toggleDropdownMenu()}
          className="flex items-center gap-2"
        >
          {user?.picture?.url ? (
            <img
              src={user?.picture?.url}
              className="w-12 h-12 object-cover rounded-lg border-2 border-orange-50"
            />
          ) : (
            <div className="w-12 h-12 bg-neutral-800 flex items-center justify-center rounded-lg border-2 border-orange-50">
              <p className="p-6 text-lg uppercase">{user?.username[0]}</p>
            </div>
          )}
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
            to="/panel/planes"
            className="block px-4 py-2 text-sm hover:bg-slate-200 transition"
            onClick={() => {
              toggleDropdownMenu();
            }}
          >
            Planes
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
