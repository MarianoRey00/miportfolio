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
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

function DashboardProfilePage() {
  const { user, userLoading } = useUsers();
  const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false);
  const [view, setView] = useState({
    profileData: true,
    personalData: false,
    appearance: false,
    purchases: false,
  });
  const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false);

  const toggleDropdownMenu = () => {
    setIsDropdownMenuOpen(!isDropdownMenuOpen);
  };

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
          <ul className="hidden md:flex w-max text-sm xs:text-base gap-2 lg:gap-4 border border-white p-1 md:p-2 rounded-lg shadow-md shadow-neutral-700">
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

          <div className="md:hidden relative cursor-pointer">
            <div
              onClick={() => toggleDropdownMenu()}
              className="flex justify-between items-center border border-white shadow-md shadow-neutral-700 w-full rounded-lg p-2"
            >
              {view.profileData && <p>Datos del perfil</p>}
              {view.personalData && <p>Datos personales</p>}
              {view.appearance && <p>Apariencia</p>}
              {view.purchases && <p>Compras</p>}
              {!isDropdownMenuOpen && <IoIosArrowDown className="w-5 h-5" />}
              {isDropdownMenuOpen && <IoIosArrowUp className="w-5 h-5" />}
            </div>

            <div
              className={`absolute left-0 mt-2 w-full bg-neutral-900 border border-white text-orange-50 rounded-md shadow-lg overflow-hidden transition-all duration-200 ${
                isDropdownMenuOpen
                  ? "opacity-100 visible"
                  : "opacity-0 invisible"
              }`}
            >
              <div
                to="/panel/perfil"
                className="block px-4 py-2 text-sm hover:bg-neutral-700 transition"
                onClick={() => {
                  toggleView("profileData"), toggleDropdownMenu();
                }}
              >
                Datos del perfil
              </div>
              <div
                to="/panel/perfil"
                className="block px-4 py-2 text-sm hover:bg-neutral-700 transition"
                onClick={() => {
                  toggleView("personalData"), toggleDropdownMenu();
                }}
              >
                Datos personales
              </div>
              <div
                to="/panel/perfil"
                className="block px-4 py-2 text-sm hover:bg-neutral-700 transition"
                onClick={() => {
                  toggleView("appearance"), toggleDropdownMenu();
                }}
              >
                Apariencia
              </div>
              <div
                to="/panel/perfil"
                className="block px-4 py-2 text-sm hover:bg-neutral-700 transition"
                onClick={() => {
                  toggleView("purchases"), toggleDropdownMenu();
                }}
              >
                Compras
              </div>
            </div>
          </div>

          {view.profileData && (
            <ProfileData user={user} loading={userLoading} />
          )}
          {view.personalData && (
            <ProfilePersonalData user={user} loading={userLoading} />
          )}
          {view.appearance && <ProfileAppearance />}
          {view.purchases && <ProfilePurchases user={user} />}
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
