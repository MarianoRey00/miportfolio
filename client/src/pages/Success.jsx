import React from "react";
import { Link } from "react-router-dom";
function Success() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="p-8 rounded-lg border border-white shadow-md shadow-neutral-700 flex flex-col items-center gap-4">
          <svg
            width="100px"
            height="100px"
            viewBox="-102.4 -102.4 1228.80 1228.80"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
          >
            <g
              id="SVGRepo_bgCarrier"
              stroke-width="0"
              transform="translate(250.88,250.88), scale(0.51)"
            >
              <rect
                x="-102.4"
                y="-102.4"
                width="1228.80"
                height="1228.80"
                rx="614.4"
                fill="#ffffff"
                strokewidth="0"
              ></rect>
            </g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                fill="#4cb81e"
                d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z"
              ></path>
            </g>
          </svg>
          <h1 className="text-3xl font-medium text-center">
            Gracias por elegir a miportfolio
          </h1>
          <p className="text-center">El pago fue realizado con exito.</p>
          <Link
            to="/panel"
            className="block w-full text-center rounded-lg border border-white hover:bg-neutral-700 py-3 font-medium transition-colors"
          >
            Volver al panel
          </Link>
        </div>
      </div>
    </>
  );
}

export default Success;
