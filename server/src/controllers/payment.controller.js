import { MercadoPagoConfig, Preference, Payment } from "mercadopago";
import Sale from "../models/sale.model.js";
import User from "../models/user.model.js";

export const createPreference = async (req, res) => {
  const client = new MercadoPagoConfig({
    accessToken: process.env.MERCADO_PAGO_ACCESS_TOKEN,
  });

  //credenciales de produccion de la cuenta de prueba de vendedor.
  try {
    const body = {
      items: [
        {
          title: req.body.title,
          quantity: Number(req.body.quantity),
          unit_price: Number(req.body.price),
          currency_id: "ARS",
          category_id: "others",
        },
      ],
      external_reference: req.body.user.id,
      // external_reference: "684cdd5d1617bf3cbdc55626",
      back_urls: {
        success: "https://miportfolio18.vercel.app/panel/compra-exitosa",
        failure: "https://miportfolio18.vercel.app/panel/compra-fallida",
        pending: "https://miportfolio18.vercel.app/panel/compra-pendiente",
      },
      auto_return: "approved",
      notification_url: "https://miportfolio-api.onrender.com/api/webhook",
    };

    const preference = new Preference(client);
    const result = await preference.create({ body });
    console.log("Preferencia: ", result);
    res.json({
      id: result.id,
    });
  } catch (error) {
    console.log(error);
  }
};

export const webhook = async (req, res) => {
  try {
    const paymentData = req.body;

    const client = new MercadoPagoConfig({
      accessToken: process.env.MERCADO_PAGO_ACCESS_TOKEN,
    });

    const payment = await new Payment(client).get({ id: paymentData.data.id });
    console.log("payment: ", payment);

    if (payment.status === "approved") {
      await createSale(payment);
    }

    res.status(200).send("Notification received");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

const createSale = async (payment) => {
  try {
    const newSale = new Sale({
      title: payment.additional_info.items[0].title,
      price: payment.transaction_amount,
      status: payment.status,
      buyer: payment.external_reference,
      createdAt: new Date(),
    });
    await newSale.save();
    await upgradePlan(payment.external_reference);
  } catch (error) {
    console.log("createSale: ", error);
  }
};

const upgradePlan = async (user_id) => {
  try {
    await User.findByIdAndUpdate(
      user_id,
      { plan: "Profesional" },
      { new: true }
    );
  } catch (error) {
    console.log("upgradePlan: ", error);
  }
};
