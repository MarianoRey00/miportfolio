import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
		trim: true,
	},
	description: {
		type: String,
		required: true,
		trim: true,
	},
	image: {
		type: {
			url: String,
			public_id: String,
		},
		required: true,
	},
	link: {
		type: String,
		trim: true,
	},
	gallery: {
		type: [
			{
				url: String,
				public_id: String,
				width: Number,
				height: Number,
			},
		],
	},
	video: {
		type: {
			url: String,
			public_id: String,
		},
	},
	pdf: {
		type: {
			url: String,
			public_id: String,
			name: String,
		},
	},
	public: { type: Boolean, default: true },
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},
});

export default mongoose.model("Project", projectSchema);
