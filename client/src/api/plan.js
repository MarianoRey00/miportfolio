import axios from "./axios.js";

export const getPlansRequest = () => axios.get("/plans");

export const createPlanRequest = (project) =>
  axios.get("/plans/create", project);

export const deletePlanRequest = (id) => axios.get(`/plans/${id}`);

export const editPlanRequest = (id, project) =>
  axios.get(`/plans/${id}`, project);
