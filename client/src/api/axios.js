import axios from "axios";

const instance = axios.create({
	baseURL: "https://miportfolio-rouge.vercel.app/api",
	withCredentials: true,
});

export default instance;
