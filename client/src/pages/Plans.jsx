import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
function Plans() {
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
          <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden w-[45%]">
            <div class="px-8 py-10 border-b border-gray-200 bg-customColor-blue">
              <h2 class="text-3xl font-semibold text-white">Plan Gratuito</h2>
              <p className="text-lg">
                Ideal para empezar a mostrar tus proyectos
              </p>
            </div>

            <div class="p-8">
              <div class="flex items-start">
                <div class="ml-2 flex-1">
                  <h3 class="text-2xl font-semibold text-gray-900">$0</h3>
                  <p class="text-gray-600 mt-1 text-xl">Duración ilimitada</p>
                </div>
              </div>

              <div class="mt-6 pt-6 border-t border-gray-200">
                <h4 class="font-medium text-gray-900 mb-3">Incluye:</h4>
                <ul class="space-y-4">
                  <li class="flex items-start">
                    <span className="text-green-600 mr-2 mt-0.5 font-bold">
                      &#10003;
                    </span>
                    <span class="text-gray-600 text-lg">
                      Hasta 10 proyectos
                    </span>
                  </li>
                  <li class="flex items-start">
                    <span className="text-green-600 mr-2 mt-0.5">&#10003;</span>
                    <span class="text-gray-600 text-lg">
                      Hasta 6 fotos por proyecto
                    </span>
                  </li>
                  <li class="flex items-start">
                    <span className="text-green-600 mr-2 mt-0.5">&#10003;</span>
                    <span class="text-gray-600 text-lg">
                      Modificar la apariencia del perfil
                    </span>
                  </li>
                  {/* <li class="flex items-start">
                    <span className="text-green-600 mr-2 mt-0.5">&#10003;</span>
                    <span class="text-gray-600 text-lg">Subir PDFs</span>
                  </li>
                  <li class="flex items-start">
                    <span className="text-green-600 mr-2 mt-0.5">&#10003;</span>
                    <span class="text-gray-600 text-lg">Compartir tu CV</span>
                  </li>
                  <li class="flex items-start">
                    <span className="text-green-600 mr-2 mt-0.5">&#10003;</span>
                    <span class="text-gray-600 text-lg">
                      Eliminar boton de miportfolio en el perfil
                    </span>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden w-[45%]">
            <div class="px-8 py-10 border-b border-gray-200 bg-customColor-blue">
              <h2 class="text-3xl font-semibold text-white">
                Plan Profesional
              </h2>
              <p className="text-lg">
                Herramientas perfectas para profesionales
              </p>
            </div>

            <div class="p-8">
              <div class="flex items-start">
                <div class="ml-2 flex-1">
                  <h3 class="text-2xl font-semibold text-gray-900">$1000</h3>
                  <p class="text-gray-600 mt-1 text-xl">Duración ilimitada</p>
                </div>
                <div className="flex items-center justify-center">
                  <Link
                    to="/panel/cambiar-plan"
                    className="py-4 px-6 text-center bg-customColor-blue rounded-lg font-medium mt-1 font-medium"
                  >
                    Adquirir Plan
                  </Link>
                </div>
              </div>

              <div class="mt-6 pt-6 border-t border-gray-200">
                <h4 class="font-medium text-gray-900 mb-3">Incluye:</h4>
                <ul class="space-y-4">
                  <li class="flex items-start">
                    <span className="text-green-600 mr-2 mt-0.5 font-bold">
                      &#10003;
                    </span>
                    <span class="text-gray-600 text-lg">
                      Proyectos ilimitados
                    </span>
                  </li>
                  <li class="flex items-start">
                    <span className="text-green-600 mr-2 mt-0.5">&#10003;</span>
                    <span class="text-gray-600 text-lg">
                      Hasta 10 fotos por proyecto
                    </span>
                  </li>
                  <li class="flex items-start">
                    <span className="text-green-600 mr-2 mt-0.5">&#10003;</span>
                    <span class="text-gray-600 text-lg">Subir videos</span>
                  </li>
                  <li class="flex items-start">
                    <span className="text-green-600 mr-2 mt-0.5">&#10003;</span>
                    <span class="text-gray-600 text-lg">Subir PDFs</span>
                  </li>
                  <li class="flex items-start">
                    <span className="text-green-600 mr-2 mt-0.5">&#10003;</span>
                    <span class="text-gray-600 text-lg">Compartir tu CV</span>
                  </li>
                  <li class="flex items-start">
                    <span className="text-green-600 mr-2 mt-0.5">&#10003;</span>
                    <span class="text-gray-600 text-lg">
                      Eliminar boton de miportfolio en el perfil
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Plans;
