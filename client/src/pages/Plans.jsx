import { React, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { usePlans } from "../context/PlanContext";
import { useAuth } from "../context/AuthContext";
function Plans() {
  const { getPlans, plans } = usePlans();
  const { authUser } = useAuth();
  console.log(authUser);
  useEffect(() => {
    getPlans();
  }, []);
  return (
    <>
      <Navbar background={"#18181b"} border={"1px solid #fff7ed "} />
      <div className="min-h-screen">
        <div className="py-10">
          <h1 className="text-4xl font-bold text-center">
            Elegí el plan que mas se adecue a vos
          </h1>
        </div>
        <div className="flex justify-center p-8 gap-8">
          {plans.map((plan) => (
            <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden w-[45%]">
              <div class="px-8 py-10 border-b border-gray-200 bg-customColor-blue">
                <h2 class="text-3xl font-semibold text-white">{plan.title}</h2>
                <p className="text-lg">{plan.description}</p>
              </div>

              <div class="p-8">
                <div class="flex items-start">
                  <div class="ml-2 flex-1">
                    <h3 class="text-2xl  text-gray-900">${plan.price}</h3>
                    <p class="text-gray-600 mt-1 text-xl">
                      Duración: {plan.duration}
                    </p>
                  </div>
                  {authUser.plan !== plan.title && (
                    <div className="flex items-center justify-center">
                      <Link
                        to={`/panel/finalizar-compra/${plan._id}`}
                        className="py-4 px-6 text-center bg-customColor-blue rounded-lg font-medium mt-1 hover:bg-gray-700"
                      >
                        Adquirir Plan
                      </Link>
                    </div>
                  )}
                </div>

                <div class="mt-6 pt-6 border-t border-gray-200">
                  <h4 class="font-medium text-gray-900 mb-3">Incluye:</h4>
                  <ul class="space-y-4">
                    {plan.features.map((feature, index) => (
                      <li key={index} class="flex items-start">
                        <span className="text-green-600 mr-2 mt-0.5 font-bold">
                          &#10003;
                        </span>
                        <span class="text-gray-600 text-lg">{feature}</span>
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
