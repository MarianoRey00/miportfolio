import Project from "../models/project.model.js";
import { deleteImage, deleteVideo, deletePdf } from "../libs/cloudinary.js";

export const getProjects = async (req, res) => {
	const projects = await Project.find({
		user: req.user.id,
	}).populate("user");
	res.json(projects);
};

export const getPublicProjects = async (req, res) => {
	const projects = await Project.find({
		user: req.params.id,
		public: true,
	});
	res.json(projects);
};

export const getAdminProjects = async (req, res) => {
	const projects = await Project.find({
		user: req.params.id,
	});
	res.json(projects);
};

export const createProject = async (req, res) => {
	try {
		const newProject = new Project({
			title: req.title,
			description: req.description,
			image: req.image,
			link: req.link,
			tags: req.tags,
			gallery: req.gallery,
			video: req.video,
			pdf: req.pdf,
			public: true,
			user: req.user.id,
		});

		res.json(await newProject.save());
	} catch (error) {
		res.status(500).json(error);
	}
};

export const getProject = async (req, res) => {
	try {
		const project = await Project.findById(req.params.id);
		res.json(project);
	} catch (error) {
		res.status(400);
	}
};

export const deleteProject = async (req, res) => {
	const project = await Project.findByIdAndDelete(req.params.id);

	await deleteImage(project.image.public_id);

	if (project.gallery.length > 0) {
		for (const image of project.gallery) {
			await deleteImage(image.public_id);
		}
	}

	if (project.video) {
		await deleteVideo(project.video.public_id);
	}

	if (project.pdf) {
		await deletePdf(project.pdf.public_id);
	}

	if (!project) {
		return res.status(404).json({ message: "Proyecto no encontrado" });
	}
	return res.sendStatus(204);
};

export const deleteProjects = async (id) => {
	const project = await Project.findByIdAndDelete(id);

	await deleteImage(project.image.public_id);

	if (project.gallery.length > 0) {
		for (const image of project.gallery) {
			await deleteImage(image.public_id);
		}
	}

	if (project.video) {
		await deleteVideo(project.video.public_id);
	}
};

export const editProject = async (req, res) => {
	try {
		const project = await Project.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		});
		if (!project) {
			return res.status(404).json({ message: "Proyecto no encontrado" });
		}
		res.json(project);
	} catch (error) {
		return res.status(500).json({ errors: [{ message: error.message }] });
	}
};

export const deleteGalleryImage = async (req, res) => {
	try {
		const { id, imageId } = req.params;

		const project = await Project.findById(id);

		const image = project.gallery.find(
			(image) => image._id.toString() === imageId
		);

		await deleteImage(image.public_id);

		project.gallery = project.gallery.filter(
			(image) => image._id.toString() !== imageId
		);

		await project.save();

		res.json(project);
	} catch (error) {
		return res.status(500).json({ message: error.message });
	}
};

export const addGalleryImage = (req, res) => {};

export const hideProject = async (req, res) => {
	try {
		const project = await Project.findByIdAndUpdate(req.params.id, {
			$set: { public: false },
		});
		res.json(project);
	} catch (error) {
		return res.status(500).json({ message: error.message });
	}
};

export const deleteProjectVideo = async (req, res) => {
	try {
		const project = await Project.findById(req.params.id);

		await deleteVideo(project.video.public_id);

		project.video = undefined;

		await project.save();

		res.json(project);
	} catch (error) {
		console.error(error);
	}
};

export const deleteProjectPdf = async (req, res) => {
	try {
		const project = await Project.findById(req.params.id);

		await deletePdf(project.pdf.public_id);

		project.pdf = undefined;

		await project.save();

		res.json(project);
	} catch (error) {
		console.error(error);
	}
};

export const showProject = async (req, res) => {
	try {
		const project = await Project.findByIdAndUpdate(req.params.id, {
			$set: { public: true },
		});
		res.json(project);
	} catch (error) {
		return res.status(500).json({ message: error.message });
	}
};
