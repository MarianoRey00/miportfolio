import { React, useState, useEffect } from "react";
import { useSales } from "../context/SaleContext";

function ProfilePurchases({ user }) {
  const { getUserSales } = useSales();
  const [sales, setSales] = useState([]);
  useEffect(() => {
    (async () => {
      const sales = await getUserSales(user._id);
      setSales(sales);
    })();
  }, []);
  return (
    <>
      <div className="flex flex-col gap-3 ">
        {sales.length === 0 ? (
          <div>
            <h2 className="text-lg font-medium">
              Todavia no tenes compras realizadas
            </h2>
          </div>
        ) : (
          <>
            {sales.map((sale) => (
              <div className="flex flex-col  py-6 px-6 rounded-lg gap-6 border border-white shadow-md shadow-neutral-700">
                <div className="flex justify-between">
                  <div className="flex items-center gap-2">
                    <svg
                      width="40"
                      height="40"
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
                        class="dynamic-stroke"
                        d="M82.7615 9.42418L143.343 44.8298C144.11 45.2781 144.581 46.0998 144.581 46.9882V118.012C144.581 118.9 144.11 119.722 143.343 120.17L82.7614 155.576C81.9821 156.031 81.0179 156.031 80.2385 155.576L19.6575 120.17C18.8904 119.722 18.4189 118.9 18.4189 118.012V46.9882C18.4189 46.0998 18.8904 45.2781 19.6575 44.8298L80.2386 9.42417C81.0179 8.96873 81.9821 8.96872 82.7615 9.42418Z"
                        stroke="#FFF7ED"
                        stroke-width="15"
                      />
                    </svg>
                    <p className="text-xl font-medium text-neutral-100">
                      {sale.title}
                    </p>
                  </div>
                  <p className="mt-2.5 text-neutral-400">
                    {new Date(sale.createdAt).toLocaleString()}
                  </p>
                </div>
                <p className="text-neutral-300">
                  <span className="font-medium text-neutral-200">Precio:</span>{" "}
                  ${sale.price}
                </p>
              </div>
            ))}
          </>
        )}
      </div>
    </>
  );
}

export default ProfilePurchases;
