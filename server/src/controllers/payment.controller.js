import { MercadoPagoConfig, Preference, Payment } from "mercadopago";
import Purchase from "../models/purchase.model.js";
import User from "../models/user.model.js";

export const createPreference = async (req, res) => {
  const client = new MercadoPagoConfig({
    accessToken:
      "APP_USR-1982143083468999-120418-e0f852feda4d009ed3f6c3c2f1aadba9-342378781",
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
      // external_reference: req.body.user_id,
      external_reference: "684802b3b9e76b6bbc939d48",
      back_urls: {
        success: "https://miportfolio18.vercel.app/panel",
        failure: "https://www.instagram.com",
        pending: "https://miportfolio18.vercel.app/panel/cambiar-plan",
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

    console.log("paymentData: ", paymentData);

    // Valida que venga información necesaria
    // if (!paymentData || !paymentData.id || !paymentData.type) {
    //   return res.status(400).send("Invalid notification");
    // }
    const client = new MercadoPagoConfig({
      accessToken:
        "APP_USR-1982143083468999-120418-e0f852feda4d009ed3f6c3c2f1aadba9-342378781",
    });

    const payment = await new Payment(client).get({ id: paymentData.data.id });
    console.log("payment: ", payment);

    if (payment.status === "approved") {
      await createPurchase(payment);
    }

    res.status(200).send("Notification received");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

const createPurchase = async (payment) => {
  try {
    const newPurchase = new Purchase({
      title: payment.additional_info.items[0].title,
      price: payment.transaction_amount,
      status: payment.status,
      buyer: payment.external_reference,
      createdAt: new Date(),
    });
    await newPurchase.save();
    await upgradePlan(payment.external_reference);
  } catch (error) {
    console.log("createPurchase: ", error);
  }
};

const upgradePlan = async (user_id) => {
  try {
    await User.findByIdAndUpdate(user_id, { plan: "Premium" }, { new: true });
  } catch (error) {
    console.log("upgradePlan: ", error);
  }
};
