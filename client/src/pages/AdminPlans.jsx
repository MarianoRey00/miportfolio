import { React, useState, useEffect } from "react";
import { HiPlus } from "react-icons/hi";
import { Link } from "react-router-dom";
import { usePlans } from "../context/PlanContext";
import { AiOutlineDelete } from "react-icons/ai";
import EditButton from "../components/EditButton";

function AdminPlans() {
  const { getPlans } = usePlans();
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    (async () => {
      const plans = await getPlans();
      setPlans(plans);
    })();
  }, []);

  return (
    <>
      <h1 className="text-sm uppercase font-semibold mb-6 text-orange-50">
        Planes
      </h1>
      <Link
        to="/admin/planes/crear-plan"
        className="flex gap-2 border border-white w-64 py-3 px-4 rounded-lg hover:bg-neutral-700"
      >
        <HiPlus className="w-5 h-5" />
        Crear plan
      </Link>
      <div className="flex flex-col gap-6 mt-6">
        {plans.map((plan) => (
          <div className="border border-white shadow-md shadow-neutral-700 rounded-lg p-6 flex justify-between">
            <div>
              <h2 className="font-medium text-lg">{plan.title}</h2>
              <p>{plan.description}</p>
            </div>
            <div className="flex flex-col gap-1">
              <Link
                to={`/admin/planes/editar-plan/${plan._id}`}
                className="p-1 rounded hover:bg-neutral-700 flex justify-center"
              >
                <EditButton width={16} height={18} stroke={"#FFF7ED"} />
              </Link>
              <button className="p-1 rounded hover:bg-neutral-700">
                <AiOutlineDelete className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default AdminPlans;
