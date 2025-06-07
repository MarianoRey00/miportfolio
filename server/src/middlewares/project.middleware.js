import {
	uploadImage,
	uploadImages,
	deleteImage,
	uploadVideo,
	deleteVideo,
	uploadPdf,
	deletePdf,
	uploadImageToGallery,
} from "../libs/cloudinary.js";
import fs from "fs-extra";
import Project from "../models/project.model.js";
import User from "../models/user.model.js";
import path from "path";

export const validateCreateProject = async (req, res, next) => {
	const { title, description, link } = req.body;
	let image;
	let gallery = [];
	let video = null;
	let pdf;
	const errors = [];
	const validImageExtensions = [
		".jpg",
		".jpeg",
		".png",
		".svg",
		".webp",
		".gif",
		".avif",
		".bmp",
		".tiff",
	];
	const validVideoExtensions = [
		".mp4",
		".mov",
		".avi",
		".m4v",
		".avchd",
		".mkv",
		".webm",
	];
	const validPdfExtension = ".pdf";
	const maxImageSize = 3 * 1024 * 1024;
	const maxVideoSize = 50 * 1024 * 1024;
	const maxPdfSize = 10 * 1024 * 1024;

	if (!req.files || !req.files?.image) {
		errors.push({
			field: "image",
			message: "La portada no puede estar vacia.",
		});
	} else if (req.files.image.size > maxImageSize) {
		errors.push({
			field: "image",
			message: "La portada no puede pesar mas de 3MB.",
		});
	} else if (req.files.image) {
		const imageExtension = path.extname(req.files.image.name).toLowerCase();
		if (!validImageExtensions.includes(imageExtension)) {
			errors.push({
				field: "image",
				message: `La portada debe tener una extensión valida ${validImageExtensions.join(
					" "
				)}`,
			});
		}
	}

	if (!title) {
		errors.push({
			field: "title",
			message: "El titulo no puede estar vacio.",
		});
	} else if (title.length < 3) {
		errors.push({
			field: "title",
			message: "El titulo debe tener 3 o mas caracteres.",
		});
	} else if (title.length > 40) {
		errors.push({
			field: "title",
			message: "El titulo no puede tener mas de 40 caracteres.",
		});
	}

	if (!description) {
		errors.push({
			field: "description",
			message: "La descripción no puede estar vacia.",
		});
	} else if (description.length > 300) {
		errors.push({
			field: "description",
			message: "La descripción no puede tener mas de 300 caracteres.",
		});
	}

	if (link && !link.includes(".")) {
		errors.push({
			field: "link",
			message: "Ingrese un link válido. Ejemplo: https://ejemplo.com",
		});
	} else if (link && !link.includes("https://")) {
		errors.push({
			field: "link",
			message: "Ingrese un link válido. Ejemplo: https://ejemplo.com",
		});
	}

	if (req.files?.gallery?.length > 10) {
		errors.push({
			field: "gallery",
			message: "La galeria no puede tener mas de 10 fotos",
		});
	}

	if (req.files?.gallery) {
		const images = Array.isArray(req.files.gallery)
			? req.files.gallery
			: [req.files.gallery];

		images.forEach((image) => {
			const imageExtension = path.extname(image.name).toLowerCase();
			if (!validImageExtensions.includes(imageExtension)) {
				errors.push({
					field: "gallery",
					message: `Las fotos deben tener una extensión valida ${validImageExtensions.join(
						" "
					)}`,
				});
			}
			if (image.size > maxImageSize) {
				errors.push({
					field: "gallery",
					message: "El peso maximo de cada foto es de 3MB.",
				});
			}
		});
	}

	if (req.files?.video) {
		const videoExtension = path.extname(req.files.video.name).toLowerCase();
		if (!validVideoExtensions.includes(videoExtension)) {
			errors.push({
				field: "video",
				message: `El video debe tener una extensión valida ${validVideoExtensions.join(
					" "
				)}`,
			});
		}
	}
	if (req.files?.video?.size > maxVideoSize) {
		errors.push({
			field: "video",
			message: "El video no puede pesar mas de 50MB.",
		});
	}

	if (req.files?.pdf) {
		const pdfExtension = path.extname(req.files.pdf.name).toLowerCase();
		if (validPdfExtension !== pdfExtension) {
			errors.push({
				field: "pdf",
				message: "El pdf solo puede tener la extensión .pdf",
			});
		}
	}

	if (req.files?.pdf?.size > maxPdfSize) {
		errors.push({
			field: "pdf",
			message: "El pdf no puede pesar mas de 10MB.",
		});
	}

	if (errors.length > 0) {
		return res.status(400).json({ errors });
	}

	try {
		if (req.files?.image) {
			const result = await uploadImage(req.files.image.tempFilePath);
			image = {
				url: result.secure_url,
				public_id: result.public_id,
			};
			await fs.remove(req.files.image.tempFilePath);
		}

		if (req.files?.gallery) {
			const images = Array.isArray(req.files.gallery)
				? req.files.gallery
				: [req.files.gallery];

			gallery = await uploadImages(images);

			for (const image of images) {
				await fs.remove(image.tempFilePath);
			}
		}

		if (req.files?.video) {
			const result = await uploadVideo(req.files.video.tempFilePath);
			video = {
				url: result.secure_url,
				public_id: result.public_id,
			};
			await fs.remove(req.files.video.tempFilePath);
		}

		if (req.files?.pdf) {
			const result = await uploadPdf(req.files.pdf.tempFilePath);
			console.log(result);
			pdf = {
				url: result.secure_url,
				public_id: result.public_id,
				name: req.files.pdf.name,
			};
			await fs.remove(req.files.pdf.tempFilePath);
		}

		req.title = title;
		req.description = description;
		req.link = link;
		req.image = image;
		req.gallery = gallery;
		req.video = video;
		req.pdf = pdf;
		next();
	} catch (error) {
		res.status(500).json({ errors: [{ message: error.message }] });
	}
};

export const validateEditProject = (req, res, next) => {
	const { title, description, link, tags } = req.body;
	const errors = [];

	if (!title) {
		errors.push({
			field: "title",
			message: "El titulo no puede estar vacio.",
		});
	} else if (title.length < 3) {
		errors.push({
			field: "title",
			message: "El titulo debe tener 3 o mas caracteres.",
		});
	} else if (title.length > 40) {
		errors.push({
			field: "title",
			message: "El titulo no puede tener mas de 40 caracteres.",
		});
	} else if (title.length > 40) {
		errors.push({
			field: "title",
			message: "El titulo no puede tener mas de 40 caracteres.",
		});
	}

	if (!description) {
		errors.push({
			field: "description",
			message: "El titulo no puede estar vacio.",
		});
	} else if (description.length > 300) {
		errors.push({
			field: "description",
			message: "La descripción no puede tener mas de 300 caracteres.",
		});
	}

	if (link && !link.includes(".")) {
		errors.push({
			field: "link",
			message: "Ingrese un link valido. Ejemplo: https://ejemplo.com",
		});
	} else if (link && !link.includes("https://")) {
		errors.push({
			field: "link",
			message: "Ingrese un link valido. Ejemplo: https://ejemplo.com",
		});
	}

	if (errors.length > 0) {
		return res.status(400).json({ errors });
	}

	req.body.title = title;
	req.body.description = description;
	req.body.link = link;
	req.body.tags = tags;
	next();
};

export const validateEditImage = async (req, res, next) => {
	const errors = [];
	const validImageExtensions = [
		".jpg",
		".jpeg",
		".png",
		".svg",
		".gif",
		".webp",
		".avif",
		".bmp",
		".tiff",
	];
	const maxImageSize = 3 * 1024 * 1024;

	if (!req.files) {
		errors.push({
			field: "image",
			message: "La portada no puede estar vacia",
		});
	}

	if (req.files?.image) {
		const imageExtension = path.extname(req.files.image.name).toLowerCase();
		if (!validImageExtensions.includes(imageExtension)) {
			errors.push({
				field: "image",
				message: `La portada debe tener una extensión valida ${validImageExtensions.join(
					" "
				)}`,
			});
		}
	}

	if (req.files?.image.size > maxImageSize) {
		errors.push({
			field: "image",
			message: "La portada no puede pesar mas de 3MB.",
		});
	}

	if (errors.length > 0) {
		return res.status(400).json({ errors });
	}

	const project = await Project.findById(req.params.id);
	await deleteImage(project.image.public_id);

	try {
		const result = await uploadImage(req.files.image.tempFilePath);
		const newImage = {
			url: result.secure_url,
			public_id: result.public_id,
		};
		await fs.remove(req.files.image.tempFilePath);

		req.body.image = newImage;
		next();
	} catch (error) {
		res
			.status(500)
			.json({ errors: [{ field: "general", message: error.message }] });
	}
};

export const validateEditGallery = async (req, res, next) => {
	let newGallery = [];
	const errors = [];
	const validImageExtensions = [
		".jpg",
		".jpeg",
		".png",
		".svg",
		".webp",
		".gif",
		".avif",
		".bmp",
		".tiff",
	];
	const maxImageSize = 3 * 1024 * 1024;

	if (!req.files) {
		errors.push({
			field: "gallery",
			message: "La galeria no puede estar vacia",
		});
	} else if (req.files?.gallery) {
		const images = Array.isArray(req.files.gallery)
			? req.files.gallery
			: [req.files.gallery];

		images.forEach((image) => {
			const imageExtension = path.extname(image.name).toLowerCase();
			if (!validImageExtensions.includes(imageExtension)) {
				errors.push({
					field: "gallery",
					message: `Las fotos deben tener extensiones validas ${validImageExtensions.join(
						" "
					)}`,
				});
			}
			if (image.size > maxImageSize) {
				errors.push({
					field: "gallery",
					message: "El peso maximo de cada foto es de 3MB.",
				});
			}
		});
	} else if (req.files.gallery.length > 10) {
		errors.push({
			field: "gallery",
			message: "La galeria no puede tener mas de 10 fotos",
		});
	}

	if (errors.length > 0) {
		return res.status(400).json({ errors });
	}

	const project = await Project.findById(req.params.id);
	if (project.gallery) {
		for (const image of project.gallery) {
			await deleteImage(image.public_id);
		}
	}
	try {
		const images = Array.isArray(req.files.gallery)
			? req.files.gallery
			: [req.files.gallery];
		newGallery = await uploadImages(images);

		req.body.gallery = newGallery;

		for (const image of images) {
			await fs.remove(image.tempFilePath);
		}
		next();
	} catch (error) {
		res.status(500).json({ errors: [{ message: error.message }] });
	}
};

export const validateAddImageToGallery = async (req, res, next) => {
	const errors = [];
	const validImageExtensions = [
		".jpg",
		".jpeg",
		".png",
		".svg",
		".webp",
		".gif",
		".avif",
		".bmp",
		".tiff",
	];
	const maxImageSize = 3 * 1024 * 1024;

	if (!req.files) {
		errors.push({
			field: "galleryImage",
			message: "La imagen no puede estar vacia",
		});
	} else if (req.files?.galleryImage) {
		const imageExtension = path
			.extname(req.files.galleryImage.name)
			.toLowerCase();
		if (!validImageExtensions.includes(imageExtension)) {
			errors.push({
				field: "galleryImage",
				message: `La imagen debe tener una extensión valida ${validImageExtensions.join(
					" "
				)}`,
			});
		}
	}

	if (req.files?.galleryImage.size > maxImageSize) {
		errors.push({
			field: "galleryImage",
			message: "La imagen no puede pesar mas de 3MB.",
		});
	}

	if (errors.length > 0) {
		return res.status(400).json({ errors });
	}

	try {
		const result = await uploadImageToGallery(
			req.files.galleryImage.tempFilePath
		);
		const newImage = {
			url: result.secure_url,
			public_id: result.public_id,
			width: result.width,
			height: result.height,
		};
		await fs.remove(req.files.galleryImage.tempFilePath);

		const project = await Project.findById(req.params.id);
		if (project.gallery.length >= 10) {
			return res.status(400).json({
				errors: [
					{
						field: "galleryImage",
						message: "La galeria no puede tener mas de 10 imagenes.",
					},
				],
			});
		} else {
			project.gallery.push(newImage);
		}

		req.body.gallery = project.gallery;
		next();
	} catch (error) {
		res
			.status(500)
			.json({ errors: [{ field: "general", message: error.message }] });
	}
};

export const validateEditVideo = async (req, res, next) => {
	let video;
	const errors = [];
	const validVideoExtensions = [
		".mp4",
		".mov",
		".avi",
		".m4v",
		".avchd",
		".mkv",
		".webm",
	];
	const maxVideoSize = 50 * 1024 * 1024;

	if (!req.files) {
		errors.push({
			field: "video",
			message: "El video no puede estar vacio",
		});
	}
	if (req.files?.video) {
		const videoExtension = path.extname(req.files.video.name).toLowerCase();
		if (!validVideoExtensions.includes(videoExtension)) {
			errors.push({
				field: "video",
				message: `El video debe tener una extensión valida ${validVideoExtensions.join(
					" "
				)}`,
			});
		}
	}

	if (req.files?.video?.size > maxVideoSize) {
		errors.push({
			field: "video",
			message: "El video no puede pesar mas de 50MB.",
		});
	}

	if (errors.length > 0) {
		return res.status(400).json({ errors });
	}

	const project = await Project.findById(req.params.id);
	if (project.video) {
		await deleteVideo(project.video.public_id);
	}

	try {
		const result = await uploadVideo(req.files.video.tempFilePath);
		video = {
			url: result.secure_url,
			public_id: result.public_id,
		};

		await fs.remove(req.files.video.tempFilePath);
		req.body.video = video;
		next();
	} catch (error) {}
};

export const validateEditPdf = async (req, res, next) => {
	let pdf;
	const errors = [];
	const validPdfExtension = ".pdf";
	const maxPdfSize = 10 * 1024 * 1024;

	if (!req.files) {
		errors.push({
			field: "pdf",
			message: "El pdf no puede estar vacio",
		});
	}
	if (req.files?.pdf) {
		const pdfExtension = path.extname(req.files.pdf.name).toLowerCase();
		if (validPdfExtension !== pdfExtension) {
			errors.push({
				field: "pdf",
				message: "El pdf solo puede tener la extensión .pdf",
			});
		}
	}

	if (req.files?.pdf?.size > maxPdfSize) {
		errors.push({
			field: "pdf",
			message: "El pdf no puede pesar mas de 10MB.",
		});
	}

	if (errors.length > 0) {
		return res.status(400).json({ errors });
	}

	const project = await Project.findById(req.params.id);
	if (project.pdf) {
		await deletePdf(project.pdf.public_id);
	}

	try {
		console.log(req.files.pdf);
		const result = await uploadPdf(req.files.pdf.tempFilePath);
		pdf = {
			url: result.secure_url,
			public_id: result.public_id,
			name: req.files.pdf.name,
		};

		await fs.remove(req.files.pdf.tempFilePath);
		req.body.pdf = pdf;
		next();
	} catch (error) {
		console.error(error);
	}
};

export const validateGetProject = async (req, res, next) => {
	try {
		const errors = [];

		const { username } = req.params;
		const user = await User.findOne({ username }).collation({
			locale: "es",
			strength: 2,
		});
		const project = await Project.findById(req.params.id);
		if (!user) {
			errors.push({
				type: "missingUser",
				message: "El nombre de usuario es invalido.",
			});
		} else if (!project) {
			errors.push({
				type: "deletedProject",
				message: "El proyecto que buscás es invalido o ha sido eliminado",
			});
		} else if (project.user.toString() !== user._id.toString()) {
			errors.push({
				type: "projectDoesntBelongToUser",
				message: "El proyecto que buscás no pertenece a este usuario.",
			});
		}

		if (errors.length > 0) {
			return res.status(400).json({ errors });
		}

		next();
	} catch (error) {
		res.status(500).json({
			errors: [
				{
					type: "objectId",
					message: "URL del proyecto inválida.",
				},
			],
		});
		console.log(error);
	}
};
