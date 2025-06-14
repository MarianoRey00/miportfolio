import axios from "./axios.js";

export const getSalesRequest = () => axios.get(`/sales`);
