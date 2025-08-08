import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { PiEyeLight } from "react-icons/pi";
import { PiEyeSlashLight } from "react-icons/pi";
import Navbar from "../components/Navbar";
import PulseLoader from "react-spinners/PulseLoader";
import Input from "../components/Input";

function ChangePassword() {
  const [viewNewPassword, setViewNewPassword] = useState(false);
  async function handleSubmit() {
    try {
      const success = await editUserPassword(newUser.id, newUser);
      if (success) {
        toast.success("¡Contraseña actualizada con exito!");
        onClose(true);
      }
    } catch (error) {}
  }

  async function handleSubmit() {
    try {
      const success = await editUser(newUser.id, newUser);
      if (success) {
        toast.success("¡Usuario actualizado con exito!");
        onClose(true);
      }
    } catch (error) {}
  }

  const toggleViewNewPassword = (value) => {
    setViewNewPassword(value);
  };
  return (
    <>
      <Navbar background={"#fff7ed"} border={"1px solid #18181b"} />
      <section className="flex justify-center items-center bg-orange-50 min-h-screen">
        <div className="flex flex-col lg:justify-center lg:items-center w-full xs:w-[75%] md:w-[50%] lg:w-[40%] px-4 mb-28">
          <div>
            <p className="text-3xl mb-8 text-left text-customColor-blue">
              Ingresar
            </p>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col mt-10 gap-4">
                <div className="flex flex-col">
                  <label htmlFor="nueva contraseña">Nueva contraseña *</label>
                  <div className="text-zinc-900 border bg-orange-50 border-neutral-900 px-3 py-2 rounded-xl flex">
                    <input
                      type={viewNewPassword ? "text" : "password"}
                      id="nueva contraseña"
                      name="newPassword"
                      className="text-zinc-900 w-full bg-orange-50 focus:outline-none placeholder-customColor-blue"
                      onChange={handleChange}
                    />
                    {viewNewPassword === false ? (
                      <PiEyeLight
                        className="text-black text-2xl cursor-pointer"
                        onClick={() => toggleViewNewPassword(true)}
                      />
                    ) : (
                      <PiEyeSlashLight
                        className="text-black text-2xl cursor-pointer"
                        onClick={() => toggleViewNewPassword(false)}
                      />
                    )}
                  </div>
                  <p className="text-red-600">
                    {
                      errors?.find((error) => error.field === "newPassword")
                        ?.message
                    }
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="hidden md:block md:w-[50%] lg:w-[60%] bg-repeat bg-[url('assets/Pattern.svg')] h-screen"></div>
      </section>
    </>
  );
}

export default ChangePassword;
