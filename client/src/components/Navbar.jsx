import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Logo from "../components/Logo.jsx";
import HomeMenu from "./HomeMenu.jsx";
import DropdownMenu from "../components/DropdownMenu.jsx";

function Navbar({ background, border }) {
  const { isAuthenticated, logout, isAdmin, authUser } = useAuth();
  const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDropdownMenu = () => {
    setIsDropdownMenuOpen(!isDropdownMenuOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  console.log("Navbar: ", authUser);
  return (
    <>
      <header className="sticky top-0 z-10">
        <nav
          className={`flex justify-between items-center ${
            background === "#18181b" ? "text-orange-50" : "text-neutral-900"
          } py-6 px-4 md:px-10 h-20 text-lg font-normal`}
          style={{
            background: background,
            borderBottom: border,
          }}
        >
          <div className="mt-1 md:mt-0">
            <Link to={isAuthenticated ? "/panel" : "/"}>
              <Logo
                logoColor={background === "#18181b" ? "#fff7ed" : "#18181b"}
                textColor={background === "#18181b" ? "#fff7ed" : "#18181b"}
                className={"w-36 h-10 md:w-56 md:h-12"}
              />
            </Link>
          </div>

          <div className="flex items-center gap-4 xs:gap-6 md:gap-10">
            {isAuthenticated ? (
              <>
                <DropdownMenu
                  toggleDropdownMenu={toggleDropdownMenu}
                  isDropdownMenuOpen={isDropdownMenuOpen}
                  logout={logout}
                  isAdmin={isAdmin}
                  authUser={authUser}
                />
              </>
            ) : (
              <>
                <HomeMenu toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
              </>
            )}
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
