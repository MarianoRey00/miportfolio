import axios from "./axios.js";

export const getAppearanceRequest = () => axios.get("/appearance");

export const getPublicAppearanceRequest = (id) =>
	axios.get(`/appearance/${id}`);

export const editAppearanceRequest = (appearance) =>
	axios.put("/appearance/edit", appearance);
