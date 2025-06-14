import { useState } from "react";
import { ProjectList } from "./ProjectsList";
import { useUsers } from "../context/UserContext";
import { useAppearance } from "../context/AppearanceContext";
import { useProjects } from "../context/ProjectContext.jsx";
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

export function Preview() {
  const { user } = useUsers();
  const { appearance, appearanceLoading } = useAppearance();
  const { projects } = useProjects();
  const modifiedPictureShape =
    appearance.pictureShape === "18px" ? "12px" : appearance.pictureShape;

  return (
    <>
      <div className="hidden lg:w-[41%] lg:flex lg:justify-center lg:h-screen lg:fixed lg:top-0 lg:py-4 lg:right-0">
        <p className="text-sm text-orange-50 mt-20">
          Vista previa del portfolio
        </p>
        <div className="hidden lg:w-[41%] lg:flex lg:justify-center lg:h-screen lg:fixed lg:top-0 lg:py-4 lg:border-l lg:border-zinc-800 lg:right-0 ">
          <div className="border border-orange-50 h-[454px] rounded-3xl mt-[110px]">
            {appearanceLoading ? (
              <div className="w-60 h-[450px] border-[10px] border-neutral-900 rounded-3xl">
                <div className="flex justify-center mt-40">
                  <PulseLoader color="#ffffff" size={12} />
                </div>
              </div>
            ) : (
              <>
                <div
                  className="w-64 h-[450px] border-[10px] border-neutral-900 rounded-3xl overflow-auto"
                  style={{ backgroundColor: appearance.backgroundColor }}
                >
                  <div className="relative h-full">
                    <div className="absolute inset-0 overflow-auto scrollbar p-4">
                      <div className="flex flex-col justify-center mb-4 items-center gap-1">
                        {user.picture?.url ? (
                          <div>
                            <img
                              src={user.picture?.url}
                              className="w-16 h-16 object-cover"
                              style={{ borderRadius: modifiedPictureShape }}
                            />
                          </div>
                        ) : (
                          <div
                            className="w-16 h-16 bg-neutral-800 flex items-center justify-center"
                            style={{ borderRadius: modifiedPictureShape }}
                          >
                            <p className="uppercase">{user?.username[0]}</p>
                          </div>
                        )}
                        <div
                          className="flex flex-col gap-1 items-center text-center"
                          style={{ color: appearance.textColor }}
                        >
                          <h1 className="text-sm break-all">{user.username}</h1>
                          <p className="text-[10px] text-center break-all block w-44">
                            {user.biography}
                          </p>
                          <div className="flex gap-1 flex-wrap justify-center ">
                            {user.networks?.instagram && (
                              <FaInstagram className="w-5 h-5" />
                            )}
                            {user.networks?.tiktok && (
                              <FaTiktok className="w-5 h-5" />
                            )}
                            {user.networks?.facebook && (
                              <IoLogoFacebook className="w-5 h-5" />
                            )}
                            {user.networks?.x && (
                              <FaSquareXTwitter className="w-5 h-5" />
                            )}
                            {user.networks?.youtube && (
                              <FaYoutube className="w-5 h-5" />
                            )}
                            {user.networks?.linkedin && (
                              <FaLinkedin className="w-5 h-5" />
                            )}
                            {user.networks?.spotify && (
                              <BsSpotify className="w-5 h-5" />
                            )}
                            {user.networks?.pinterest && (
                              <FaPinterest className="w-5 h-5" />
                            )}
                            {user.networks?.github && (
                              <IoLogoGithub className="w-5 h-5" />
                            )}
                          </div>
                        </div>
                      </div>
                      <ProjectList
                        appearance={appearance}
                        projects={projects}
                      />
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Preview;
