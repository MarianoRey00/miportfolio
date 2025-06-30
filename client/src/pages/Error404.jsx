import { useLocation, Link } from "react-router-dom";
import Logo404 from "../components/Logo404";
function Error404() {
  const location = useLocation();
  const message = location.state?.message;
  return (
    <>
      <div className="min-h-screen bg-[url('assets/Pattern.svg')] ">
        <div className=" p-8 backdrop-blur-sm min-h-screen w-full  flex flex-col justify-center items-center gap-4">
          <span className="text-xl">Ups...</span>
          <Logo404
            className={
              "w-full h-full md:w-[508px] md:h-[220px] lg:w-[50%] lg:h-[50%]"
            }
          />
          <h1 className="text-4xl">Página no encontrada</h1>
          <p className="text-xl">{message}</p>
          <Link className="text-lg underline" to="/panel">
            Inicio
          </Link>
        </div>
      </div>
    </>
  );
}

export default Error404;
