import mongoose from "mongoose";

const appearanceSchema = new mongoose.Schema({
	pictureShape: {
		type: String,
	},
	backgroundColor: {
		type: String,
	},
	textColor: {
		type: String,
	},
	projectBackgroundColor: {
		type: String,
	},
	projectShape: {
		type: String,
	},
	projectPictureShape: {
		type: String,
	},
	projectTextColor: {
		type: String,
	},
	projectBorder: {
		type: String,
	},
	projectBorderColor: {
		type: String,
	},
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},
});
export default mongoose.model("Appearance", appearanceSchema);
