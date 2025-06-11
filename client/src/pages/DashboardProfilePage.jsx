import { React, useState, useEffect } from "react";
import { useUsers } from "../context/UserContext.jsx";
import ProfilePersonalData from "../components/ProfilePersonalData.jsx";
import ProfileAppearance from "../components/ProfileAppearance.jsx";
import ProfileData from "../components/ProfileData.jsx";
import Preview from "../components/Preview.jsx";
import PreviewModal from "../components/PreviewModal.jsx";
import Navbar from "../components/Navbar.jsx";
import { Toaster } from "react-hot-toast";

function DashboardProfilePage() {
  const { user, userLoading } = useUsers();
  const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false);
  const [view, setView] = useState({
    profileData: true,
    personalData: false,
    appearance: false,
  });

  function toggleView(selectedView) {
    setView({
      profileData: selectedView === "profileData",
      personalData: selectedView === "personalData",
      appearance: selectedView === "appearance",
    });
  }

  const openPreviewModal = () => {
    setIsPreviewModalOpen(true);
  };

  return (
    <>
      <Toaster />
      <Navbar background={"#18181b"} border={"1px solid #fff7ed"} />
      <div className="flex xs:p-4 md:p-8 lg:p-0">
        <div className="flex flex-col w-full min-h-screen px-1 py-4 lg:py-12 lg:px-10 lg:w-[59%] gap-4">
          {/* <ul className="text-sm xs:text-base flex gap-2 lg:gap-4">
            <li
              className={`rounded-lg w-20 lg:w-40 text-center lg:px-4 lg:py-2 cursor-pointer p-1 ${
                view.profileData
                  ? "bg-orange-50 text-black"
                  : "hover:bg-orange-50 hover:text-black"
              }`}
              onClick={() => toggleView("profileData")}
            >
              Datos del perfil
            </li>
            <li
              className={`rounded-lg text-center lg:px-4 lg:py-2 cursor-pointer p-1 ${
                view.personalData
                  ? "bg-orange-50 text-black"
                  : "hover:bg-orange-50 hover:text-black"
              }`}
              onClick={() => toggleView("personalData")}
            >
              Datos personales
            </li>
            <li
              className={`rounded-lg text-center lg:px-4 lg:py-2 cursor-pointer p-1 ${
                view.appearance
                  ? "bg-orange-50 text-black"
                  : "hover:bg-orange-50 hover:text-black"
              }`}
              onClick={() => toggleView("appearance")}
            >
              Apariencia
            </li>
          </ul> */}
          <ul className="flex justify-center gap-2 bg-zinc-900 p-2 rounded-lg shadow-inner text-sm">
            {[
              { label: "Perfil", key: "profileData" },
              { label: "Personales", key: "personalData" },
              { label: "Apariencia", key: "appearance" },
            ].map(({ label, key }) => (
              <li
                key={key}
                onClick={() => toggleView(key)}
                className={`px-3 py-1.5 rounded-md cursor-pointer transition-colors duration-150
        ${
          view[key]
            ? "bg-zinc-700 text-white"
            : "text-zinc-400 hover:bg-zinc-800 hover:text-white"
        }`}
              >
                {label}
              </li>
            ))}
          </ul>
          <h1 className="lg:text-lg">Administrar detalles del perfil.</h1>
          <div className="w-full flex justify-center">
            {view.profileData && (
              <ProfileData user={user} loading={userLoading} />
            )}
          </div>
          {view.personalData && (
            <ProfilePersonalData user={user} loading={userLoading} />
          )}
          <div className="p-2 md:p-0">
            {view.appearance && <ProfileAppearance />}
          </div>
          <button
            className="border border-orange-50 bg-neutral-900 text-orange-50  lg:hidden fixed bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 md:px-6 md:py-3 rounded-xl shadow-lg text-sm"
            onClick={() => {
              openPreviewModal();
            }}
          >
            Preview
          </button>
        </div>
      </div>
      <PreviewModal
        isOpen={isPreviewModalOpen}
        onClose={() => setIsPreviewModalOpen(false)}
      />
      <Preview />
    </>
  );
}

export default DashboardProfilePage;
