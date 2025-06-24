import React from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { IoExitOutline } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import { LuUsers } from "react-icons/lu";
import { MdAttachMoney } from "react-icons/md";
import { HiOutlineDocumentText } from "react-icons/hi2";
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
            <div className="flex flex-col text ">
              <Link
                to="/admin/usuarios"
                className={`flex gap-2 items-center p-2 rounded-lg hover:bg-neutral-700 transition-colors ${
                  location.pathname === "/admin/usuarios" && "bg-neutral-700"
                }`}
              >
                <LuUsers className="w-5 h-5" />
                <span>Usuarios</span>
              </Link>
              <Link
                to="/admin/ventas"
                className={`flex gap-2 items-center p-2 rounded-lg hover:bg-neutral-700 transition-colors ${
                  location.pathname === "/admin/ventas" && "bg-neutral-700"
                }`}
              >
                <MdAttachMoney className="w-5 h-5" />
                <span>Ventas</span>
              </Link>
              <Link
                to="/admin/planes"
                className={`flex gap-2 items-center p-2 rounded-lg hover:bg-neutral-700 transition-colors ${
                  location.pathname === "/admin/planes" && "bg-neutral-700"
                }`}
              >
                <HiOutlineDocumentText className="w-5 h-5" />
                <span>Planes</span>
              </Link>
            </div>
            <Link
              to="/panel"
              className="group flex gap-2 p-2 rounded-lg items-center hover:bg-neutral-700 transition-colors"
            >
              <IoExitOutline className="w-6 h-6" />
              <span className="mt-0.5">Salir</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
