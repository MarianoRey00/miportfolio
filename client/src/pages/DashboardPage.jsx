import { useState, useEffect } from "react";
import { useProjects } from "../context/ProjectContext.jsx";
import { Link } from "react-router-dom";
import { ProjectCard } from "../components/ProjectCard.jsx";
import { Preview } from "../components/Preview.jsx";
import PreviewModal from "../components/PreviewModal.jsx";
import { HiOutlinePlus } from "react-icons/hi";
import { useUsers } from "../context/UserContext.jsx";
import CreateProjectModal from "../components/CreateProjectModal.jsx";
import Navbar from "../components/Navbar.jsx";
import PulseLoader from "react-spinners/PulseLoader";
import { Toaster } from "react-hot-toast";

function DashboardPage() {
  const { getProjects, projects, projectLoading } = useProjects();
  const { user, userLoading } = useUsers();
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false);

  useEffect(() => {
    getProjects();
  }, []);

  const openCreateModal = () => {
    setIsCreateModalOpen(true);
  };

  const openPreviewModal = () => {
    setIsPreviewModalOpen(true);
  };

  return (
    <div className="">
      <Toaster
        toastOptions={{
          style: {
            background: "#FFF7ED",
          },
        }}
      />
      <Navbar background={"#18181b"} border={"1px solid #fff7ed"} />
      {projectLoading || userLoading ? (
        <div className="absolute inset-0 flex justify-center items-center bg-neutral-900">
          <PulseLoader color="#ffffff" size={12} />
        </div>
      ) : (
        <>
          <div className="w-full lg:w-[59%] min-h-screen pb-16 flex justify-center">
            <div className="w-full lg:max-w-[90%] flex flex-col items-center">
              <button
                className="bg-neutral-900 hover:bg-neutral-800 border-white border p-2 rounded-xl mt-3 mb-6 flex justify-center items-center gap-2 h-14 text-base w-[90%] md:w-[80%] lg:w-[100%]"
                onClick={() => openCreateModal()}
              >
                <HiOutlinePlus className="w-5 h-5 sm:w-6 sm:h-6" />
                Crear nuevo proyecto
              </button>
              <Link
                to={`/${user.username}`}
                target="_blank"
                className="bg-neutral-900 hover:bg-neutral-800 border-white border p-2 rounded-xl mt-3 mb-6 flex justify-center items-center gap-2 h-14 text-base w-[90%] md:w-[80%] lg:w-[100%]"
              >
                <button>Ver portfolio</button>
              </Link>

              {projects.map((project) => (
                <ProjectCard project={project} key={project._id} />
              ))}
            </div>
          </div>
          <button
            className="border border-orange-50 bg-neutral-900 text-orange-50  lg:hidden fixed bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 md:px-6 md:py-3 rounded-xl shadow-lg text-sm"
            onClick={() => {
              openPreviewModal();
            }}
          >
            Preview
          </button>
          <PreviewModal
            isOpen={isPreviewModalOpen}
            onClose={() => setIsPreviewModalOpen(false)}
          />
          <Preview />
          <CreateProjectModal
            isOpen={isCreateModalOpen}
            onClose={() => setIsCreateModalOpen(false)}
          />
        </>
      )}
    </div>
  );
}

export default DashboardPage;
