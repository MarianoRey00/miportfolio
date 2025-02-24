import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
		trim: true,
		unique: true,
	},
	email: {
		type: String,
		required: true,
		trim: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	biography: {
		type: String,
		trim: true,
	},
	picture: {
		type: {
			url: String,
			public_id: String,
		},
	},
	networks: {
		instagram: { type: String, trim: true },
		tiktok: { type: String, trim: true },
		facebook: { type: String, trim: true },
		x: { type: String, trim: true },
		youtube: { type: String, trim: true },
		linkedin: { type: String, trim: true },
		spotify: { type: String, trim: true },
		pinterest: { type: String, trim: true },
		github: { type: String, trim: true },
	},
	role: String,
	plan: String,
	createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("User", userSchema);
