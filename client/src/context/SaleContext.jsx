import { createContext, useContext, useEffect, useState } from "react";
import { getSalesRequest } from "../api/sale.js";

const SaleContext = createContext();

export const useSales = () => {
  const context = useContext(SaleContext);
  return context;
};

export function SaleProvider({ children }) {
  const getSales = async () => {
    const res = await getSalesRequest();
    return res.data;
  };

  return (
    <SaleContext.Provider value={{ getSales }}>{children}</SaleContext.Provider>
  );
}
