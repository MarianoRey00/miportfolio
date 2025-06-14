import { createContext, useContext, useState } from "react";

const SaleContext = createContext();

export const useNotification = () => {
  const context = useContext(NotificationContext);
  return context;
};

export function SaleProvider({ children }) {
  const [sales, setSales] = useState(null);

  const getSales = async () => {
    const sales = await getSalesRequest();
    setSales(sales);
  };

  return (
    <SaleContext.Provider value={{ getSales }}>{children}</SaleContext.Provider>
  );
}
