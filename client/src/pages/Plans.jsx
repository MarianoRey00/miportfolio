import { React, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { usePlans } from "../context/PlanContext";
import { useAuth } from "../context/AuthContext";
function Plans() {
  const { getPlans, plans } = usePlans();
  const { authUser } = useAuth();
  useEffect(() => {
    getPlans();
  }, []);
  return (
    <>
      <Navbar background={"#18181b"} border={"1px solid #fff7ed "} />
      <div className="min-h-screen">
        <div className="py-10">
          <h1 className="text-4xl font-semibold text-center">
            Elegí el plan que mas se adecue a vos
          </h1>
        </div>
        <div className="flex flex-wrap py-4 md:justify-between px-4 md:px-10 lg:px-24">
          {plans.map((plan) => (
            <div className="w-full md:w-[45%] bg-orange-50 rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-10">
              <div className="px-6 py-8 border-b border-gray-200 bg-neutral-900">
                <h2 className="text-3xl font-semibold text-orange-50">
                  {plan.title}
                </h2>
                <p className="text-lg text-orange-50">{plan.description}</p>
              </div>

              <div className="p-6">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between">
                  <div className="mb-4 sm:mb-0">
                    <h3 className="text-2xl text-gray-900">${plan.price}</h3>
                    <p className="text-gray-600 mt-1 text-xl">
                      Duración: {plan.duration}
                    </p>
                  </div>
                  {authUser.plan !== plan.title &&
                    plan.title !== "Gratuito" && (
                      <Link
                        to={`/panel/finalizar-compra/${plan._id}`}
                        className="py-3 px-5 bg-neutral-900 text-white text-center rounded-lg font-medium hover:bg-neutral-700"
                      >
                        Adquirir Plan
                      </Link>
                    )}
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200 h-72">
                  <h4 className="font-medium text-gray-900 mb-3">Incluye:</h4>
                  <ul className="">
                    {plan.features.map((feature) => (
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2 mt-1 font-bold">
                          ✓
                        </span>
                        <span className="text-gray-700 text-base">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Plans;
