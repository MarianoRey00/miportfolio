import React from "react";
import { HiPlus } from "react-icons/hi";
import { Link } from "react-router-dom";
function AdminPlans() {
  return (
    <>
      <h1 className="text-sm uppercase font-semibold mb-6 text-orange-50">
        Planes
      </h1>
      <Link
        to="/admin/planes/crear-plan"
        className="flex gap-2 border border-white w-64 py-3 px-4 rounded-lg"
      >
        <HiPlus className="w-5 h-5" />
        Crear plan
      </Link>
    </>
  );
}

export default AdminPlans;
