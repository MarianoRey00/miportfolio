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
      <div className="w-full bg-orange-500">
        {loading ? (
          <div className="flex justify-center">
            <PulseLoader color="#ffffff" size={10} />
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4">
              <p className="text-sm sm:text-base lg:text-lg font-medium">
                Email
              </p>
              <div className="flex justify-between">
                <p className="text-sm lg:text-base mt-2">{user.email}</p>
                <div
                  className="w-[14%] md:w-[10%] flex justify-center items-center py-3 bg-neutral-800 rounded-lg cursor-pointer relative group"
                  onClick={() => openModal("email", user.id)}
                >
                  <EditButton width={16} height={16} stroke={"#FFF7ED"} />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-sm sm:text-base lg:text-lg font-medium">
                Contraseña
              </p>
              <div className="flex justify-between">
                <p className="text-sm lg:text-base mt-2">******</p>
                <div
                  className="w-[14%] md:w-[10%] flex justify-center items-center py-3 bg-neutral-800 rounded-lg cursor-pointer relative group"
                  onClick={() => openModal("contraseña", user.id)}
                >
                  <EditButton width={16} height={16} stroke={"#FFF7ED"} />
                </div>
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

export default ProfilePersonalData;
