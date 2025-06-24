import axios from "./axios.js";

export const getPlansRequest = () => axios.get("/plans");

export const createPlanRequest = (plan) => axios.get("/plans/create", plan);

export const deletePlanRequest = (id) => axios.get(`/plans/${id}`);

export const editPlanRequest = (id, plan) => axios.get(`/plans/${id}`, plan);
