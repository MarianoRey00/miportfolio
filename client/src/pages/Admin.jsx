import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar.jsx";

function Admin() {
  return (
    <>
      <div className="hidden md:flex p-4 min-h-screen">
        <Sidebar />
        <div className=" w-[80%] ml-[20%] bg-zinc-800 p-8 rounded-xl overflow-auto scrollbar">
          <Outlet />
        </div>
      </div>
      <div className="h-screen flex justify-center items-center md:hidden">
        <h1 className="text-xl text-center">
          Por favor ingresá al panel desde una pc.
        </h1>
      </div>
    </>
  );
}

export default Admin;
