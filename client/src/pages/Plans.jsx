import React from "react";

function Plans() {
  return (
    <>
      <div className="min-h-screen">
        <div className="flex justify-center">
          <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden w-[50%]">
            <div class="p-8 border-b border-gray-200 bg-customColor-blue">
              <h2 class="text-3xl font-semibold text-white">
                Plan profesional
              </h2>
              <p className="text-lg">
                Herramientas perfectas para profesionales
              </p>
            </div>

            <div class="p-8">
              <div class="flex items-start">
                <div class="ml-2 flex-1">
                  <h3 class="text-2xl font-semibold text-gray-900">$1000</h3>
                  <p class="text-gray-600 mt-1 text-xl">Duracion ilimitada</p>
                </div>
              </div>

              <div class="mt-6 pt-6 border-t border-gray-200">
                <h4 class="text-sm font-medium text-gray-900 mb-3">Incluye:</h4>
                <ul class="space-y-4">
                  <li class="flex items-start">
                    <span className="text-green-600 mr-2 mt-0.5">&#10003;</span>
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
