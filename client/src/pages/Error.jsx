import React from "react";
import { Link } from "react-router-dom";
function Error() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="p-8 rounded-lg border border-white shadow-md shadow-neutral-700 flex flex-col items-center gap-4 w-[500px]">
          <svg
            fill="#dd2222"
            height="100px"
            width="100px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="-51.18 -51.18 614.12 614.12"
            xml:space="preserve"
            stroke="#dd2222"
          >
            <g
              id="SVGRepo_bgCarrier"
              stroke-width="0"
              transform="translate(94.6756,94.6756), scale(0.63)"
            >
              <rect
                x="-51.18"
                y="-51.18"
                width="614.12"
                height="614.12"
                rx="307.06"
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
              {" "}
              <g>
                {" "}
                <g>
                  {" "}
                  <path d="M436.896,74.869c-99.84-99.819-262.208-99.819-362.048,0c-99.797,99.819-99.797,262.229,0,362.048 c49.92,49.899,115.477,74.837,181.035,74.837s131.093-24.939,181.013-74.837C536.715,337.099,536.715,174.688,436.896,74.869z M361.461,331.317c8.341,8.341,8.341,21.824,0,30.165c-4.16,4.16-9.621,6.251-15.083,6.251c-5.461,0-10.923-2.091-15.083-6.251 l-75.413-75.435l-75.392,75.413c-4.181,4.16-9.643,6.251-15.083,6.251c-5.461,0-10.923-2.091-15.083-6.251 c-8.341-8.341-8.341-21.845,0-30.165l75.392-75.413l-75.413-75.413c-8.341-8.341-8.341-21.845,0-30.165 c8.32-8.341,21.824-8.341,30.165,0l75.413,75.413l75.413-75.413c8.341-8.341,21.824-8.341,30.165,0 c8.341,8.32,8.341,21.824,0,30.165l-75.413,75.413L361.461,331.317z"></path>{" "}
                </g>{" "}
              </g>{" "}
            </g>
          </svg>
          <h1 className="text-3xl font-medium text-center">Ups</h1>
          <p className="text-center">El pago no pudo ser realizado</p>
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

export default Error;
