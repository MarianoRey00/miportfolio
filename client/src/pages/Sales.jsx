import { React, useState, useEffect } from "react";
import { useSales } from "../context/SaleContext";
import { useUsers } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

function Sales() {
  const { getSales } = useSales();
  const { getUserById } = useUsers();
  const [sales, setSales] = useState([]);
  const navigate = useNavigate();
  const now = new Date();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();

  useEffect(() => {
    (async () => {
      const res = await getSales();
      setSales(res);
    })();
  }, []);

  const monthSales = sales.filter((sale) => {
    const date = new Date(sale.createdAt);
    return (
      date.getMonth() === currentMonth && date.getFullYear() === currentYear
    );
  });

  const monthTotal = monthSales.reduce((acc, sale) => acc + sale.price, 0);

  const orderedSales = [...sales].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  const getUser = async (id) => {
    const user = await getUserById(id);
    console.log(user.username);
    navigate(`/admin/${user.username}`);
  };

  return (
    <>
      <h1 className="text-sm uppercase font-semibold mb-6 text-orange-50">
        Ventas
      </h1>
      <div className="flex justify-between">
        <div className="bg-neutral-700 px-8 py-12 w-[30%] rounded-lg">
          <span className="text-5xl font-semibold">{monthSales.length}</span>
          <br />
          <span>Ventas mensuales</span>
        </div>
        <div className="bg-neutral-700 px-8 py-12 w-[30%] rounded-lg">
          <span className="text-5xl font-semibold">${monthTotal}</span>
          <br />
          Ingresos mensuales
        </div>
        <div className="bg-neutral-700 px-8 py-12 w-[30%] rounded-lg">
          <span className="text-5xl font-semibold">{sales.length}</span>
          <br />
          Ventas totales
        </div>
      </div>
      <h2 className="text-sm uppercase font-semibold mt-6 text-orange-50">
        Ventas recientes
      </h2>
      <div className="flex flex-col gap-4">
        <table className="w-full text-left mt-6 border border-neutral-700">
          <thead className="bg-neutral-700 text-orange-50">
            <tr>
              <th className="p-3">ID</th>
              <th className="p-3">Plan</th>
              <th className="p-3">ID Comprador</th>
              <th className="p-3">Precio</th>
              <th className="p-3">Fecha</th>
            </tr>
          </thead>
          <tbody className="text-orange-50">
            {orderedSales.map((sale) => {
              return (
                <tr className="hover:bg-neutral-700">
                  <td className="p-3 text-sm">{sale._id}</td>
                  <td className="p-3">{sale.title}</td>
                  <td
                    className="p-3 cursor-pointer hover:underline text-sm"
                    onClick={() => getUser(sale.buyer)}
                  >
                    {sale.buyer}
                  </td>
                  <td className="p-3">${sale.price}</td>
                  <td className="p-3">
                    {new Date(sale.createdAt).toLocaleString("es-AR", {
                      dateStyle: "short",
                      timeStyle: "short",
                    })}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Sales;
