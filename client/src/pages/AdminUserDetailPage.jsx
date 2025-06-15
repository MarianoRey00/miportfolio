import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useUsers } from "../context/UserContext";
import { useProjects } from "../context/ProjectContext";
import { useSales } from "../context/SaleContext";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsSpotify } from "react-icons/bs";
import { FaPinterest } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";
import { VscArrowLeft } from "react-icons/vsc";
import { ProjectCard } from "../components/ProjectCard";
import { useNotification } from "../context/NotificationContext";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";

function AdminUserDetailPage() {
  const { username } = useParams();
  const { getPublicUser, deleteUser, userSaveLoading } = useUsers();
  const { getAdminProjects } = useProjects();
  const { getUserSales } = useSales();
  const navigate = useNavigate();
  const { showNotification } = useNotification();
  const [projects, setProjects] = useState([]);
  const [user, setUser] = useState({});
  const [sales, setSales] = useState([]);

  useEffect(() => {
    (async () => {
      const userFound = await getPublicUser(username);
      setUser(userFound);
      const projects = await getAdminProjects(userFound._id);
      setProjects(projects);
      const sales = await getUserSales(userFound._id);
      setSales(sales);
    })();
  }, []);

  const handleDelete = (_id, username) => {
    toast((t) => (
      <div className="flex flex-col gap-4">
        <p className="break-words text-center">
          ¿Desea eliminar al usuario {username}?
        </p>
        <div className="flex justify-end gap-2">
          <button
            className="bg-customColor-blue hover:bg-slate-800 px-3 py-2 text-white text-sm rounded-lg "
            onClick={() => toast.dismiss(t.id)}
          >
            Cancelar
          </button>
          <button
            className="bg-red-500 hover:bg-red-400 px-3 py-2 text-sm text-white rounded-lg "
            onClick={async () => {
              const success = await deleteUser(_id);
              toast.dismiss(t.id);
              if (success) {
                showNotification("¡Usuario eliminado con éxito!");
                navigate("/admin/usuarios");
              }
            }}
          >
            {userSaveLoading ? (
              <PulseLoader
                color="#ff0000"
                size={14}
                disabled={projectSaveLoading}
              />
            ) : (
              "Eliminar"
            )}
          </button>
        </div>
      </div>
    ));
  };

  return (
    <>
      <Toaster
        toastOptions={{
          style: {
            background: "#FFF7ED",
          },
        }}
      />
      <Link to="/admin/usuarios" className="sticky top-0 w-8 block mb-2">
        <VscArrowLeft className="w-8 h-8 cursor-pointer hover:bg-neutral-600 p-1 rounded backdrop-blur-md" />
      </Link>
      <div className="flex gap-10 bg-zinc-900 rounded-xl p-6">
        <div className="flex flex-col">
          {user.picture?.url ? (
            <img
              src={user.picture?.url}
              alt=""
              className="w-96 h-96 object-cover rounded-lg"
            />
          ) : (
            <div className="bg-zinc-700 uppercase w-96 h-96 rounded-lg flex items-center justify-center text-5xl">
              {user.username && user.username[0]}
            </div>
          )}
          <div className="flex justify-between mt-4">
            <Link
              className="bg-blue-600 px-4 py-2 rounded-lg w-[45%] hover:bg-blue-500 text-center"
              to={`/${user.username}`}
              target="_blank"
            >
              Ver perfil
            </Link>
            <button
              className="bg-red-600 px-4 py-2 rounded-lg w-[45%] hover:bg-red-500"
              onClick={() => handleDelete(user._id, username)}
            >
              Eliminar usuario
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <p className="text-xs text-neutral-500">Nombre de usuario:</p>
            <h1 className=" break-words">{user.username}</h1>
          </div>
          <div>
            <p className="text-xs text-neutral-500">Email:</p>
            <p className="break-words ">{user.email}</p>
          </div>
          <div>
            <p className="text-xs text-neutral-500">Biografia:</p>
            {user.biography ? (
              <p className="break-words text-sm">{user.biography}</p>
            ) : (
              <p>-</p>
            )}
          </div>
          <div>
            <p className="text-xs text-neutral-500 mb-1">Redes Sociales:</p>
            <div className="flex gap-2 sm:gap-3 flex-wrap">
              {user?.networks &&
              Object.values(user?.networks).every((value) => value === "") ? (
                <p>-</p>
              ) : (
                <>
                  {user?.networks?.instagram && (
                    <Link
                      to={`https://instagram.com/${user.networks.instagram}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram className="w-6 h-6 hover:scale-110" />
                    </Link>
                  )}
                  {user?.networks?.tiktok && (
                    <Link
                      to={`https://tiktok.com/@${user.networks.tiktok}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaTiktok className="w-6 h-6 hover:scale-110" />
                    </Link>
                  )}
                  {user?.networks?.facebook && (
                    <Link
                      to={`https://facebook.com/${user.networks.facebook}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IoLogoFacebook className="w-6 h-6 hover:scale-110" />
                    </Link>
                  )}
                  {user?.networks?.x && (
                    <Link
                      to={`https://x.com/${user.networks.x}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaSquareXTwitter className="w-6 h-6 hover:scale-110" />
                    </Link>
                  )}
                  {user?.networks?.youtube && (
                    <Link
                      to={`https://youtube.com/${user.networks.youtube}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaYoutube className="w-6 h-6 hover:scale-110" />
                    </Link>
                  )}
                  {user?.networks?.linkedin && (
                    <Link
                      to={`https://linkedin.com/${user.networks.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin className="w-6 h-6 hover:scale-110" />
                    </Link>
                  )}
                  {user?.networks?.spotify && (
                    <Link
                      to={`https://spotify.com/${user.networks.spotify}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <BsSpotify className="w-6 h-6 hover:scale-110" />
                    </Link>
                  )}
                  {user?.networks?.pinterest && (
                    <Link
                      to={`https://pinterest.com/${user.networks.pinterest}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaPinterest className="w-6 h-6 hover:scale-110" />
                    </Link>
                  )}
                  {user?.networks?.github && (
                    <Link
                      to={`https://github.com/${user.networks.github}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IoLogoGithub className="w-6 h-6 hover:scale-110" />
                    </Link>
                  )}
                </>
              )}
            </div>
          </div>
          <div>
            <p className="text-xs text-neutral-500">Plan:</p>
            <p>{user.plan}</p>
          </div>
          <div>
            <p className="text-xs text-neutral-500">Fecha de creación:</p>
            <p>{new Date(user.createdAt).toLocaleString()}</p>
          </div>
          <div>
            <p className="text-xs text-neutral-500">Rol:</p>
            <p>{user.role}</p>
          </div>
        </div>
      </div>
      <h2 className="text-sm uppercase font-bold my-6 text-neutral-400">
        Proyectos:
      </h2>
      {projects.map((project) => (
        <ProjectCard
          project={project}
          key={project._id}
          backgroundColor="#171717"
        />
      ))}
      <h2 className="text-sm uppercase font-bold my-6 text-neutral-400">
        Compras:
      </h2>
      <div className="flex flex-col gap-4">
        {sales.map((sale) => (
          <div className="bg-neutral-700 p-4 rounded-lg flex justify-between">
            <div className="flex flex-col gap-1">
              <p>Compra ID: </p>
              <span>{sale._id}</span>
            </div>
            <div className="flex flex-col gap-1">
              <p>Plan: </p>
              <span>{sale.title}</span>
            </div>
            <div className="flex flex-col gap-1">
              <p>Precio: $ </p>
              <span>{sale.price}</span>
            </div>
            <div className="flex flex-col gap-1">
              <p>Fecha: </p>
              <span>
                {new Date(sale.createdAt).toLocaleString("es-AR", {
                  dateStyle: "short",
                  timeStyle: "short",
                })}
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default AdminUserDetailPage;
