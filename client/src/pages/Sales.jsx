import React from "react";

function Sales() {
  const ventas = [
    { id: 1, precio: 100 },
    { id: 2, precio: 150 },
    { id: 3, precio: 200 },
  ];

  const totalIncome = ventas.reduce((acc, venta) => acc + venta.precio, 0);

  return (
    <>
      <h1 className="text-sm uppercase font-semibold mb-6 text-orange-50">
        Ventas
      </h1>
      <div className="flex justify-between">
        <div className="bg-neutral-700 px-8 py-12 w-[30%] rounded-lg">
          <span className="text-3xl font-semibold">100</span>
          <br />
          <span>Ventas de este mes</span>
        </div>
        <div className="bg-neutral-700 px-8 py-12 w-[30%] rounded-lg">
          <span className="text-3xl font-semibold">${totalIncome}</span>
          <br />
          Ingresos mensuales
        </div>
        <div className="bg-neutral-700 px-8 py-12 w-[30%] rounded-lg">
          <span className="text-3xl font-semibold">100</span>
          <br />
          Ventas totales
        </div>
      </div>
    </>
  );
}

export default Sales;
