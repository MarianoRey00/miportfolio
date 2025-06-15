import { createContext, useContext, useEffect, useState } from "react";
import { getSalesRequest, getUserSalesRequest } from "../api/sale.js";

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

  const getUserSales = async (id) => {
    const res = await getUserSalesRequest(id);
    console.log(res);
    return res.data;
  };

  return (
    <SaleContext.Provider value={{ getSales, getUserSales }}>
      {children}
    </SaleContext.Provider>
  );
}
