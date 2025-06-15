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
      {sales.map((sale) => (
        <div>
          <h1>{sale.title}</h1>
        </div>
      ))}
    </>
  );
}

export default ProfilePurchases;
