import { React, useState, useEffect } from "react";
import { useSales } from "../context/SaleContext";
import { useUsers } from "../context/UserContext";

function Sales() {
  const ventas = [
    { id: 1, precio: 100 },
    { id: 2, precio: 150 },
    { id: 3, precio: 200 },
  ];
  const { getSales } = useSales();
  const { getUserById } = useUsers();
  const [sales, setSales] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await getSales();
      setSales(res);
    })();
  }, []);

  const totalIncome = ventas.reduce((acc, venta) => acc + venta.precio, 0);

  const orderedSales = [...sales].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );
  return (
    <>
      <h1 className="text-sm uppercase font-semibold mb-6 text-orange-50">
        Ventas
      </h1>
      <div className="flex justify-between">
        <div className="bg-neutral-700 px-8 py-12 w-[30%] rounded-lg">
          <span className="text-5xl font-semibold">100</span>
          <br />
          <span>Ventas mensuales</span>
        </div>
        <div className="bg-neutral-700 px-8 py-12 w-[30%] rounded-lg">
          <span className="text-5xl font-semibold">${totalIncome}</span>
          <br />
          Ingresos mensuales
        </div>
        <div className="bg-neutral-700 px-8 py-12 w-[30%] rounded-lg">
          <span className="text-5xl font-semibold">100</span>
          <br />
          Ventas totales
        </div>
      </div>
      <h2 className="text-sm uppercase font-semibold my-6 text-orange-50">
        Ventas recientes
      </h2>
      <div className="flex flex-col gap-4">
        {/* {orderedSales.map((sale) => (
          <div className="bg-neutral-700 flex gap-4">
            <h1>Plan: {sale.title}</h1>
            <p>ID: {sale._id}</p>
            <p>Precio: {sale.price}</p>
            <p>Estado: {sale.status}</p>
            <p>Id comprador: {sale.buyer}</p>
            <p>Fecha: {new Date(sale.createdAt).toLocaleString()}</p>
          </div>
        ))} */}
        <table className="w-full text-left border-collapse mt-6">
          <thead className="bg-neutral-800 text-orange-100">
            <tr>
              <th className="p-3">ID</th>
              <th className="p-3">Plan</th>
              <th className="p-3">Comprador</th>
              <th className="p-3">Precio</th>
              <th className="p-3">Estado</th>
              <th className="p-3">Fecha</th>
            </tr>
          </thead>
          <tbody className="text-zinc-300">
            {orderedSales.map(async (sale) => {
              const user = await getUserById(sale.buyer);
              console.log(user);
              return (
                <tr className="hover:bg-neutral-700">
                  <td className="p-3">{sale._id}</td>
                  <td className="p-3">{sale.title}</td>
                  <td className="p-3">{user.username}</td>
                  <td className="p-3">${sale.price}</td>
                  <td className="p-3 capitalize">{sale.status}</td>
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
