import React from "react";
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

function ProjectCardMobile({
  isExpanded,
  openModal,
  project,
  handleDeleteGalleryImage,
  handleDeleteProjectVideo,
  toggleExpand,
  projectSaveLoading,
  handleShowProject,
  handleHideProject,
  handleDelete,
  deleteGalleryImageId,
  handleDeleteProjectPdf,
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
      {!isExpanded && (
        <div className="flex gap-2 w-[85%] xs:hidden">
          <img
            className="w-16 h-16 rounded-lg object-cover"
            src={project.image?.url}
            alt=""
          />
          <div className="flex items-center w-[65%]">
            <p className="text-xs truncate">{project.title}</p>
          </div>
        </div>
      )}
      {isExpanded && (
        <div className="w-full flex flex-col gap-6 xs:hidden">
          <div className="flex justify-center items-center gap-2">
            <img
              className="w-16 h-16 rounded object-cover ml-4"
              src={project.image?.url}
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
          <div className="flex flex-col px-1 gap-6">
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <p className="text-sm font-normal break-all truncate mt-[6px]">
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
              <div className="flex gap-2 h-4">
                <div className="text-xs overflow-hidden">
                  <p className="break-all">{project.description}</p>
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
              <div className="flex gap-2">
                {project.link ? (
                  <p className="text-sm truncate mt-2">{project.link}</p>
                ) : (
                  <p className="text-sm mt-2">Sin link</p>
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
            <div className="">
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
              <div className="flex gap-2">
                <div className="overflow-auto scrollbar py-2">
                  {project.gallery.length > 0 ? (
                    <div className="flex gap-2">
                      <button
                        className="border flex justify-center items-center w-24 h-24 rounded flex-shrink-0"
                        onClick={() => openModal("galleryImage", project._id)}
                      >
                        <HiOutlinePlus className="w-5 h-5 sm:w-6 sm:h-6" />
                      </button>
                      <div className="flex gap-3">
                        {project.gallery.map((image) => (
                          <div
                            key={image._id}
                            className="relative w-24 h-24 flex-shrink-0"
                          >
                            <img
                              className="w-full h-full rounded object-cover"
                              src={image.url}
                              alt=""
                            />
                            <span
                              className="absolute top-1 right-1 bg-orange-50 text-neutral-900 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center cursor-pointer hover:bg-neutral-900 hover:text-orange-50"
                              onClick={() =>
                                handleDeleteGalleryImage(image._id)
                              }
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
                    </div>
                  ) : (
                    <button
                      className="border flex justify-center items-center w-20 h-20 rounded"
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

            {view.video && (
              <div className="flex items-center gap-2">
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
                  <p className="text-sm">Sin video</p>
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
            )}

            {view.pdf && (
              <div className="flex gap-2">
                {project.pdf ? (
                  <div className="flex gap-2 border rounded-xl py-2 sm:py-3 pl-4 pr-8 relative max-w-[90%]">
                    <BsFiletypePdf className=" w-8 h-8" />
                    <p className="text-sm break-all truncate mt-[6px]">
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
                  <p className="text-sm mt-1">Sin PDF</p>
                )}
                <div className="flex items-center justify-center">
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
            )}
          </div>
        </div>
      )}
      <div className="flex flex-col absolute right-0 mr-4 xs:hidden">
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

export default ProjectCardMobile;
