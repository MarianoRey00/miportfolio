import { MercadoPagoConfig, Preference } from "mercadopago";
// import Purchase from "../models/purchase.model.js";

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
      // type: "online",
      // processing_mode: "automatic",
      payer: {
        // email: req.body.buyerEmail,
        // email: "reyfernandomario@gmail.com",
      },
      shipments: {
        mode: "not_specified",
      },
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
    // console.log(JSON.stringify(result, null, 2));

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

    console.log("paymentData", paymentData);

    // Valida que venga información necesaria
    // if (!paymentData || !paymentData.id || !paymentData.type) {
    //   return res.status(400).send("Invalid notification");
    // }

    // Verifica el estado del pago llamando al API de MercadoPago
    const client = new MercadoPagoConfig({
      accessToken:
        "APP_USR-6940934011168077-120507-1818f37c83edd6361987165d794daa45-2137972120",
    });
    const payment = await client.payment.findById(paymentData.id);
    console.log("payment: ", payment);

    // Guarda los datos en la base de datos
    // if (payment.status === "approved") {
    //   const newPurchase = new Purchase({
    //     title: payment.additional_info.items[0].title,
    //     price: payment.transaction_amount,
    //     status: payment.status,
    //     buyer: payment.payer.email,
    //     createdAt: new Date(),
    //   });
    //   await newPurchase.save();
    // }

    // res.status(200).send("Notification received");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error papu");
  }
};

// mercadopago.configurations.setAccessToken(
//   "APP_USR-6940934011168077-120507-1818f37c83edd6361987165d794daa45-2137972120"
// );
// switch (type) {
//   case "payment":
//     const payment = await mercadopago.payment.findById(data.id);
//     console.log(payment);
//     break;
// }
