import { MercadoPagoConfig, Preference } from "mercadopago";
// import Purchase from "../models/purchase.model.js";

export const createPreference = async (req, res) => {
  const client = new MercadoPagoConfig({
    accessToken:
      "APP_USR-6940934011168077-120507-1818f37c83edd6361987165d794daa45-2137972120",
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
        },
      ],
      back_urls: {
        success: "https://www.instagram.com",
        failure: "https://www.instagram.com",
        pending: "https://www.instagram.com",
      },
      auto_return: "approved",
      notification_url: "http://localhost:3000/api/webhook",
    };

    const preference = new Preference(client);
    const result = await preference.create({ body });
    console.log(result);
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

    // Valida que venga información necesaria
    if (!paymentData || !paymentData.id || !paymentData.type) {
      return res.status(400).send("Invalid notification");
    }

    // Verifica el estado del pago llamando al API de MercadoPago
    const paymentId = paymentData.id;
    const client = new MercadoPagoConfig({
      accessToken:
        "APP_USR-6940934011168077-120507-1818f37c83edd6361987165d794daa45-2137972120",
    });
    const payment = await client.payment.findById(paymentId);

    // Guarda los datos en la base de datos
    if (payment.status === "approved") {
      const newPurchase = new Purchase({
        title: payment.additional_info.items[0].title,
        price: payment.transaction_amount,
        status: payment.status,
        buyer: payment.payer.email,
        createdAt: new Date(),
      });
      await newPurchase.save();
    }

    res.status(200).send("Notification received");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
