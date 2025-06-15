import axios from "./axios.js";

export const getSalesRequest = () => axios.get(`/sales`);

export const getUserSalesRequest = (id) => axios.get(`/sales/user/${id}`);
