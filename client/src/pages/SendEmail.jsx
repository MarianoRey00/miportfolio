import { useState } from "react";
import { useUsers } from "../context/UserContext";
import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { PiEyeLight } from "react-icons/pi";
// import { PiEyeSlashLight } from "react-icons/pi";
import Navbar from "../components/Navbar";
import PulseLoader from "react-spinners/PulseLoader";
import Input from "../components/Input";

function ChangePassword() {
  const { verifyEmail } = useUsers();

  const [email, setEmail] = useState({
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmail({ ...email, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await verifyEmail(email);
  };

  return (
    <>
      <Navbar background={"#fff7ed"} border={"1px solid #18181b"} />
      <section className="flex justify-center items-center bg-orange-50 min-h-screen">
        <div className="flex flex-col lg:justify-center lg:items-center w-full xs:w-[75%] md:w-[50%] lg:w-[40%] px-4 mb-28">
          <div>
            <p className="text-3xl mb-8 text-left text-customColor-blue">
              Ingresa tu email
            </p>
            <form onSubmit={handleSubmit}>
              <div className="mb-3 w-full lg:w-96 flex flex-col gap-2">
                <label className="text-neutral-900 text-sm" htmlFor="email">
                  Email *
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  onChange={handleChange}
                />
              </div>
              <button
                type="submit"
                className="text-orange-50 px-3 py-2 bg-neutral-900 rounded-xl w-full hover:bg-neutral-800"
              >
                ingresar
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
