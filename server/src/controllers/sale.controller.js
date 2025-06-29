import Sale from "../models/sale.model.js";

export const getSales = async (req, res) => {
  try {
    const sales = await Sale.find();
    res.status(200).json(sales);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener ventas", error });
  }
};

export const getUserPurchases = async (req, res) => {
  const sales = await Sale.find({ buyer: req.params.id });
  res.status(200).json(sales);
};
