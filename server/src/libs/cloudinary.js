import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";

dotenv.config();

cloudinary.config({
	cloud_name: process.env.CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const uploadImage = async (filePath) => {
	return await cloudinary.uploader.upload(filePath, {
		folder: "cover",
	});
};

export const uploadProfileImage = async (filePath) => {
	return await cloudinary.uploader.upload(filePath, {
		folder: "profile",
	});
};

export const uploadImages = async (images) => {
	const gallery = [];

	for (const image of images) {
		const result = await cloudinary.uploader.upload(image.tempFilePath, {
			folder: "gallery",
		});
		gallery.push({
			url: result.secure_url,
			public_id: result.public_id,
			width: result.width,
			height: result.height,
		});
	}

	return gallery;
};

export const uploadImageToGallery = async (filePath) => {
	return await cloudinary.uploader.upload(filePath, {
		folder: "gallery",
	});
};

export const deleteImage = async (id) => {
	return await cloudinary.uploader.destroy(id);
};

export const uploadVideo = async (filePath) => {
	return await cloudinary.uploader.upload(filePath, {
		resource_type: "video",
		folder: "videos",
	});
};

export const deleteVideo = async (id) => {
	return await cloudinary.uploader.destroy(id, {
		resource_type: "video",
	});
};

export const uploadPdf = async (filePath) => {
	return await cloudinary.uploader.upload(filePath, {
		resource_type: "raw",
		folder: "pdf",
	});
};

export const deletePdf = async (id) => {
	try {
		return await cloudinary.uploader.destroy(id, {
			resource_type: "raw",
		});
	} catch (error) {
		console.error("deletePdf:", error);
	}
};
