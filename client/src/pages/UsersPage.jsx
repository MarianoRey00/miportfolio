import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useUsers } from "../context/UserContext.jsx";

const usersPerPage = 9;

function UsersPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const { getUsers, users } = useUsers();
  const startIndex = (currentPage - 1) * usersPerPage;
  const endIndex = startIndex + usersPerPage;
  const totalPages = Math.ceil(users.length / usersPerPage);
  const currentData = users.slice(startIndex, endIndex);

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <h1 className="text-sm uppercase font-semibold mb-6 text-orange-50">
        Lista de usuarios
      </h1>
      {currentData.map((user, id) => (
        <Link to={`/admin/${user.username}`}>
          <div
            className=" flex justify-between bg-zinc-900 text-zinc-400 mt-4 p-4 rounded-2xl text-sm hover:bg-zinc-700 cursor-pointer"
            key={id}
          >
            {user.picture.url ? (
              <img
                src={user.picture?.url}
                alt=""
                className="w-16 h-16 border-2 rounded-xl object-cover"
              />
            ) : (
              <div className="w-16 h-16 bg-neutral-800 flex items-center justify-center rounded-xl border-2">
                <p className="p-6 text-lg uppercase">{user?.username[0]}</p>
              </div>
            )}
            <div className="flex flex-col justify-center">
              <p className="border-b border-zinc-600">
                Usuario:{" "}
                <span className="font-sans font-semibold text-white">
                  {user.username}
                </span>
              </p>
              <p>
                Plan:{" "}
                <span className="font-sans font-semibold text-white">
                  {user.plan}
                </span>
              </p>
            </div>
            <div className="flex flex-col justify-center">
              <p className="border-b border-zinc-600">
                Email:{" "}
                <span className="font-sans font-semibold text-white">
                  {user.email}
                </span>
              </p>
              <p>
                Fecha de creación:{" "}
                <span className="font-sans font-semibold text-white">
                  {user.createdAt}
                </span>
              </p>
            </div>
            <div className="flex flex-col justify-center">
              <p className="border-b border-zinc-600">
                Redes sociales:{" "}
                <span className="font-sans font-semibold text-white">
                  {
                    Object.values(user.networks).filter(
                      (network) => network.trim() !== ""
                    ).length
                  }
                </span>
              </p>
              <p>
                Rol:{" "}
                <span className="font-sans font-semibold text-white">
                  {user.role}
                </span>
              </p>
            </div>
            <div className="flex flex-col justify-center">
              <Link
                to={`/admin/${user.username}`}
                className="text-2xl mr-10 text-white  hover:text-gray-300"
              >
                ▶
              </Link>
            </div>
          </div>
        </Link>
      ))}
      <div className="flex justify-center items-center mt-4 space-x-2">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-3 py-2 bg-neutral-600 hover:bg-neutral-500 disabled:opacity-50 rounded"
        >
          ◀
        </button>

        <span className="text-neutral-400 text-sm uppercase font-bold">
          Página {currentPage} de {totalPages}
        </span>

        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="px-3 py-2 bg-neutral-600 hover:bg-neutral-500 disabled:opacity-50 rounded"
        >
          ▶
        </button>
      </div>
    </>
  );
}

export default UsersPage;
