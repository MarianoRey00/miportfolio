import { useState } from "react";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Icon from "../assets/dark-icon.svg";
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
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-orange-50">
            Completa tu compra
          </h1>
          <p className="text-orange-50 mt-2">
            Estas a un paso de mejorar tu plan
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
                      Plan Profesional
                    </h3>
                    <p className="text-gray-600 mt-1">Duración ilimitada</p>
                  </div>
                  <div>
                    <span className="text-lg font-medium text-gray-900">
                      $1000
                    </span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="text-sm font-medium text-gray-900 mb-3">
                    Incluye:
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2 mt-0.5 font-bold">
                        &#10003;
                      </span>
                      <span className="text-gray-600 text-lg">
                        Proyectos ilimitados
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2 mt-0.5 font-bold">
                        &#10003;
                      </span>
                      <span className="text-gray-600 text-lg">
                        Hasta 10 fotos por proyecto
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2 mt-0.5 font-bold">
                        &#10003;
                      </span>
                      <span className="text-gray-600 text-lg">
                        Subir videos
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2 mt-0.5 font-bold">
                        &#10003;
                      </span>
                      <span className="text-gray-600 text-lg">Subir PDFs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2 mt-0.5 font-bold">
                        &#10003;
                      </span>
                      <span className="text-gray-600 text-lg">
                        Compartir tu CV
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2 mt-0.5 font-bold">
                        &#10003;
                      </span>
                      <span className="text-gray-600 text-lg">
                        Eliminar boton de miportfolio en el perfil
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex justify-between font-medium text-lg pt-2">
                    <span className="text-gray-900">Total</span>
                    <span className="text-gray-900">$1000</span>
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
                    <button
                      onClick={handleBuy}
                      className="px-6 py-2 text-sm sm:text-base lg:px-6 lg:py-4 border rounded-lg hover:bg-white hover:text-zinc-800"
                    >
                      Comprar Plan premium
                    </button>
                    {preferenceId && (
                      <div className="w-full overflow-hidden">
                        <Wallet
                          initialization={{ preferenceId: preferenceId }}
                        />
                      </div>
                    )}
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
