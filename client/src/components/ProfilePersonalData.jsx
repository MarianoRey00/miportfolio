import { React, useState } from "react";
import EditProfileModal from "./EditProfileModal";
import EditButton from "./EditButton";
import PulseLoader from "react-spinners/PulseLoader";

function ProfilePersonalData({ user, loading }) {
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
      <div className="space-y-6">
        {loading ? (
          <div className="flex justify-center">
            <PulseLoader color="#ffffff" size={10} />
          </div>
        ) : (
          <>
            <div className="rounded-xl border border-white p-4 shadow-md shadow-neutral-700">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Email</p>
                  <p className="">{user.email}</p>
                </div>
                <button
                  onClick={() => openModal("email", user.id)}
                  className="rounded-md border border-white p-2 hover:bg-neutral-700 transition"
                >
                  <EditButton width={16} height={16} stroke={"#FFF7ED"} />
                </button>
              </div>
            </div>

            <div className="rounded-xl border border-white p-4 shadow-md shadow-neutral-700">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium">Contraseña</p>
                  <p className="">******</p>
                </div>
                <button
                  onClick={() => openModal("contraseña", user.id)}
                  className="rounded-md border border-white p-2 hover:bg-neutral-700 transition"
                >
                  <EditButton width={16} height={16} stroke={"#FFF7ED"} />
                </button>
              </div>
            </div>

            <div className="rounded-xl border border-white p-4 shadow-md shadow-neutral-700">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium">Plan</p>
                  <p className="">{user.plan}</p>
                </div>
                <button
                  onClick={() => openModal("contraseña", user.id)}
                  className="rounded-md border border-white p-2 hover:bg-neutral-700 transition"
                >
                  <EditButton width={16} height={16} stroke={"#FFF7ED"} />
                </button>
              </div>
            </div>
          </>
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

export default ProfilePersonalData;
