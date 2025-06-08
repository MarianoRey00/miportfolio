import { useState } from "react";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import axios from "axios";
import Navbar from "../components/Navbar";

function UpgradePage() {
  const [preferenceId, setPreferenceId] = useState(null);
  initMercadoPago("APP_USR-46c99d09-a8af-425c-b1ec-d5e5c40616ee", {
    locale: "es-AR",
  });

  const createPreference = async () => {
    try {
      const response = await axios.post(
        "https://miportfolio-api.onrender.com/api/create-preference",
        {
          title: "Miportfolio Premium",
          quantity: 1,
          price: 10,
        }
      );
      const { id } = response.data;
      return id;
    } catch (error) {
      console.log(error);
    }
  };

  const handleBuy = async () => {
    const id = await createPreference();
    if (id) {
      setPreferenceId(id);
    }
  };

  return (
    <>
      <Navbar background={"#18181b"} border={"1px solid #fff7ed"} />
      <div className="flex flex-col md:flex-row min-h-screen p-4 xs:p-6 md:p-8 justify-between">
        <div className="flex flex-col gap-6 ">
          <h1 className="text-5xl ">Contratar Plan premium</h1>
          <div className="">
            <h2 className="text-xl mb-4">El Plan premium ofrece:</h2>
            <ul className="font-sans font-semibold">
              <li className="mb-4">
                <span className="text-green-400">&#10003;</span> Posibilidad de
                subir videos
              </li>
              <li className="mb-4">
                <span className="text-green-400">&#10003;</span> Posibilidad de
                subir PDFs
              </li>
              <li className="mb-4">
                <span className="text-green-400">&#10003;</span> Sin logo en el
                portfolio
              </li>
              <li className="mb-4">
                <span className="text-green-400">&#10003;</span> Sin límite de
                proyectos
              </li>
              <li className="mb-4">
                <span className="text-green-400">&#10003;</span> Sin límite de
                redes sociales en el perfil
              </li>
              <li className="mb-4">
                <span className="text-green-400">&#10003;</span> Poder ver
                estadísticas?
              </li>
              {/* <li className="mb-4">✗</li> */}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 w-[95%] md:w-[50%] lg:w-[35%] py-4 rounded-xl border h-[65%] mt-6 md:mt-0">
          <div className="border-b px-6 md:px-8 pt-2 pb-4">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">
              Tu compra
            </h2>
          </div>
          <div className="px-6 md:px-8 flex flex-col gap-8 py-4">
            <div className="flex justify-between">
              <p className="text-sm sm:text-base lg:text-lg text-zinc-200">
                Miportfolio Plan premium
              </p>
              <p className="text-sm sm:text-base lg:text-lg font-mono">$100</p>
            </div>
            <button
              onClick={handleBuy}
              className="px-6 py-2 text-sm sm:text-base lg:px-6 lg:py-4 border rounded-lg hover:bg-white hover:text-zinc-800"
            >
              Comprar Plan premium
            </button>
            {preferenceId && (
              <div className="w-full overflow-hidden">
                <Wallet initialization={{ preferenceId: preferenceId }} />
                {/* customization={{ texts: { valueProp: "smart_option" } }} */}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default UpgradePage;
