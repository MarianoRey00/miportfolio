import { useState, useEffect } from "react";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import axios from "axios";
import Navbar from "../components/Navbar";
import { usePlans } from "../context/PlanContext";
import { useAuth } from "../context/AuthContext";
import { useParams } from "react-router-dom";
function UpgradePage() {
  const [preferenceId, setPreferenceId] = useState(null);
  initMercadoPago("APP_USR-46c99d09-a8af-425c-b1ec-d5e5c40616ee", {
    locale: "es-AR",
  });

  const { getPlan } = usePlans();
  const { authUser } = useAuth();
  const [plan, setPlan] = useState({});
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const plan = await getPlan(id);
      setPlan(plan);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const createPreference = async () => {
        try {
          const res = await axios.post(
            "https://miportfolio-api.onrender.com/api/create-preference",
            {
              title: plan.title,
              price: plan.price,
              quantity: 1,
              external_reference: authUser._id,
            }
          );
          const { id } = res.data;
          return id;
        } catch (error) {
          console.log(error);
        }
      };

      const id = await createPreference();
      if (id) {
        setPreferenceId(id);
      }
    })();
  }, [plan]);

  return (
    <>
      <Navbar background={"#18181b"} border={"1px solid #fff7ed"} />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-screen">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-semibold text-orange-50">
            Finaliza tu compra
          </h1>
          <p className="text-orange-50 mt-2 text-lg">
            Estas a un solo paso de mejorar tu plan
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-3">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
                <h2 className="text-lg font-semibold text-gray-900">
                  Orden de compra
                </h2>
              </div>

              <div className="p-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center">
                    <svg
                      width="163"
                      height="165"
                      viewBox="0 0 163 165"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.7404 113.604C38.8472 112.105 91.231 104.309 114.891 139.224"
                        stroke="#B91C1C"
                        stroke-width="15"
                      />
                      <path
                        d="M11.1204 49.3568C38.3253 50.6047 90.9439 57.916 114.354 22.7842"
                        stroke="#0E7490"
                        stroke-width="15"
                      />
                      <path
                        d="M85.5075 12.0055C73.7918 34.4955 50.8377 79.1881 50.8441 80.5928C50.8506 81.9974 72.9149 125.086 87.325 150.833"
                        stroke="#FACC15"
                        stroke-width="15"
                      />
                      <path
                        className="dynamic-stroke"
                        stroke="#1e2330"
                        d="M82.7615 9.42418L143.343 44.8298C144.11 45.2781 144.581 46.0998 144.581 46.9882V118.012C144.581 118.9 144.11 119.722 143.343 120.17L82.7614 155.576C81.9821 156.031 81.0179 156.031 80.2385 155.576L19.6575 120.17C18.8904 119.722 18.4189 118.9 18.4189 118.012V46.9882C18.4189 46.0998 18.8904 45.2781 19.6575 44.8298L80.2386 9.42417C81.0179 8.96873 81.9821 8.96872 82.7615 9.42418Z"
                        stroke-width="15"
                      />
                    </svg>
                  </div>
                  <div className="ml-4 flex-1">
                    <h3 className="text-lg font-medium text-gray-900">
                      Plan {plan.title}
                    </h3>
                    <p className="text-gray-600 mt-1">
                      Duración: {plan.duration}
                    </p>
                  </div>
                  <div>
                    <span className="text-lg font-medium text-gray-900">
                      ${plan.price}
                    </span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="text-sm font-medium text-gray-900 mb-3">
                    Incluye:
                  </h4>
                  <ul className="space-y-2">
                    {plan.features?.map((feature) => (
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2 mt-0.5 font-bold">
                          &#10003;
                        </span>
                        <span className="text-gray-600 text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex justify-between font-medium text-lg pt-2">
                    <span className="text-gray-900">Total</span>
                    <span className="text-gray-900">${plan.price}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="md:col-span-2">
            <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div class="px-6 py-4 border-b border-gray-200 bg-gray-50">
                <h2 class="text-lg font-semibold text-gray-900">Pago</h2>
              </div>

              <div class="p-6">
                <div class="space-y-4">
                  <div class="w-full">
                    <div className="w-full overflow-hidden">
                      {preferenceId && (
                        <Wallet
                          initialization={{ preferenceId: preferenceId }}
                        />
                      )}
                    </div>
                  </div>
                </div>

                <div class="mt-6 pt-6 border-t border-gray-200">
                  <div class="flex items-center">
                    <svg
                      class="h-5 w-5 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span class="ml-2 text-sm text-gray-600">
                      Pago asegurado por Mercado Pago
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default UpgradePage;

/* customization={{ texts: { valueProp: "smart_option" } }} */
