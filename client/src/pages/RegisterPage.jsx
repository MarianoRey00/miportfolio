import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { PiEyeLight } from "react-icons/pi";
import { PiEyeSlashLight } from "react-icons/pi";
import Navbar from "../components/Navbar";
import PulseLoader from "react-spinners/PulseLoader";
import Input from "../components/Input";

function RegisterPage() {
  const { signUp, isAuthenticated, errors, setErrors, loading } = useAuth();
  const [viewPassword, setViewPassword] = useState(false);
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const toggleViewPassword = (value) => {
    setViewPassword(value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signUp(user);
  };

  useEffect(() => {
    setErrors([]);
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/panel");
    }
  }, [isAuthenticated]);

  return (
    <>
      <Navbar background={"#fff7ed"} border={"1px solid #18181b"} />
      <section className="flex justify-center items-center bg-orange-50 min-h-screen">
        <div className="flex flex-col lg:justify-center lg:items-center w-full xs:w-[75%] md:w-[50%] lg:w-[40%] px-4 mb-28">
          <div>
            <p className="text-3xl mb-8 text-left text-customColor-blue">
              Registrarse
            </p>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="text-neutral-900 text-sm" htmlFor="nombre">
                  Nombre *
                </label>
                <div className="text-zinc-900 border border-customColor-blue px-3 py-2 rounded-xl bg-orange-50 w-full flex  mt-2">
                  <label className="text-gray-400" htmlFor="nombre">
                    miportfolio.com/
                  </label>
                  <input
                    id="nombre"
                    type="text"
                    className="text-zinc-900 w-full bg-orange-50 focus:outline-none"
                    placeholder="Nombre"
                    name="username"
                    onChange={handleChange}
                  />
                </div>
                <p className="text-red-600">
                  {errors?.find((error) => error.field === "username")?.message}
                </p>
              </div>
              <div className="mb-2 w-full lg:w-96 flex flex-col gap-2">
                <label className="text-neutral-900 text-sm" htmlFor="email">
                  Email *
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Email"
                  name="email"
                  onChange={handleChange}
                  errors={errors}
                />
              </div>
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
                    id="contraseña"
                    className="text-zinc-900 w-full bg-orange-50 focus:outline-none"
                    placeholder="Contraseña"
                    aria-label="contraseña"
                    name="password"
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
                <p className="text-red-600">
                  {errors?.find((error) => error.field === "password")?.message}
                </p>
              </div>

              <button
                type="submit"
                className="text-orange-50 px-3 py-2 bg-neutral-900 rounded-xl w-full hover:bg-neutral-800"
                disabled={loading}
              >
                {loading ? (
                  <PulseLoader color="#ffffff" size={7} />
                ) : (
                  "Registrarse"
                )}
              </button>
              <p className="text-center mt-6 text-customColor-blue">
                ¿Ya tenes cuenta?{" "}
                <Link to="/login" className="underline">
                  Ingresar
                </Link>
              </p>
            </form>
          </div>
        </div>
        <div className="hidden md:block md:w-[50%] lg:w-[60%] bg-repeat bg-[url('assets/Pattern.svg')] h-screen"></div>
      </section>
    </>
  );
}

export default RegisterPage;
