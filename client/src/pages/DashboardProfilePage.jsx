import { React, useState, useEffect } from "react";
import { useUsers } from "../context/UserContext.jsx";
import ProfilePersonalData from "../components/ProfilePersonalData.jsx";
import ProfileAppearance from "../components/ProfileAppearance.jsx";
import ProfileData from "../components/ProfileData.jsx";
import ProfilePurchases from "../components/ProfilePurchases.jsx";
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
    purchases: false,
  });

  function toggleView(selectedView) {
    setView({
      profileData: selectedView === "profileData",
      personalData: selectedView === "personalData",
      appearance: selectedView === "appearance",
      purchases: selectedView === "purchases",
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
        <div className="flex flex-col w-full min-h-screen px-1 py-4 lg:pb-12 lg:pt-8 lg:px-10 lg:w-[59%] gap-4 ">
          <ul className="hidden md:flex w-max text-sm xs:text-base gap-2 lg:gap-4 border border-white p-1 md:p-2 rounded-lg bg-red-600">
            <li
              className={`rounded text-center text-sm md:text-base cursor-pointer p-2 transition-colors duration-150 ${
                view.profileData
                  ? "bg-orange-50 text-black"
                  : "hover:bg-orange-50 hover:text-black"
              }`}
              onClick={() => toggleView("profileData")}
            >
              Datos del perfil
            </li>
            <li
              className={`rounded text-center text-sm md:text-base cursor-pointer p-2 transition-colors duration-150 ${
                view.personalData
                  ? "bg-orange-50 text-black"
                  : "hover:bg-orange-50 hover:text-black"
              }`}
              onClick={() => toggleView("personalData")}
            >
              Datos personales
            </li>
            <li
              className={`rounded text-center text-sm md:text-base cursor-pointer p-2 transition-colors duration-150 ${
                view.appearance
                  ? "bg-orange-50 text-black"
                  : "hover:bg-orange-50 hover:text-black"
              }`}
              onClick={() => toggleView("appearance")}
            >
              Apariencia
            </li>
            <li
              className={`rounded text-center text-sm md:text-base cursor-pointer p-2 transition-colors duration-150 ${
                view.purchases
                  ? "bg-orange-50 text-black"
                  : "hover:bg-orange-50 hover:text-black"
              }`}
              onClick={() => toggleView("purchases")}
            >
              Compras
            </li>
          </ul>

          <select
            id="opciones"
            name="opciones"
            className="flex md:hidden right-0 mt-2 w-48 text-orange-50 bg-neutral-800 rounded-md shadow-lg overflow-hidden transition-all duration-200 p-2 border border-orange-50"
            value={
              view.profileData
                ? "profileData"
                : view.personalData
                ? "personalData"
                : "appearance"
            }
            onChange={(e) => toggleView(e.target.value)}
          >
            <option value="profileData">Datos del perfil</option>
            <option value="personalData">Datos personales</option>
            <option value="appearance">Apariencia</option>
          </select>

          {/* <h1 className="lg:text-lg">Administrar detalles del perfil.</h1> */}
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
          <div className="">
            {view.purchases && <ProfilePurchases user={user} />}
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
