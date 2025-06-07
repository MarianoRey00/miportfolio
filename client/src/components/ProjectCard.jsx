import toast from "react-hot-toast";
import { useProjects } from "../context/ProjectContext";
import { useState } from "react";
import EditProjectModal from "./EditProjectModal.jsx";
import PulseLoader from "react-spinners/PulseLoader";
import ProjectCardMobile from "../components/ProjectCardMobile";
import ProjectCardDesktop from "../components/ProjectCardDesktop";

export function ProjectCard({ project, backgroundColor }) {
	const {
		deleteProject,
		showProject,
		hideProject,
		deleteGalleryImage,
		deleteProjectVideo,
		deleteProjectPdf,
		projectSaveLoading,
	} = useProjects();
	const [isExpanded, setIsExpanded] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [id, setId] = useState(null);
	const [modalContent, setModalContent] = useState("");
	const [deleteGalleryImageId, setDeleteGalleryImageId] = useState(null);

	const toggleExpand = () => {
		setIsExpanded(!isExpanded);
	};

	const openModal = (data, id) => {
		setModalContent(data);
		setId(id);
		setIsModalOpen(true);
	};

	const handleDeleteGalleryImage = async (imageId) => {
		toast((t) => (
			<div className="flex flex-col gap-4">
				<p className="break-words text-center">
					¿Desea eliminar la imagen de la galeria?
				</p>
				<div className="flex justify-end gap-2">
					<button
						className="bg-customColor-blue hover:bg-slate-800 px-3 py-2 text-white text-sm rounded-lg"
						onClick={() => toast.dismiss(t.id)}
					>
						Cancelar
					</button>
					<button
						className="bg-red-500 hover:bg-red-400 px-3 py-2 text-sm text-white rounded-lg"
						onClick={async () => {
							setDeleteGalleryImageId(imageId);
							toast.dismiss(t.id);
							const success = await deleteGalleryImage(project._id, imageId);
							if (success) {
								toast.success("¡Imagen eliminada con éxito!");
							}
						}}
					>
						{projectSaveLoading ? (
							<PulseLoader
								color="#ff0000"
								size={14}
								disabled={projectSaveLoading}
							/>
						) : (
							"Eliminar"
						)}
					</button>
				</div>
			</div>
		));
	};

	const handleDeleteProjectVideo = async (id) => {
		toast((t) => (
			<div className="flex flex-col gap-4">
				<p className="break-words text-center">
					¿Desea eliminar el video de {project.title}?
				</p>
				<div className="flex justify-end gap-2">
					<button
						className="bg-customColor-blue hover:bg-slate-800 px-3 py-2 text-white text-sm rounded-lg"
						onClick={() => toast.dismiss(t.id)}
					>
						Cancelar
					</button>
					<button
						className="bg-red-500 hover:bg-red-400 px-3 py-2 text-sm text-white rounded-lg"
						onClick={async () => {
							toast.dismiss(t.id);
							const success = await deleteProjectVideo(id);
							if (success) {
								toast.success("¡Video eliminado con éxito!");
							}
						}}
					>
						{projectSaveLoading ? (
							<PulseLoader
								color="#ff0000"
								size={14}
								disabled={projectSaveLoading}
							/>
						) : (
							"Eliminar"
						)}
					</button>
				</div>
			</div>
		));
	};

	const handleDeleteProjectPdf = async (id) => {
		toast((t) => (
			<div className="flex flex-col gap-4">
				<p className="break-words text-center">
					¿Desea eliminar el pdf de {project.title}?
				</p>
				<div className="flex justify-end gap-2">
					<button
						className="bg-customColor-blue hover:bg-slate-800 px-3 py-2 text-white text-sm rounded-lg"
						onClick={() => toast.dismiss(t.id)}
					>
						Cancelar
					</button>
					<button
						className="bg-red-500 hover:bg-red-400 px-3 py-2 text-sm text-white rounded-lg"
						onClick={async () => {
							toast.dismiss(t.id);
							const success = await deleteProjectPdf(id);
							if (success) {
								toast.success("¡Pdf eliminado con éxito!");
							}
						}}
					>
						{projectSaveLoading ? (
							<PulseLoader
								color="#ff0000"
								size={14}
								disabled={projectSaveLoading}
							/>
						) : (
							"Eliminar"
						)}
					</button>
				</div>
			</div>
		));
	};
	const handleShowProject = async (id) => {
		await showProject(id);
	};

	const handleHideProject = async (id) => {
		await hideProject(id);
	};

	const handleDelete = (_id, projectTitle) => {
		toast((t) => (
			<div className="flex flex-col gap-4">
				<p className="break-words text-center">
					¿Desea eliminar el proyecto {projectTitle}?
				</p>
				<div className="flex justify-end gap-2">
					<button
						className="bg-red-500 hover:bg-red-400 px-3 py-2 text-sm text-white rounded-lg"
						onClick={async () => {
							await deleteProject(_id);
							toast.dismiss(t.id);
							toast.success("¡Proyecto eliminado con exito!");
						}}
					>
						{projectSaveLoading ? (
							<PulseLoader
								color="#ff0000"
								size={14}
								disabled={projectSaveLoading}
							/>
						) : (
							"Eliminar"
						)}
					</button>
					<button
						className="bg-customColor-blue hover:bg-slate-800 px-3 py-2 text-white text-sm rounded-lg"
						onClick={() => toast.dismiss(t.id)}
					>
						Cancelar
					</button>
				</div>
			</div>
		));
	};

	return (
		<>
			<div
				className={`w-[90%] md:w-[80%] lg:w-[100%] transition-all duration-300 overflow-hidden flex justify-between text-white rounded-xl shadow-gray shadow-md p-4 sm:p-6 md:p-8  mb-3 relative bg-neutral-800 ${
					isExpanded
						? "h-[425px] xs:h-[360px] sm:h-[380px] md:h-[400px] lg:h-[420px]"
						: "h-24 xs:h-32 sm:h-36 md:h-44"
				}`}
				style={{
					backgroundColor: backgroundColor,
				}}
			>
				<ProjectCardMobile
					isExpanded={isExpanded}
					openModal={openModal}
					project={project}
					handleDeleteGalleryImage={handleDeleteGalleryImage}
					handleDeleteProjectVideo={handleDeleteProjectVideo}
					toggleExpand={toggleExpand}
					projectSaveLoading={projectSaveLoading}
					handleShowProject={handleShowProject}
					handleHideProject={handleHideProject}
					handleDelete={handleDelete}
					deleteGalleryImageId={deleteGalleryImageId}
					handleDeleteProjectPdf={handleDeleteProjectPdf}
				/>

				<ProjectCardDesktop
					isExpanded={isExpanded}
					openModal={openModal}
					project={project}
					handleDeleteGalleryImage={handleDeleteGalleryImage}
					handleDeleteProjectVideo={handleDeleteProjectVideo}
					toggleExpand={toggleExpand}
					projectSaveLoading={projectSaveLoading}
					handleShowProject={handleShowProject}
					handleHideProject={handleHideProject}
					handleDelete={handleDelete}
					deleteGalleryImageId={deleteGalleryImageId}
					handleDeleteProjectPdf={handleDeleteProjectPdf}
				/>
			</div>
			<EditProjectModal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
				data={modalContent}
				id={id}
			/>
		</>
	);
}
