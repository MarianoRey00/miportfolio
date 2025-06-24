import axios from "./axios.js";

export const getPlansRequest = () => axios.get("/plans");

export const getPlanRequest = (id) => axios.get(`/plans/${id}`);

export const createPlanRequest = (plan) => axios.post("/plans/create", plan);

export const deletePlanRequest = (id) => axios.delete(`/plans/${id}`);

export const editPlanRequest = (id, plan) => axios.put(`/plans/${id}`, plan);
