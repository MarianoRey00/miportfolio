import { React, useEffect } from "react";
import { usePlans } from "../context/PlanContext";
import { Link } from "react-router-dom";
import Logo from "../components/Logo.jsx";
import Logo2 from "../components/Logo2.jsx";
import CellMockup from "../assets/Mockup.png";
import Navbar from "../components/Navbar";
import { BsFileEarmarkArrowUp } from "react-icons/bs";
import { BsLightningCharge } from "react-icons/bs";
import { LuPalette } from "react-icons/lu";
function HomePage() {
  const { getPlans, plans } = usePlans();

  useEffect(() => {
    getPlans();
  }, []);
  return (
    <>
      <Navbar background={"#fff7ed"} />
      {/* <Navbar background={"#18181b"} border={"1px solid #fff7ed"} /> */}

      {/* <section className="flex flex-col justify-between items-center md:items-start bg-orange-50 px-10 py-12 gap-6 md:flex md:flex-row md:justify-between md:bg-orange-50 md:px-10 md:py-12">
        <div className="md:w-[50%] text-customColor-blue ">
          <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl lg:text-7xl">
            <span>
              Crea tu portfolio online en minutos con <span className="hidden">miportfolio</span>
            </span>
            <Logo2 className="w-[230px] h-[60px] lg:w-[400px] lg:h-[120px] inline-block lg:ml-4" />
            .
          </h1>
          <p className="text-lg  mt-8 md:text-xl">
            Empezá a usar la mejor página de Link in Bio para compartir tus
            trabajos.
          </p>
          <Link
            to="/register"
            className="bg-customColor-blue mt-12 text-orange-50 w-56 h-12 py-3 px-8 block md:h-16 md:py-5 hover:bg-slate-900"
          >
            Empezar ahora
            <svg
              className="inline ml-4"
              width="24"
              height="12"
              viewBox="0 0 31 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 8L30 8" stroke="white" stroke-width="2" />
              <path
                d="M30 7.99167C26.6667 8.12486 20 6.713 20 0"
                stroke="white"
                stroke-width="2"
              />
              <path
                d="M30 8.00833C26.6667 7.87514 20 9.287 20 16"
                stroke="white"
                stroke-width="2"
              />
            </svg>
          </Link>
        </div>
        <div className="w-full xxs:w-[95%] xs:w-[80%] md:w-[25%] flex justify-center">
          <img
            src={CellMockup}
            alt=""
            className="Imagen de un perfil de miportfolio."
          />
        </div>
      </section> */}

      <section className="flex flex-col justify-between items-center md:items-start bg-neutral-900 px-10 py-12 gap-6 md:flex md:flex-row md:justify-between md:px-10 md:py-12">
        <div className="md:w-[70%] text-orange-50 md:pt-8">
          <h1 className="text-3xl font-semibold sm:text-4xl md:text-5xl lg:text-[90px]">
            <span>Crea tu portfolio con miportfolio.</span>
          </h1>
          <p className="text-lg mt-8 md:text-xl">
            Empezá a usar la mejor página de Link in Bio para compartir tus
            trabajos.
          </p>
          <Link
            to="/register"
            className="bg-orange-50 mt-12 text-neutral-900 rounded-lg w-56 h-12 py-3 px-8 block md:h-16 md:py-5 group"
          >
            Empezar ahora
            <svg
              className="inline ml-2 group-hover:ml-4 "
              width="24"
              height="12"
              viewBox="0 0 31 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 8L30 8" stroke="black" stroke-width="2" />
              <path
                d="M30 7.99167C26.6667 8.12486 20 6.713 20 0"
                stroke="black"
                stroke-width="2"
              />
              <path
                d="M30 8.00833C26.6667 7.87514 20 9.287 20 16"
                stroke="black"
                stroke-width="2"
              />
            </svg>
          </Link>
        </div>
        <div className="w-full xxs:w-[95%] xs:w-[80%] md:w-[25%] flex justify-start">
          <img
            src={CellMockup}
            alt="Imagen de un perfil de miportfolio."
            className="h-[80%] w-[90%]"
          />
        </div>
      </section>

      {/* <section className="bg-customColor-blue px-8 py-32">
        <div className="flex flex-col border border-white px-6 py-16 rounded-xl gap-4 md:flex-row lg:gap-16">
          <div className="lg:w-[50%]">
            <h2 className="text-3xl mb-4 md:text-4xl lg:text-5xl">
              ¡Compartí tu trabajo!
            </h2>
            <p className="text-base mb-8 md:text-lg font-sans font-medium">
              miportfolio permite subir fotos, videos y archivos PDF, haciendolo
              ideal para un sin fin de áreas.
            </p>
            <Link to="/register">
              <button className="hidden md:block rounded-lg py-4 px-8 bg-customColor-purple">
                Registrarse
              </button>
            </Link>
          </div>
          <div className="grid gap-4 md:gap-2 lg:gap-8 xs:grid-cols-2 lg:grid-cols-3">
            <div className="bg-customColor-purple text-xs px-2 h-10 rounded flex items-center justify-center sm:text-sm sm:px-4 lg:text-base lg:w-32 lg:px-0">
              <p>Cocina</p>
            </div>
            <div className="bg-customColor-purple text-xs px-2 h-10 rounded flex items-center justify-center sm:text-sm sm:px-4 lg:text-base">
              <p>Música</p>
            </div>
            <div className="bg-customColor-purple text-xs px-4 h-10 rounded flex items-center justify-center sm:text-sm sm:px-4 lg:text-base lg:w-32 lg:px-0">
              <p>Pintura</p>
            </div>
            <div className="bg-customColor-purple text-xs px-4 h-10 rounded flex items-center justify-center sm:text-sm sm:px-4 lg:text-base">
              <p>Programación</p>
            </div>
            <div className="bg-customColor-purple text-xs px-4 h-10 rounded flex items-center justify-center sm:text-sm sm:px-4 lg:text-base lg:w-32 lg:px-0">
              <p>Animación</p>
            </div>
            <div className="bg-customColor-purple text-xs px-4 h-10 rounded flex items-center justify-center sm:text-sm sm:px-4 lg:text-base lg:w-32 lg:px-0">
              <p>Fotografia</p>
            </div>
            <div className="bg-customColor-purple text-xs px-4 h-10 rounded flex items-center justify-center sm:text-sm sm:px-4 lg:text-base lg:w-32 lg:px-0">
              <p>Diseño</p>
            </div>
            <div className="bg-customColor-purple text-xs px-4 h-10 rounded flex items-center justify-center sm:text-sm sm:px-4 lg:text-base">
              <p>Arquitectura</p>
            </div>
            <div className="bg-customColor-purple text-xs px-4 h-10 rounded flex items-center justify-center sm:text-sm sm:px-4 lg:text-base lg:px-4">
              <p>Escritura</p>
            </div>
          </div>
          <Link to="/register">
            <button className="block w-32 py-4 px-4 text-sm rounded-lg mt-6 bg-customColor-purple sm:text-lg sm:px-6 sm:w-40 md:hidden">
              Registrarse
            </button>
          </Link>
        </div>
      </section> */}

      <section className="bg-neutral-900 text-gray-100 px-8 py-16 border-t">
        <h2 className="text-2xl font-semibold mb-6 text-center md:text-4xl">
          ¿Por qué nos eligen nuestros usuarios?
        </h2>
        <div className="flex justify-between">
          <div className="w-[30%] border border-white shadow-md shadow-neutral-700 h-80 rounded-lg p-8 flex flex-col justify-between">
            <div className="border border-white p-3 rounded-full w-[60px] flex justify-center items-center">
              <BsLightningCharge className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold">Simpleza y rapidez</h3>
              <p>
                Con miportfolio podes crear y compartir tu portfolio en minutos
              </p>
            </div>
          </div>

          <div className="w-[30%] border border-white shadow-md shadow-neutral-700 h-80 rounded-lg p-8 flex flex-col justify-between">
            <div className="border border-white p-3 rounded-full w-[60px] flex justify-center items-center">
              <LuPalette className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold">Personalización</h3>
              <p>Vas a poder personalizar tu portfolio a tu gusto</p>
            </div>
          </div>
          <div className="w-[30%] border border-white shadow-md shadow-neutral-700 h-80 rounded-lg p-8 flex flex-col justify-between">
            <div className="border border-white p-3 rounded-full w-[60px] flex justify-center items-center">
              <BsFileEarmarkArrowUp className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold">Soporte de archivos</h3>
              <p>
                miportfolio permite la subida de fotos y videos con distintas
                extensiones
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-900 flex flex-col gap-16 justify-center items-center p-8 md:p-16 lg:p-32 border-t">
        <div>
          <h2 className="text-2xl text-orange-50 font-semibold sm:text-3xl md:text-6xl md:text-center">
            Compartí lo que sabes hacer, allá afuera hay alguien que lo necesita
            pero que todavia no lo sabe.
          </h2>
        </div>
        <Link
          to="/register"
          className="border bg-orange-50 text-neutral-900 hover:bg-neutral-900 hover:border-white hover:text-orange-50 px-4 py-4 text-base rounded-lg w-54 sm:py-6 md:text-xl md:w-64 md:px-6"
        >
          Empezar a compartir
        </Link>
      </section>

      <section className="bg-neutral-900 p-8 border-y">
        <h2 className="text-center text-4xl font-semibold text-orange-50 mb-6">
          Planes
        </h2>
        <div className="flex flex-wrap py-4 md:justify-between px-4 md:px-10 lg:px-24">
          {plans.map((plan) => (
            <div className="w-full md:w-[45%] bg-orange-50 rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-10">
              <div className="px-6 py-8 border-b border-gray-200 bg-neutral-900">
                <h2 className="text-3xl font-semibold text-orange-50">
                  {plan.title}
                </h2>
                <p className="text-lg text-orange-50">{plan.description}</p>
              </div>

              <div className="p-6">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between">
                  <div className="mb-4 sm:mb-0">
                    <h3 className="text-2xl text-gray-900">${plan.price}</h3>
                    <p className="text-gray-600 mt-1 text-xl">
                      Duración: {plan.duration}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200 h-72">
                  <h4 className="font-medium text-gray-900 mb-3">Incluye:</h4>
                  <ul className="">
                    {plan.features.map((feature) => (
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2 mt-1 font-bold">
                          ✓
                        </span>
                        <span className="text-gray-700 text-base">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-zinc-900 p-8 flex items-center justify-center">
        <Link to="/">
          <Logo
            logoColor="#FFF7ED"
            textColor="#FFF7ED"
            logoWidth="250"
            logoHeight="100"
            className="w-[250px] h-[100px] sm:w-[400px] sm:h-[155px] lg:w-[611px] lg:h-[155px]"
          />
        </Link>
      </footer>
    </>
  );
}

export default HomePage;
