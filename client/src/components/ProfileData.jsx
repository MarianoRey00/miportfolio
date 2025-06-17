import { React, useState } from "react";
import EditProfileModal from "./EditProfileModal";
import EditButton from "./EditButton";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsSpotify } from "react-icons/bs";
import { FaPinterest } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";
import PulseLoader from "react-spinners/PulseLoader";

function ProfileData({ user, loading }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [id, setId] = useState(null);
  const [modalContent, setModalContent] = useState("");

  const openModal = (data, id) => {
    setModalContent(data);
    setId(id);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="w-full">
        {loading ? (
          <div className="flex justify-center">
            <PulseLoader color="#ffffff" size={10} />
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            <div className="rounded-xl border border-white p-4 shadow-md shadow-neutral-700">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {user.picture?.url ? (
                    <img
                      src={user.picture.url}
                      alt="Foto de perfil"
                      className="h-20 w-20 md:h-24 md:w-24 rounded-lg object-cover"
                    />
                  ) : (
                    <div className="h-20 w-20 rounded-full bg-neutral-800 flex items-center justify-center text-xl uppercase">
                      {user.username[0]}
                    </div>
                  )}
                  <div>
                    <p className="text-sm font-medium">Foto de perfil</p>
                  </div>
                </div>
                <button
                  onClick={() => openModal("foto de perfil", user.id)}
                  className="rounded-md border border-white p-2 hover:bg-neutral-700 transition"
                >
                  <EditButton width={16} height={16} stroke="#FFF7ED" />
                </button>
              </div>
            </div>

            <div className="rounded-xl border border-white p-4 shadow-md shadow-neutral-700">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Nombre de usuario</p>
                  <p>{user.username}</p>
                </div>
                <button
                  onClick={() => openModal("nombre de usuario", user.id)}
                  className="rounded-md border border-white p-2 hover:bg-neutral-700 transition"
                >
                  <EditButton width={16} height={16} stroke="#FFF7ED" />
                </button>
              </div>
            </div>

            <div className="rounded-xl border border-white p-4 shadow-md shadow-neutral-700">
              <div className="flex items-center justify-between">
                <div className="max-w-[85%]">
                  <p className="text-sm font-medium">Biografía</p>
                  <p className="break-words">
                    {user.biography || "Sin biografía"}
                  </p>
                </div>
                <button
                  onClick={() => openModal("biografia", user.id)}
                  className="rounded-md border border-white p-2 hover:bg-neutral-700 transition"
                >
                  <EditButton width={16} height={16} stroke="#FFF7ED" />
                </button>
              </div>
            </div>

            <div className="rounded-xl border border-white p-4 shadow-md shadow-neutral-700">
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-2">
                  <p className="text-sm font-medium">Redes sociales</p>
                  <div className="flex flex-wrap gap-2 mt-1 text-white">
                    {Object.values(user.networks).every((v) => v === "") ? (
                      <p className="text-sm">Sin redes sociales</p>
                    ) : (
                      <>
                        {user.networks?.instagram && (
                          <FaInstagram className="h-5 w-5" />
                        )}
                        {user.networks?.tiktok && (
                          <FaTiktok className="h-5 w-5" />
                        )}
                        {user.networks?.facebook && (
                          <IoLogoFacebook className="h-5 w-5" />
                        )}
                        {user.networks?.x && (
                          <FaSquareXTwitter className="h-5 w-5" />
                        )}
                        {user.networks?.youtube && (
                          <FaYoutube className="h-5 w-5" />
                        )}
                        {user.networks?.linkedin && (
                          <FaLinkedin className="h-5 w-5" />
                        )}
                        {user.networks?.spotify && (
                          <BsSpotify className="h-5 w-5" />
                        )}
                        {user.networks?.pinterest && (
                          <FaPinterest className="h-5 w-5" />
                        )}
                        {user.networks?.github && (
                          <IoLogoGithub className="h-5 w-5" />
                        )}
                      </>
                    )}
                  </div>
                </div>
                <button
                  onClick={() => openModal("redes sociales", user.id)}
                  className="rounded-md border border-white p-2 hover:bg-neutral-700 transition"
                >
                  <EditButton width={16} height={16} stroke="#FFF7ED" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <EditProfileModal
        user={user}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        data={modalContent}
        id={id}
      />
    </>
  );
}

export default ProfileData;
