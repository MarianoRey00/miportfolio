import axios from "./axios";

export const getProjectsRequest = () => {
  return axios.get("/projects");
};

export const getAdminProjectsRequest = (id) =>
  axios.get(`/projects/${id}/admin`);

export const getPublicProjectsRequest = (id) =>
  axios.get(`/projects/${id}/public`);

export const getPublicProjectRequest = (username, id) =>
  axios.get(`/projects/${username}/${id}`);

export const getProjectRequest = (id) => axios.get(`/projects/${id}`);

export const createProjectRequest = (project, plan) => {
  const form = new FormData();

  for (let key in project) {
    if (Array.isArray(project[key])) {
      project[key].forEach((file) => {
        form.append(key, file);
      });
    } else {
      form.append(key, project[key]);
    }
  }

  return axios.post("/projects", form, plan, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const editProjectRequest = (id, project) =>
  axios.put(`/projects/${id}/edit`, project);

export const editProjectImageRequest = (id, project) =>
  axios.put(`/projects/${id}/edit-image`, project, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

export const editProjectGalleryRequest = (id, formData) =>
  axios.put(`/projects/${id}/edit-gallery`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

export const editProjectVideoRequest = (id, project) =>
  axios.put(`/projects/${id}/edit-video`, project, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

export const editProjectPdfRequest = (id, project) =>
  axios.put(`/projects/${id}/edit-pdf`, project, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

export const addImageToGalleryRequest = (id, project) =>
  axios.put(`/projects/${id}/add-to-gallery`, project, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

export const deleteProjectRequest = (id) => axios.delete(`/projects/${id}`);

export const hideProjectRequest = (id) => axios.put(`/projects/${id}/hide`);

export const showProjectRequest = (id) => axios.put(`/projects/${id}/show`);

export const deleteGalleryImageRequest = (id, imageId) =>
  axios.delete(`/projects/${id}/delete-gallery-image/${imageId}`);

export const deleteProjectVideoRequest = (id) =>
  axios.delete(`/projects/${id}/delete-video`);

export const deleteProjectPdfRequest = (id) =>
  axios.delete(`/projects/${id}/delete-pdf`);
