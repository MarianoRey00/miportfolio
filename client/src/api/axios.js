import axios from "axios";

const instance = axios.create({
	baseURL: "https://miportfolio-api.vercel.app",

	withCredentials: true,
});

export default instance;
