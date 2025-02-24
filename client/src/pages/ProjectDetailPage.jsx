import React from "react";
import { useProjects } from "../context/ProjectContext";
import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
import { VscArrowLeft } from "react-icons/vsc";
import ImageModal from "../components/ImageModal";
import PulseLoader from "react-spinners/PulseLoader";
import DownloadPdf from "../components/DownloadPdf";

function ProjectDetailPage() {
	const { getPublicProject, errors, projectLoading } = useProjects();
	const { username, id } = useParams();
	const [project, setProject] = useState({});
	const [isImageModalOpen, setIsImageModalOpen] = useState(false);
	const [modalImage, setModalImage] = useState();
	const [imagesAreEquals, setImagesAreEquals] = useState(null);
	const navigate = useNavigate();

	const imagesProportion = () => {
		if (!project?.gallery || project.gallery.length === 0) return;

		const proportion = project.gallery[0].width / project.gallery[0].height;
		const areEquals = !project.gallery.some(
			(image) => image.width / image.height !== proportion
		);
		setImagesAreEquals(areEquals);
	};
	console.log(imagesAreEquals);

	useEffect(() => {
		(async () => {
			try {
				const project = await getPublicProject(username, id);
				if (project.public === true) {
					setProject(project);
				} else {
					navigate("/error-404", {
						state: {
							message: "El proyecto que buscás no es público por el momento.",
						},
					});
				}
			} catch (error) {
				errors.find((error) => {
					if (errors.type === "missingUser") {
						navigate("/error-404", {
							state: { message: error.message },
						});
					} else if (errors.type === "deletedProject") {
						navigate("/error-404", {
							state: { message: error.message },
						});
					} else if (errors.type === "objectId") {
						navigate("/error-404", {
							state: { message: error.message },
						});
					} else {
						navigate("/error-404", {
							state: { message: error.message },
						});
					}
				});
			}
		})();
	}, [errors]);

	useEffect(() => {
		if (project.gallery) {
			imagesProportion();
		}
	}, [project]);

	const openImageModal = (image) => {
		setModalImage(image);
		setIsImageModalOpen(true);
	};

	return (
		<>
			{projectLoading ? (
				<div className="absolute inset-0 flex justify-center items-center bg-neutral-900">
					<PulseLoader color="#ffffff" size={12} />
				</div>
			) : (
				<section className="text-orange-50 min-h-screen flex flex-col">
					<Link to={`/${username}`} className="sticky top-0 block w-8">
						<VscArrowLeft className="w-8 h-8 cursor-pointer hover:bg-neutral-600 p-1 rounded ml-4 sm:ml-8 lg:ml-10 mt-2 backdrop-blur-md" />
					</Link>
					<div className="flex flex-col lg:flex-row p-4 sm:p-8 md:p-10 md:pt-3 gap-10">
						<div className="lg:w-[25%] h-full flex flex-col gap-4 overflow-hidden ">
							<div className="flex justify-center">
								<img
									src={project.image?.url}
									className="min-w-[20rem] max-w-[24rem] min-h-64 max-h-96 w-auto h-auto object-cover cursor-pointer"
									onClick={() => openImageModal(project.image)}
									alt="Portada del proyecto"
								/>
							</div>
							<div>
								<p className="text-xs text-neutral-500 mb-1">Titulo</p>
								<h1 className="text-2xl break-words">{project.title}</h1>
							</div>
							<div>
								<p className="text-xs text-neutral-500 mb-1">Descripción</p>
								<p className="break-words text-sm">{project.description}</p>
							</div>
							{project.link && (
								<div>
									<p className="text-xs text-neutral-500">Link</p>
									<Link
										className="hover:underline break-all text-sm"
										to={project.link}
										target="_blank"
									>
										<span className="hover:underline group">
											{project.link}{" "}
											<GoArrowUpRight className="w-5 h-5 inline-block group-hover:underline" />
										</span>
									</Link>
								</div>
							)}
							{project.pdf && (
								<div>
									<p className="text-xs text-neutral-500 mb-1">PDF</p>
									<DownloadPdf rawUrl={project.pdf?.url} />
								</div>
							)}
						</div>
						<div className="lg:w-[75%] ">
							{project.gallery?.length > 0 && (
								<h2 className="mt-10 lg:mt-0 text-lg">Galeria de fotos</h2>
							)}
							{imagesAreEquals && (
								<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
									{project.gallery?.map((image) => (
										<div key={image._id} className="mb-4">
											<img
												src={image.url}
												alt="Imagen de la galería"
												className="w-full rounded-lg object-cover cursor-pointer max-h-[400px]"
												onClick={() => openImageModal(image)}
											/>
										</div>
									))}
								</div>
							)}
							{!imagesAreEquals && (
								<div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 mt-4">
									{project.gallery?.map((image) => (
										<div key={image._id} className="mb-4 break-inside-avoid">
											<img
												src={image.url}
												alt="Imagen de galería"
												className="w-full rounded-lg object-cover cursor-pointer max-h-[400px]"
												onClick={() => openImageModal(image)}
											/>
										</div>
									))}
								</div>
							)}

							{project.video && (
								<div className="mt-6">
									<h2>Video</h2>
									<video src={project.video?.url} controls></video>
								</div>
							)}
						</div>
					</div>
				</section>
			)}
			<ImageModal
				isOpen={isImageModalOpen}
				onClose={() => setIsImageModalOpen(false)}
				image={modalImage}
			/>
		</>
	);
}

export default ProjectDetailPage;
