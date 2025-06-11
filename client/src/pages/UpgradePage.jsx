import { useState } from "react";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import axios from "axios";
import Navbar from "../components/Navbar";

function UpgradePage() {
  const [preferenceId, setPreferenceId] = useState(null);
  initMercadoPago("APP_USR-46c99d09-a8af-425c-b1ec-d5e5c40616ee", {
    locale: "es-AR",
  });

  const createPreference = async () => {
    try {
      const response = await axios.post(
        "https://miportfolio-api.onrender.com/api/create-preference",
        {
          title: "Miportfolio Premium",
          quantity: 1,
          price: 1,
        }
      );
      const { id } = response.data;
      return id;
    } catch (error) {
      console.log(error);
    }
  };

  const handleBuy = async () => {
    const id = await createPreference();
    if (id) {
      setPreferenceId(id);
    }
  };

  return (
    <>
      <Navbar background={"#18181b"} border={"1px solid #fff7ed"} />
      {/* <div className="flex flex-col md:flex-row min-h-screen p-4 xs:p-6 md:p-8 justify-between">
        <div className="flex flex-col gap-6 ">
          <h1 className="text-5xl ">Contratar Plan premium</h1>
          <div className="">
            <h2 className="text-xl mb-4">El Plan premium ofrece:</h2>
            <ul className="font-sans font-semibold">
              <li className="mb-4">
                <span className="text-green-400">&#10003;</span> Posibilidad de
                subir videos
              </li>
              <li className="mb-4">
                <span className="text-green-400">&#10003;</span> Posibilidad de
                subir PDFs
              </li>
              <li className="mb-4">
                <span className="text-green-400">&#10003;</span> Sin logo en el
                portfolio
              </li>
              <li className="mb-4">
                <span className="text-green-400">&#10003;</span> Sin límite de
                proyectos
              </li>
              <li className="mb-4">
                <span className="text-green-400">&#10003;</span> Sin límite de
                redes sociales en el perfil
              </li>
              <li className="mb-4">
                <span className="text-green-400">&#10003;</span> Poder ver
                estadísticas?
              </li> */}
      {/* <li className="mb-4">✗</li> */}
      {/* </ul>
          </div>
        </div> */}

      {/* <div className="flex flex-col gap-4 w-[95%] md:w-[50%] lg:w-[35%] py-4 rounded-xl border h-[65%] mt-6 md:mt-0">
          <div className="border-b px-6 md:px-8 pt-2 pb-4">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">
              Tu compra
            </h2>
          </div>
          <div className="px-6 md:px-8 flex flex-col gap-8 py-4">
            <div className="flex justify-between">
              <p className="text-sm sm:text-base lg:text-lg text-zinc-200">
                Miportfolio Plan premium
              </p>
              <p className="text-sm sm:text-base lg:text-lg font-mono">$100</p>
            </div>
            <button
              onClick={handleBuy}
              className="px-6 py-2 text-sm sm:text-base lg:px-6 lg:py-4 border rounded-lg hover:bg-white hover:text-zinc-800"
            >
              Comprar Plan premium
            </button>
            {preferenceId && (
              <div className="w-full overflow-hidden">
                <Wallet initialization={{ preferenceId: preferenceId }} />
              </div>
            )} */}
      {/* {preferenceId && (
              <a
                href={`https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=${preferenceId}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ir a Mercado Pago
              </a>
            )} */}
      {/* </div>
        </div>
      </div> */}
      <main class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="text-center mb-8">
          <h1 class="text-3xl font-bold text-orange-50">
            Complete Your Purchase
          </h1>
          <p class="text-gray-600 mt-2">
            You're just one step away from upgrading your plan
          </p>
        </div>

        <div class="grid md:grid-cols-5 gap-8">
          <div class="md:col-span-3">
            <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div class="px-6 py-4 border-b border-gray-200 bg-gray-50">
                <h2 class="text-lg font-semibold text-gray-900">
                  Order Summary
                </h2>
              </div>

              <div class="p-6">
                <div class="flex items-start">
                  <div class="flex-shrink-0 w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center">
                    <svg
                      class="w-6 h-6 text-primary-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                        clip-rule="evenodd"
                      ></path>
                      <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path>
                    </svg>
                  </div>
                  <div class="ml-4 flex-1">
                    <h3 class="text-lg font-medium text-gray-900">
                      Professional Plan
                    </h3>
                    <p class="text-gray-600 mt-1">
                      Annual subscription (billed monthly)
                    </p>
                    <div class="mt-2 flex items-center text-sm text-gray-500">
                      <svg
                        class="w-4 h-4 mr-1 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      Renews automatically
                    </div>
                  </div>
                  <div class="ml-4 flex-shrink-0 text-right">
                    <span class="text-lg font-medium text-gray-900">
                      $79.00
                    </span>
                    <span class="block text-sm text-gray-500">per month</span>
                  </div>
                </div>

                <div class="mt-6 pt-6 border-t border-gray-200">
                  <h4 class="text-sm font-medium text-gray-900 mb-3">
                    What's included:
                  </h4>
                  <ul class="space-y-2">
                    <li class="flex items-start">
                      <span className="text-green-400">&#10003;</span>
                      <span class="text-gray-600">Up to 25 projects</span>
                    </li>
                    <li class="flex items-start">
                      <svg
                        class="w-5 h-5 text-green-500 mr-2 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span class="text-gray-600">100GB storage</span>
                    </li>
                    <li class="flex items-start">
                      <svg
                        class="w-5 h-5 text-green-500 mr-2 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span class="text-gray-600">Priority support</span>
                    </li>
                    <li class="flex items-start">
                      <svg
                        class="w-5 h-5 text-green-500 mr-2 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span class="text-gray-600">
                        Team collaboration (up to 10 members)
                      </span>
                    </li>
                    <li class="flex items-start">
                      <svg
                        class="w-5 h-5 text-green-500 mr-2 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span class="text-gray-600">Advanced analytics</span>
                    </li>
                  </ul>
                </div>

                <div class="mt-6 pt-6 border-t border-gray-200">
                  <div class="flex justify-between mb-2">
                    <span class="text-gray-600">Subtotal</span>
                    <span class="text-gray-900">$79.00</span>
                  </div>
                  <div class="flex justify-between mb-2">
                    <span class="text-gray-600">Tax (9%)</span>
                    <span class="text-gray-900">$7.11</span>
                  </div>
                  <div class="flex justify-between font-medium text-lg mt-4 pt-4 border-t border-gray-200">
                    <span class="text-gray-900">Total</span>
                    <span class="text-gray-900">$86.11</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div class="flex">
                <div class="flex-shrink-0">
                  <svg
                    class="h-5 w-5 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div class="ml-3">
                  <h3 class="text-sm font-medium text-blue-800">
                    Upgrading from Starter Plan
                  </h3>
                  <p class="text-sm text-blue-700 mt-1">
                    Your current plan will be upgraded immediately. We'll
                    prorate your current subscription and apply any credit to
                    this purchase.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="md:col-span-2">
            <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div class="px-6 py-4 border-b border-gray-200 bg-gray-50">
                <h2 class="text-lg font-semibold text-gray-900">Payment</h2>
              </div>

              <div class="p-6">
                <div class="space-y-4">
                  <div class="w-full">
                    {/* <button class="w-full flex items-center justify-center bg-paypal-blue hover:bg-paypal-lightblue text-white py-3 px-4 rounded-lg font-medium transition-colors">
                      <svg
                        class="h-5 w-5 mr-2"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20.067 8.478C20.067 10.064 19.162 11.564 17.276 11.564H15.496C15.39 11.564 15.297 11.65 15.284 11.756L14.758 15.344C14.745 15.437 14.665 15.51 14.572 15.51H12.567C12.422 15.51 12.316 15.377 12.342 15.232L13.933 5.56C13.946 5.48 14.013 5.426 14.093 5.426H18.157C19.333 5.426 20.067 6.372 20.067 7.548V8.478Z"
                          fill="black"
                        />
                        <path
                          d="M7.05 15.51H5.045C4.9 15.51 4.794 15.377 4.82 15.232L6.411 5.56C6.424 5.48 6.491 5.426 6.571 5.426H10.635C11.811 5.426 12.545 6.372 12.545 7.548V8.478C12.545 10.064 11.64 11.564 9.754 11.564H7.974C7.868 11.564 7.775 11.65 7.762 11.756L7.236 15.344C7.223 15.437 7.143 15.51 7.05 15.51Z"
                          fill="black"
                        />
                      </svg>
                      Pay with PayPal
                    </button> */}
                    {preferenceId && (
                      <div className="w-full overflow-hidden">
                        <Wallet
                          initialization={{ preferenceId: preferenceId }}
                        />
                      </div>
                    )}
                  </div>

                  <div class="relative">
                    <div class="absolute inset-0 flex items-center">
                      <div class="w-full border-t border-gray-300"></div>
                    </div>
                    <div class="relative flex justify-center text-sm">
                      <span class="px-2 bg-white text-gray-500">
                        or pay with card
                      </span>
                    </div>
                  </div>

                  <div class="w-full">
                    <button class="w-full flex items-center justify-center bg-gray-100 text-gray-500 py-3 px-4 rounded-lg font-medium cursor-not-allowed">
                      <svg
                        class="h-5 w-5 mr-2"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="2"
                          y="5"
                          width="20"
                          height="14"
                          rx="2"
                          stroke="currentColor"
                          stroke-width="2"
                        />
                        <path
                          d="M2 10H22"
                          stroke="currentColor"
                          stroke-width="2"
                        />
                      </svg>
                      Pay with Card
                    </button>
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
                      Secure payment processing
                    </span>
                  </div>
                  <div class="flex items-center mt-2">
                    <svg
                      class="h-5 w-5 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v-1l1-1 1-1-2.257-2.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span class="ml-2 text-sm text-gray-600">
                      Cancel anytime
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div class="mt-6 text-center text-sm text-gray-500">
              <p>
                By completing this purchase, you agree to our{" "}
                <a href="#" class="text-primary-600 hover:text-primary-700">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" class="text-primary-600 hover:text-primary-700">
                  Privacy Policy
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default UpgradePage;

/* customization={{ texts: { valueProp: "smart_option" } }} */
