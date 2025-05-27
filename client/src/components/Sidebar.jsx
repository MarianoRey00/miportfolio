import React from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { IoMdExit } from "react-icons/io";
import { useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();

  return (
    <>
      <div className="w-[20%] h-screen fixed top-0 left-0 bg-zinc-900 shadow-lg">
        <div className="p-6 flex flex-col gap-4 h-full">
          <div className="flex gap-2">
            <div className="bg-zinc-700 rounded-lg p-2">
              <img src={logo} className="w-10 h-10" />
            </div>
            <h1 className="text-xl">
              Panel de <br />
              administración
            </h1>
          </div>
          <div className="flex flex-col justify-between h-full mt-4">
            <ul>
              <li>
                <Link
                  to="/admin/usuarios"
                  className={`${
                    location.pathname === "/admin/usuarios"
                      ? " text-orange-50"
                      : "text-zinc-400"
                  }`}
                >
                  Usuarios
                </Link>
              </li>
            </ul>
            <Link to="/panel" className=" group text-zinc-400 flex gap-2">
              <IoMdExit className="text-3xl group-hover:text-orange-50" />
              <span className="mt-1 group-hover:text-orange-50">Salir</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
