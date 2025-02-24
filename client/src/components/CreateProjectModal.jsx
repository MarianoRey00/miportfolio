import React, { useState, useEffect } from "react";
import { useProjects } from "../context/ProjectContext";
import PulseLoader from "react-spinners/PulseLoader";
import toast from "react-hot-toast";
import Input from "../components/Input";
import InputFile from "../components/InputFile";

function CreateProjectModal({ isOpen, onClose }) {
	if (!isOpen) return null;
	const { createProject, errors, setErrors, projectSaveLoading } =
		useProjects();
	const [titleMaxLength, setTitleMaxLength] = useState(40);
	const [descriptionMaxLength, setDescriptionMaxLength] = useState(300);
	const [project, setProject] = useState({
		title: "",
		description: "",
		image: null,
		link: "",
		tags: [],
		gallery: [],
		video: null,
		pdf: null,
	});
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

	useEffect(() => {
		setErrors([]);
	}, []);

	const handleChange = (e) => {
		const { name, value, files } = e.target;

		if (name === "image") {
			setProject({ ...project, image: files[0] });
		} else if (name === "gallery") {
			setProject({ ...project, gallery: Array.from(files) });
		} else if (name === "video") {
			setProject({ ...project, video: files[0] });
		} else if (name === "pdf") {
			setProject({ ...project, pdf: files[0] });
		} else {
			setProject({ ...project, [name]: value });
		}
	};

	async function handleSubmit(e) {
		e.preventDefault();

		const formData = new FormData();
		formData.append("title", project.title);
		formData.append("description", project.description);
		formData.append("image", project.image);
		formData.append("link", project.link);
		formData.append("video", project.video);
		formData.append("pdf", project.pdf);

		project.gallery.forEach((file) => {
			formData.append("gallery", file);
		});

		try {
			const success = await createProject(project);
			if (success) {
				toast.success("¡Proyecto creado con exito!");
				onClose(true);
			}
		} catch (error) {
			toast.error("Error al crear el proyecto", error);
		}
	}

	return (
		<>
			<div
				className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 text-black z-50"
				onClick={onClose}
			>
				<div
					className="relative bg-orange-50 p-6 sm:p-10 rounded-lg  w-[95%] xs:w-[80%] sm:w-[75%] md:w-[65%] lg:w-[50%] shadow-lg h-[90%] overflow-auto scrollbar "
					onClick={(e) => e.stopPropagation()}
				>
					<button
						onClick={onClose}
						className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-lg"
					>
						X
					</button>
					<h1 className="text-xl text-center mb-6">Crear nuevo proyecto</h1>
					<form
						onSubmit={handleSubmit}
						encType="multipart/form-data"
						className="flex flex-col gap-4"
						onKeyDown={(e) => {
							if (e.key === "Enter") {
								handleSubmit();
							}
						}}
					>
						<div className="flex flex-col gap-2">
							<label htmlFor="imagen">Portada *</label>
							<InputFile
								id="imagen"
								name="image"
								onChange={handleChange}
								errors={errors}
							/>
						</div>
						<div className="flex flex-col gap-2">
							<div className="flex justify-between">
								<label htmlFor="titulo">Título *</label>
								<p
									className={`text-sm ml-auto ${
										project.title.length > titleMaxLength
											? "text-red-600"
											: "text-neutral-800"
									}`}
								>
									{project.title.length}/{titleMaxLength}
								</p>
							</div>
							<Input
								type="text"
								id="titulo"
								name="title"
								value={project.title}
								onChange={handleChange}
								placeholder="Título"
								errors={errors}
							/>
						</div>
						<div className="flex flex-col gap-2">
							<div className="flex justify-between">
								<label htmlFor="descripcion">Descripción *</label>
								<p
									className={`text-sm ml-auto ${
										project.description.length > descriptionMaxLength
											? "text-red-600"
											: "text-neutral-800"
									}`}
								>
									{project.description.length}/{descriptionMaxLength}
								</p>
							</div>
							<textarea
								name="description"
								id="descripcion"
								rows={5}
								value={project.description}
								onChange={handleChange}
								placeholder="Descripción"
								className="text-zinc-900 border border-customColor-blue px-3 py-2 rounded-xl bg-orange-50 resize-none"
							></textarea>
							<p className="text-red-600">
								{
									errors?.find((error) => error.field === "description")
										?.message
								}
							</p>
						</div>
						<div className="flex flex-col gap-2">
							<label htmlFor="link">Link</label>
							<Input
								type="text"
								id="link"
								name="link"
								value={project.link}
								onChange={handleChange}
								placeholder="https://link.com"
								errors={errors}
							/>
						</div>
						<div className="mt-6">
							<ul className="flex justify-between gap-3">
								<li
									onClick={() => toggleView("gallery")}
									className={`cursor-pointer w-[30%] py-1.5 rounded-lg text-center text-sm
                ${
									view.gallery
										? "bg-neutral-800 text-orange-50 shadow-lg border border-neutral-800"
										: "bg-orange-50 text-neutral-800 hover:bg-neutral-800 hover:text-orange-50 border border-black"
								}`}
								>
									Galería
								</li>
								<li
									onClick={() => toggleView("video")}
									className={`cursor-pointer w-[30%] py-1.5 rounded-lg text-center text-sm
                ${
									view.video
										? "bg-neutral-800 text-orange-50 shadow-lg border border-neutral-800"
										: "bg-orange-50 text-neutral-800 hover:bg-neutral-800 hover:text-orange-50 border border-black"
								}`}
								>
									Video
								</li>
								<li
									onClick={() => toggleView("pdf")}
									className={`cursor-pointer w-[30%] py-1.5 rounded-lg text-center text-sm
                ${
									view.pdf
										? "bg-neutral-800 text-orange-50 shadow-lg border border-neutral-800"
										: "bg-orange-50 text-neutral-800 hover:bg-neutral-800 hover:text-orange-50 border border-black"
								}`}
								>
									PDF
								</li>
							</ul>
						</div>
						{view.gallery && (
							<div className="flex flex-col gap-2">
								<label htmlFor="galeria">Galeria</label>
								<InputFile
									id="galeria"
									name="gallery"
									onChange={handleChange}
									errors={errors}
									multiple
								/>
							</div>
						)}
						{view.video && (
							<div className="flex flex-col gap-2">
								<label htmlFor="video">Video</label>
								<InputFile
									id="video"
									name="video"
									onChange={handleChange}
									errors={errors}
								/>
							</div>
						)}
						{view.pdf && (
							<div className="flex flex-col gap-2">
								<label htmlFor="pdf">PDF</label>
								<InputFile
									id="pdf"
									name="pdf"
									onChange={handleChange}
									errors={errors}
								/>
							</div>
						)}
						<button
							type="submit"
							className="bg-neutral-900 text-white border border-customColor-blue px-3 py-2 rounded-xl placeholder-customColor-blue hover:bg-neutral-800"
							disabled={projectSaveLoading}
						>
							{projectSaveLoading ? (
								<PulseLoader color="#ffffff" size={7} />
							) : (
								"Crear"
							)}
						</button>
					</form>
				</div>
			</div>
		</>
	);
}

export default CreateProjectModal;
