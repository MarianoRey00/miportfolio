import { useState } from "react";
import { useUsers } from "../context/UserContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { PiEyeLight } from "react-icons/pi";
import { PiEyeSlashLight } from "react-icons/pi";
import Navbar from "../components/Navbar";
import PulseLoader from "react-spinners/PulseLoader";
import Input from "../components/Input";
import { useSearchParams } from "react-router-dom";

function ChangePassword() {
  const { changePassword } = useUsers();
  const [viewPassword, setViewPassword] = useState(false);
  const [password, setPassword] = useState({
    password: "",
  });
  const [searchParams] = useSearchParams();
  const email = searchParams.get("email");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPassword({ ...password, [name]: value });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      console.log(email);
      console.log(password);
      const success = await changePassword(email, password);
      if (success) {
        toast.success("¡Contraseña actualizada con exito!");
        onClose(true);
      }
    } catch (error) {}
  }

  const toggleViewPassword = (value) => {
    setViewPassword(value);
  };
  return (
    <>
      <Navbar background={"#fff7ed"} border={"1px solid #18181b"} />
      <section className="flex justify-center items-center bg-orange-50 min-h-screen">
        <div className="flex flex-col lg:justify-center lg:items-center w-full xs:w-[75%] md:w-[50%] lg:w-[40%] px-4 mb-28">
          <div>
            <p className="text-3xl mb-8 text-left text-customColor-blue">
              Elegir nueva contraseña
            </p>
            <form onSubmit={handleSubmit}>
              <div className="mb-4 w-full lg:w-96 flex flex-col gap-2">
                <label
                  className="text-neutral-900 text-sm"
                  htmlFor="contraseña"
                >
                  Contraseña *
                </label>
                <div className="text-zinc-900 border border-customColor-blue px-3 py-2 rounded-xl bg-orange-50 w-full flex">
                  <input
                    type={viewPassword ? "text" : "password"}
                    name="password"
                    id="contraseña"
                    className="text-zinc-900 w-full bg-orange-50 focus:outline-none"
                    placeholder="Contraseña"
                    aria-label="contraseña"
                    onChange={handleChange}
                  />
                  {viewPassword === false ? (
                    <PiEyeLight
                      className="text-black text-2xl cursor-pointer"
                      onClick={() => toggleViewPassword(true)}
                    />
                  ) : (
                    <PiEyeSlashLight
                      className="text-black text-2xl cursor-pointer"
                      onClick={() => toggleViewPassword(false)}
                    />
                  )}
                </div>
                {/* <p className="text-red-600">
                  {errors?.find((error) => error.field === "password")?.message}
                </p> */}
              </div>

              <button
                type="submit"
                className="text-orange-50 px-3 py-2 bg-neutral-900 rounded-xl w-full hover:bg-neutral-800"
              >
                {/* {loading ? (
                  <PulseLoader color="#ffffff" size={7} />
                ) : (
                  "Ingresar"
                )} */}{" "}
                Enviar
              </button>
            </form>
          </div>
        </div>
        <div className="hidden md:block md:w-[50%] lg:w-[60%] bg-repeat bg-[url('assets/Pattern.svg')] h-screen"></div>
      </section>
    </>
  );
}

export default ChangePassword;
