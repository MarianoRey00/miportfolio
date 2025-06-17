import React from "react";
import { Link } from "react-router-dom";
function Pending() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="p-8 rounded-lg border border-white shadow-md shadow-neutral-700 flex flex-col items-center gap-4">
          <svg
            width="95px"
            height="95px"
            viewBox="-7.44 -7.44 38.88 38.88"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              id="SVGRepo_bgCarrier"
              stroke-width="0"
              transform="translate(0,0), scale(1)"
            >
              <rect
                x="-7.44"
                y="-7.44"
                width="38.88"
                height="38.88"
                rx="19.44"
                fill="#6ccaea"
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
              <path
                d="M13 6H11V7C11 7.55228 11.4477 8 12 8C12.5523 8 13 7.55228 13 7V6Z"
                fill="#ffffff"
              ></path>{" "}
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6 2V4H7V7C7 9.76142 9.23858 12 12 12C9.23858 12 7 14.2386 7 17V20H6V22H18V20H17V17C17 14.2386 14.7614 12 12 12C14.7614 12 17 9.76142 17 7V4H18V2H6ZM9 4H15V7C15 8.65685 13.6569 10 12 10C10.3431 10 9 8.65685 9 7V4ZM9 17V20H15V17C15 15.3431 13.6569 14 12 14C10.3431 14 9 15.3431 9 17Z"
                fill="#ffffff"
              ></path>{" "}
            </g>
          </svg>
          <h1 className="text-3xl font-medium text-center">
            Gracias por elegir a miportfolio
          </h1>
          <p className="text-center">El pago esta siendo procesado.</p>
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

export default Pending;
