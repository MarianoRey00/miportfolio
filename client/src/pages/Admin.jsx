import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar.jsx";

function Admin() {
  return (
    <>
      <div className="flex p-4">
        <Sidebar />
        <div className="w-[80%] min-h-screen ml-[20%] bg-zinc-800 px-6 rounded-xl overflow-auto">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Admin;
