import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar.jsx";

function Admin() {
  return (
    <>
      <div className="flex p-4 min-h-screen">
        <Sidebar />
        <div className="w-[80%]  ml-[20%] bg-zinc-800 p-8 rounded-xl overflow-auto scrollbar">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Admin;
