import React from "react";

function Plans() {
  return (
    <>
      <div className="min-h-screen">
        <div className="flex">
          <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div class="px-6 py-4 border-b border-gray-200 bg-orange-50">
              <h2 class="text-lg font-semibold text-gray-900">Plan Gratuito</h2>
              {/* <p>El plan adecuado</p> */}
            </div>

            <div class="p-6">
              <div class="flex items-start">
                <div class="ml-4 flex-1">
                  <h3 class="text-lg font-medium text-gray-900">$0</h3>
                  <p class="text-gray-600 mt-1">Duracion ilimitada</p>
                </div>
              </div>

              <div class="mt-6 pt-6 border-t border-gray-200">
                <h4 class="text-sm font-medium text-gray-900 mb-3">Incluye:</h4>
                <ul class="space-y-2">
                  <li class="flex items-start">
                    <span className="text-green-400 mr-2 mt-0.5">&#10003;</span>
                    <span class="text-gray-600">Up to 25 projects</span>
                  </li>
                  <li class="flex items-start">
                    <span className="text-green-400 mr-2 mt-0.5">&#10003;</span>
                    <span class="text-gray-600">100GB storage</span>
                  </li>
                  <li class="flex items-start">
                    <span className="text-green-400 mr-2 mt-0.5">&#10003;</span>
                    <span class="text-gray-600">Priority support</span>
                  </li>
                  <li class="flex items-start">
                    <span className="text-green-400 mr-2 mt-0.5">&#10003;</span>
                    <span class="text-gray-600">
                      Team collaboration (up to 10 members)
                    </span>
                  </li>
                  <li class="flex items-start">
                    <span className="text-green-400 mr-2 mt-0.5">&#10003;</span>
                    <span class="text-gray-600">Advanced analytics</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div class="px-6 py-4 border-b border-gray-200 bg-orange-50">
              <h2 class="text-lg font-semibold text-gray-900">
                Plan profesional
              </h2>
              {/* <p>El plan adecuado</p> */}
            </div>

            <div class="p-6">
              <div class="flex items-start">
                <div class="ml-4 flex-1">
                  <h3 class="text-lg font-medium text-gray-900">$1000</h3>
                  <p class="text-gray-600 mt-1">Duracion ilimitada</p>
                </div>
              </div>

              <div class="mt-6 pt-6 border-t border-gray-200">
                <h4 class="text-sm font-medium text-gray-900 mb-3">Incluye:</h4>
                <ul class="space-y-2">
                  <li class="flex items-start">
                    <span className="text-green-400 mr-2 mt-0.5">&#10003;</span>
                    <span class="text-gray-600">Up to 25 projects</span>
                  </li>
                  <li class="flex items-start">
                    <span className="text-green-400 mr-2 mt-0.5">&#10003;</span>
                    <span class="text-gray-600">100GB storage</span>
                  </li>
                  <li class="flex items-start">
                    <span className="text-green-400 mr-2 mt-0.5">&#10003;</span>
                    <span class="text-gray-600">Priority support</span>
                  </li>
                  <li class="flex items-start">
                    <span className="text-green-400 mr-2 mt-0.5">&#10003;</span>
                    <span class="text-gray-600">
                      Team collaboration (up to 10 members)
                    </span>
                  </li>
                  <li class="flex items-start">
                    <span className="text-green-400 mr-2 mt-0.5">&#10003;</span>
                    <span class="text-gray-600">Advanced analytics</span>
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
