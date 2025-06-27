import PulseLoader from "react-spinners/PulseLoader";
import EditButton from "./EditButton";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { AiOutlineDelete } from "react-icons/ai";
import { CiLock } from "react-icons/ci";
import { CiUnlock } from "react-icons/ci";
import { HiOutlinePlus } from "react-icons/hi";
import { BsFiletypePdf } from "react-icons/bs";
import { useState } from "react";
import { Link } from "react-router-dom";

function ProjectCardDesktop({
  isExpanded,
  openModal,
  project,
  handleDeleteGalleryImage,
  handleDeleteProjectVideo,
  handleDeleteProjectPdf,
  toggleExpand,
  projectSaveLoading,
  handleShowProject,
  handleHideProject,
  handleDelete,
  deleteGalleryImageId,
  authUser,
}) {
  const [view, setView] = useState({
    gallery: true,
    video: false,
    pdf: false,
  });

  function toggleView(selectedView) {
    setView({
      gallery: selectedView === "gallery",
      video: selectedView === "video",
      pdf: selectedView === "pdf",
    });
  }

  return (
    <>
      <div className="hidden xs:flex xs:flex-col items-center gap-2">
        <img
          className="xs:w-24 xs:h-24 md:w-[125px] md:h-[125px] rounded-lg object-cover"
          src={project?.image?.url}
          alt=""
        />
        <button
          onClick={() => openModal("portada", project._id)}
          className={`${
            isExpanded ? "block" : "hidden"
          } relative group p-2 hover:bg-neutral-700 rounded`}
        >
          <EditButton width={14} height={14} stroke={"#FFF7ED"} />
        </button>
      </div>
      <div className="hidden xs:block w-[65%]">
        <div className="px-2 flex flex-col gap-4 ">
          <div className="flex flex-col gap-4">
            <div className="flex gap-2 lg:h-8 ">
              <p className="xs:text-sm md:text-lg lg:text-xl font-medium break-all truncate">
                {project.title}
              </p>
              <button
                onClick={() => openModal("titulo", project._id)}
                className={`${
                  isExpanded ? "block" : "hidden"
                } relative group p-2 hover:bg-neutral-700 rounded`}
              >
                <EditButton width={14} height={14} stroke={"#FFF7ED"} />
              </button>
            </div>
            <div className="flex gap-2 h-6 lg:h-8 ">
              <div className="text-sm h-6 lg:h-10 overflow-hidden ">
                <p className="truncate">{project.description}</p>
              </div>
              <div className="flex items-center">
                <button
                  onClick={() => openModal("descripción", project._id)}
                  className={`${
                    isExpanded ? "block" : "hidden"
                  } relative group p-2 hover:bg-neutral-700 rounded `}
                >
                  <EditButton width={14} height={14} stroke={"#FFF7ED"} />
                </button>
              </div>
            </div>
            <div className="flex gap-2 lg:h-8">
              {project.link ? (
                <p className="xs:text-sm md:text-base truncate">
                  {project.link}
                </p>
              ) : (
                <p className="xs:text-sm">Sin link</p>
              )}
              <button
                onClick={() => openModal("link", project._id)}
                className={`${
                  isExpanded ? "block" : "hidden"
                } relative group p-2 hover:bg-neutral-700 rounded`}
              >
                <EditButton width={14} height={14} stroke={"#FFF7ED"} />
              </button>
            </div>
          </div>
          <div className="mt-6">
            <ul className="flex justify-between gap-3">
              <li
                onClick={() => toggleView("gallery")}
                className={`cursor-pointer w-[30%] py-1.5 rounded-lg text-center text-sm
                ${
                  view.gallery
                    ? "bg-orange-50 text-neutral-800 shadow-lg"
                    : "bg-neutral-700 text-orange-50 hover:bg-neutral-600"
                }`}
              >
                Galería
              </li>
              <li
                onClick={() => toggleView("video")}
                className={`cursor-pointer w-[30%] py-1.5 rounded-lg text-center text-sm
                ${
                  view.video
                    ? "bg-orange-50 text-neutral-800 shadow-lg"
                    : "bg-neutral-700 text-orange-50 hover:bg-neutral-600"
                }`}
              >
                Video
              </li>
              <li
                onClick={() => toggleView("pdf")}
                className={`cursor-pointer w-[30%] py-1.5 rounded-lg text-center text-sm
                ${
                  view.pdf
                    ? "bg-orange-50 text-neutral-800 shadow-lg"
                    : "bg-neutral-700 text-orange-50 hover:bg-neutral-600"
                }`}
              >
                PDF
              </li>
            </ul>
          </div>
          {view.gallery && (
            <div className="flex  gap-2 ">
              <div className="overflow-auto scrollbar py-2">
                {project.gallery.length > 0 ? (
                  <div className="flex gap-3">
                    <button
                      className="border flex justify-center items-center xs:w-20 xs:h-20 md:w-24 md:h-24 lg:w-24 lg:h-24 rounded flex-shrink-0"
                      onClick={() => openModal("galleryImage", project._id)}
                    >
                      <HiOutlinePlus className="w-5 h-5 sm:w-6 sm:h-6" />
                    </button>
                    {project.gallery.map((image) => (
                      <div
                        key={image._id}
                        className="relative xs:w-20 xs:h-20 md:w-24 md:h-24 lg:w-24 lg:h-24 flex-shrink-0"
                      >
                        <img
                          className="w-full h-full rounded object-cover"
                          src={image.url}
                          alt=""
                        />
                        <span
                          className="absolute top-1 right-1 bg-orange-50 text-neutral-900 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center cursor-pointer hover:bg-neutral-900 hover:text-orange-50"
                          onClick={() => handleDeleteGalleryImage(image._id)}
                        >
                          {image._id === deleteGalleryImageId &&
                          projectSaveLoading ? (
                            <PulseLoader color="#000000" size={2} />
                          ) : (
                            "✕"
                          )}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <button
                    className="border flex justify-center items-center xs:w-20 xs:h-20 md:w-24 md:h-24 lg:w-24 lg:h-24 rounded"
                    onClick={() => openModal("galleryImage", project._id)}
                  >
                    <HiOutlinePlus className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                )}
              </div>
              <div className="flex items-center">
                <button
                  onClick={() => openModal("galeria", project._id)}
                  className={`${
                    isExpanded ? "block" : "hidden"
                  } relative group p-2 hover:bg-neutral-700 rounded`}
                >
                  <EditButton width={14} height={14} stroke={"#FFF7ED"} />
                </button>
              </div>
            </div>
          )}

          {view.video &&
            (authUser.plan !== "Gratuito" ? (
              <div className="flex items-center gap-2 mt-4">
                {project.video ? (
                  <div className="relative">
                    <video
                      className="w-56 max-w-80 max-h-32 rounded object-cover"
                      controls
                      src={project.video?.url}
                      alt=""
                    />
                    <span
                      className="absolute top-1 right-1 bg-orange-50 text-neutral-900 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center cursor-pointer hover:bg-neutral-900 hover:text-orange-50"
                      onClick={() => handleDeleteProjectVideo(project._id)}
                    >
                      {projectSaveLoading ? (
                        <PulseLoader color="#000000" size={2} />
                      ) : (
                        "✕"
                      )}
                    </span>
                  </div>
                ) : (
                  <p>Sin video</p>
                )}
                <button
                  onClick={() => openModal("video", project._id)}
                  className={`${
                    isExpanded ? "block" : "hidden"
                  } relative group p-2 hover:bg-neutral-700 rounded`}
                >
                  <EditButton width={14} height={14} stroke={"#FFF7ED"} />
                </button>
              </div>
            ) : (
              <div className="xs:h-[100px] sm:h-[136px] border border-white rounded-xl flex items-center justify-center">
                <p className="text-orange-50 font-medium text-center">
                  Para usar esta funcionalidad{" "}
                  <Link to="/panel/planes" className="underline">
                    cambiá de plan
                  </Link>
                </p>
              </div>
            ))}

          {view.pdf &&
            (authUser.plan !== "Gratuito" ? (
              <div className="flex gap-2 mt-4">
                {project.pdf ? (
                  <div className="flex gap-2 border rounded-xl py-3 pl-4 pr-8 relative w-60">
                    <BsFiletypePdf className="text-3xl" />
                    <p className="xs:text-sm font-normal break-all truncate mt-[6px]">
                      {project.pdf?.name}
                    </p>
                    <span
                      className="absolute top-[-5px] right-[-5px] bg-orange-50 text-neutral-900 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center cursor-pointer hover:bg-neutral-900 hover:text-orange-50 hover:border"
                      onClick={() => handleDeleteProjectPdf(project._id)}
                    >
                      {projectSaveLoading ? (
                        <PulseLoader color="#000000" size={2} />
                      ) : (
                        "✕"
                      )}
                    </span>
                  </div>
                ) : (
                  <p>Sin pdf</p>
                )}

                <div className="flex justify-center items-center">
                  <button
                    onClick={() => openModal("PDF", project._id)}
                    className={`${
                      isExpanded ? "block" : "hidden"
                    } relative group p-2 hover:bg-neutral-700 rounded`}
                  >
                    <EditButton width={14} height={14} stroke={"#FFF7ED"} />
                  </button>
                </div>
              </div>
            ) : (
              <div className="xs:h-[100px] sm:h-[136px] border border-white rounded-xl flex items-center justify-center">
                <p className="text-orange-50 font-medium text-center">
                  Para usar esta funcionalidad{" "}
                  <Link to="/panel/planes" className="underline">
                    cambiá de plan
                  </Link>
                </p>
              </div>
            ))}
        </div>
      </div>
      <div className="hidden xs:flex xs:flex-col">
        <button
          onClick={toggleExpand}
          className="hover:bg-neutral-700 p-1 rounded"
        >
          {isExpanded ? (
            <IoIosArrowUp className="w-5 h-5" />
          ) : (
            <IoIosArrowDown className="w-5 h-5" />
          )}
        </button>
        <button
          onClick={() => {
            handleDelete(project._id, project.title);
          }}
          className={`hover:bg-neutral-700 p-1 rounded ${
            isExpanded === false && "hidden"
          }`}
        >
          <AiOutlineDelete className="w-5 h-5" />
        </button>
        {project.public === false && (
          <button
            onClick={() => {
              handleShowProject(project._id);
            }}
            className={`hover:bg-neutral-700 p-1 rounded ${
              isExpanded === false && "hidden"
            }`}
          >
            <CiUnlock className="w-5 h-5" />
          </button>
        )}
        {project.public === true && (
          <button
            onClick={() => {
              handleHideProject(project._id);
            }}
            className={`hover:bg-neutral-700 p-1 rounded ${
              isExpanded === false && "hidden"
            }`}
          >
            <CiLock className="w-5 h-5" />
          </button>
        )}
      </div>
    </>
  );
}

export default ProjectCardDesktop;
