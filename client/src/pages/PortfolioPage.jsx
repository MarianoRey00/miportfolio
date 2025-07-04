import { useState, useEffect } from "react";
import { useProjects } from "../context/ProjectContext";
import { useNavigate, Link } from "react-router-dom";
import { useUsers } from "../context/UserContext";
import { useAppearance } from "../context/AppearanceContext";
import { useParams } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsSpotify } from "react-icons/bs";
import { FaPinterest } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";
import PulseLoader from "react-spinners/PulseLoader";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import { FaRegCopy } from "react-icons/fa6";

function PortfolioPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { getPublicUser } = useUsers();
  const { username } = useParams();
  const { getPublicProjects } = useProjects();
  const { getPublicAppearance } = useAppearance();
  const [publicProjects, setPublicProjects] = useState([]);
  const [publicAppearance, setPublicAppearance] = useState({
    pictureShape: "",
    backgroundColor: "",
    textColor: "",
    projectBackgroundColor: "",
    projectShape: "",
    projectPictureShape: "",
  });
  const [publicUser, setPublicUser] = useState({
    id: "",
    username: "",
    picture: {},
    biography: "",
    networks: {
      instagram: "",
      tiktok: "",
      facebook: "",
      x: "",
      youtube: "",
      linkedin: "",
      spotify: "",
      pinterest: "",
      github: "",
    },
    plan: "",
  });

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const publicUser = await getPublicUser(username);
        setPublicUser(publicUser);
        if (!publicUser) {
          navigate("/error-404", {
            state: { message: "Usuario no encontrado" },
          });
        }
        const projects = await getPublicProjects(publicUser._id);
        setPublicProjects(projects);

        const appearance = await getPublicAppearance(publicUser._id);
        setPublicAppearance(appearance);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      toast.success("¡Enlace copiado al portapapeles!");
    } catch (error) {
      toast.error("Error al copiar el enlace.");
    }
  };

  return (
    <>
      <Toaster />
      {loading ? (
        <div className="absolute inset-0 flex justify-center items-center bg-neutral-900">
          <PulseLoader color="#ffffff" size={12} />
        </div>
      ) : (
        <section
          className="pb-10"
          style={{ backgroundColor: publicAppearance.backgroundColor }}
        >
          <div
            className="min-h-screen py-10 flex justify-center"
            style={{ backgroundColor: publicAppearance.backgroundColor }}
          >
            <div className="flex flex-col items-center gap-6 w-[90%] lg:w-[75%] ">
              <div className="flex justify-center ml-12 gap-4">
                {publicUser?.picture.url ? (
                  <img
                    src={publicUser?.picture.url}
                    className="w-20 h-20 xs:w-24 xs:h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 object-cover"
                    style={{ borderRadius: publicAppearance.pictureShape }}
                  />
                ) : (
                  <div
                    className="w-20 h-20 xs:w-24 xs:h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 bg-neutral-800 flex items-center justify-center"
                    style={{ borderRadius: publicAppearance.pictureShape }}
                  >
                    <p className="p-6  text-2xl uppercase">
                      {publicUser?.username[0]}
                    </p>
                  </div>
                )}
                <div className="flex items-center">
                  <FaRegCopy
                    style={{ color: publicAppearance.textColor }}
                    className="w-7 h-7 cursor-pointer hover:scale-110"
                    onClick={handleCopy}
                  />
                </div>
              </div>
              <div
                className="flex flex-col gap-3 items-center text-center w-[80%] sm:w-[70%] md:w-[50%]"
                style={{ color: publicAppearance.textColor }}
              >
                <h1 className="text-xl md:text-2xl break-all">
                  {publicUser?.username}
                </h1>
                <p className="text-sm md:text-lg break-all">
                  {publicUser?.biography}
                </p>
                <div className="flex gap-2 sm:gap-3 flex-wrap justify-center">
                  {publicUser?.networks?.instagram && (
                    <Link
                      to={`https://instagram.com/${publicUser.networks.instagram}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram className="w-6 h-6 sm:w-7 sm:h-7 hover:scale-110" />
                    </Link>
                  )}
                  {publicUser?.networks?.tiktok && (
                    <Link
                      to={`https://tiktok.com/@${publicUser.networks.tiktok}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaTiktok className="w-6 h-6 sm:w-7 sm:h-7 hover:scale-110" />
                    </Link>
                  )}
                  {publicUser?.networks?.facebook && (
                    <Link
                      to={`https://facebook.com/${publicUser.networks.facebook}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IoLogoFacebook className="w-6 h-6 sm:w-7 sm:h-7 hover:scale-110" />
                    </Link>
                  )}
                  {publicUser?.networks?.x && (
                    <Link
                      to={`https://x.com/${publicUser.networks.x}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaSquareXTwitter className="w-6 h-6 sm:w-7 sm:h-7 hover:scale-110" />
                    </Link>
                  )}
                  {publicUser?.networks?.youtube && (
                    <Link
                      to={`https://youtube.com/${publicUser.networks.youtube}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaYoutube className="w-6 h-6 sm:w-7 sm:h-7 hover:scale-110" />
                    </Link>
                  )}
                  {publicUser?.networks?.linkedin && (
                    <Link
                      to={`https://linkedin.com/${publicUser.networks.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin className="w-6 h-6 sm:w-7 sm:h-7 hover:scale-110" />
                    </Link>
                  )}
                  {publicUser?.networks?.spotify && (
                    <Link
                      to={`https://spotify.com/${publicUser.networks.spotify}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <BsSpotify className="w-6 h-6 sm:w-7 sm:h-7 hover:scale-110" />
                    </Link>
                  )}
                  {publicUser?.networks?.pinterest && (
                    <Link
                      to={`https://pinterest.com/${publicUser.networks.pinterest}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaPinterest className="w-6 h-6 sm:w-7 sm:h-7 hover:scale-110" />
                    </Link>
                  )}
                  {publicUser?.networks?.github && (
                    <Link
                      to={`https://github.com/${publicUser.networks.github}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IoLogoGithub className="w-6 h-6 sm:w-7 sm:h-7 hover:scale-110" />
                    </Link>
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-6 w-full sm:w-[90%] md:w-[80%]">
                {publicProjects?.map((project) => (
                  <Link to={project._id}>
                    <div key={project._id}>
                      <div
                        className="flex p-4 xs:p-5 sm:p-6 md:p-7 overflow-hidden w-full hover:scale-105"
                        style={{
                          backgroundColor:
                            publicAppearance.projectBackgroundColor,
                          borderRadius: publicAppearance.projectShape,
                          border: publicAppearance.projectBorder,
                          borderColor: publicAppearance.projectBorderColor,
                        }}
                      >
                        <div className="w-[28%] xxs:w-[20%] xs:w-20 sm:w-24 md:w-28 lg:w-32">
                          <img
                            className="w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 object-cover"
                            style={{
                              borderRadius:
                                publicAppearance.projectPictureShape,
                            }}
                            src={project.image.url}
                            alt=""
                          />
                        </div>
                        <div
                          className="ml-2 xs:ml-4 lg:ml-10 flex items-center w-[73%] xxs:w[80%]"
                          style={{ color: publicAppearance.projectTextColor }}
                        >
                          <h2 className="text-sm xs:text-base md:text-lg break-words line-clamp-3">
                            {project.title}
                          </h2>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {publicUser.plan === "Gratuito" && (
            <div className="flex justify-center items-center ">
              <Link
                to="/"
                target="_blank"
                className="px-6 py-4 bg-orange-50 text-neutral-900 border border-neutral-900 rounded-xl text-sm md:text-base hover:bg-neutral-900 hover:text-orange-50 hover:border-orange-50"
              >
                ¡Sumate a {publicUser.username} y usa miportfolio!
              </Link>
            </div>
          )}
        </section>
      )}
    </>
  );
}

export default PortfolioPage;
