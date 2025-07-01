import { createContext, useContext, useState, useEffect } from "react";
import {
  createProjectRequest,
  getProjectsRequest,
  deleteProjectRequest,
  editProjectRequest,
  editProjectImageRequest,
  editProjectGalleryRequest,
  editProjectPdfRequest,
  addImageToGalleryRequest,
  editProjectVideoRequest,
  getProjectRequest,
  getPublicProjectRequest,
  getPublicProjectsRequest,
  deleteGalleryImageRequest,
  deleteProjectVideoRequest,
  deleteProjectPdfRequest,
  hideProjectRequest,
  showProjectRequest,
  getAdminProjectsRequest,
} from "../api/projects.js";
import { useAuth } from "../context/AuthContext.jsx";

const ProjectContext = createContext();

export const useProjects = () => {
  const context = useContext(ProjectContext);
  return context;
};

export function ProjectProvider({ children }) {
  const [projects, setProjects] = useState([]);
  const [errors, setErrors] = useState([]);
  const [projectLoading, setProjectLoading] = useState(false);
  const [projectSaveLoading, setProjectSaveLoading] = useState(false);
  const { authUser } = useAuth();

  const getProjects = async () => {
    setProjectLoading(true);
    const res = await getProjectsRequest();
    setProjectLoading(false);
    setProjects(res.data);
  };

  useEffect(() => {
    (async () => {
      if (authUser) {
        await getProjects();
      }
    })();
  }, [authUser]);

  const getAdminProjects = async (id) => {
    const res = await getAdminProjectsRequest(id);
    return res.data || [];
  };

  const getPublicProjects = async (id) => {
    const res = await getPublicProjectsRequest(id);
    return res.data || [];
  };

  const createProject = async (project, plan) => {
    try {
      setProjectSaveLoading(true);
      const res = await createProjectRequest(project, plan);
      setProjects([...projects, res.data]);
      setErrors([]);
      return true;
    } catch (error) {
      if (error.response && error.response.data) {
        setErrors(error.response.data.errors);
      } else {
        setErrors([
          {
            message: "Error con el servidor, reintentar mas tarde",
          },
        ]);
      }
      return false;
    } finally {
      setProjectSaveLoading(false);
    }
  };
  const deleteProject = async (id) => {
    try {
      setProjectSaveLoading(true);
      const res = await deleteProjectRequest(id);
      if (res.status === 204) {
        setProjects(projects.filter((project) => project._id !== id));
      }
    } catch (error) {
      console.log(error);
    } finally {
      setProjectSaveLoading(false);
    }
  };

  const getPublicProject = async (username, id) => {
    try {
      setProjectLoading(true);
      const res = await getPublicProjectRequest(username, id);
      return res.data;
    } catch (error) {
      if (error.response && error.response.data) {
        setErrors(error.response.data.errors);
      } else {
        setErrors([
          {
            message: "Error con el servidor, reintentar mas tarde",
          },
        ]);
      }
    } finally {
      setProjectLoading(false);
    }
  };

  const getProject = async (id) => {
    const res = await getProjectRequest(id);
    return res.data;
  };

  const editProject = async (id, project) => {
    try {
      setProjectSaveLoading(true);
      const res = await editProjectRequest(id, project);
      setProjects(
        projects.map((project) => (project._id === id ? res.data : project))
      );
      setErrors([]);
      return true;
    } catch (error) {
      if (error.response && error.response.data) {
        setErrors(error.response.data.errors);
      } else {
        setErrors([
          {
            message: "Error con el servidor, reintentar mas tarde",
          },
        ]);
      }
      return false;
    } finally {
      setProjectSaveLoading(false);
    }
  };

  const editProjectImage = async (id, project) => {
    try {
      setProjectSaveLoading(true);
      const res = await editProjectImageRequest(id, project);
      setProjects(
        projects.map((project) => (project._id === id ? res.data : project))
      );
      setErrors([]);
      return true;
    } catch (error) {
      if (error.response && error.response.data) {
        setErrors(error.response.data.errors);
      } else {
        setErrors([
          {
            message: "Error con el servidor, reintentar mas tarde",
          },
        ]);
      }
      return false;
    } finally {
      setProjectSaveLoading(false);
    }
  };

  const editProjectGallery = async (id, formData) => {
    try {
      setProjectSaveLoading(true);
      const res = await editProjectGalleryRequest(id, formData);
      setProjects(
        projects.map((project) => (project._id === id ? res.data : project))
      );
      setErrors([]);
      return true;
    } catch (error) {
      if (error.response && error.response.data) {
        setErrors(error.response.data.errors);
      } else {
        setErrors([
          {
            message: "Error con el servidor, reintentar mas tarde",
          },
        ]);
      }
      return false;
    } finally {
      setProjectSaveLoading(false);
    }
  };

  const editProjectVideo = async (id, project) => {
    try {
      setProjectSaveLoading(true);
      const res = await editProjectVideoRequest(id, project);
      setProjects(
        projects.map((project) => (project._id === id ? res.data : project))
      );
      setErrors([]);
      return true;
    } catch (error) {
      if (error.response && error.response.data) {
        setErrors(error.response.data.errors);
      } else {
        setErrors([
          {
            message: "Error con el servidor, reintentar mas tarde",
          },
        ]);
      }
      return false;
    } finally {
      setProjectSaveLoading(false);
    }
  };

  const addImageToGallery = async (id, project) => {
    try {
      setProjectSaveLoading(true);
      const res = await addImageToGalleryRequest(id, project);
      setProjects(
        projects.map((project) => (project._id === id ? res.data : project))
      );
      setErrors([]);
      return true;
    } catch (error) {
      if (error.response && error.response.data) {
        setErrors(error.response.data.errors);
      } else {
        setErrors([
          {
            message: "Error con el servidor, reintentar mas tarde",
          },
        ]);
      }
      return false;
    } finally {
      setProjectSaveLoading(false);
    }
  };

  const editProjectPdf = async (id, project) => {
    try {
      setProjectSaveLoading(true);
      const res = await editProjectPdfRequest(id, project);
      setProjects(
        projects.map((project) => (project._id === id ? res.data : project))
      );
      setErrors([]);
      return true;
    } catch (error) {
      if (error.response && error.response.data) {
        setErrors(error.response.data.errors);
      } else {
        setErrors([
          {
            message: "Error con el servidor, reintentar mas tarde",
          },
        ]);
      }
      return false;
    } finally {
      setProjectSaveLoading(false);
    }
  };

  const showProject = async (id) => {
    await showProjectRequest(id);
    setProjects(
      projects.map((project) =>
        project._id === id ? { ...project, public: true } : project
      )
    );
  };

  const hideProject = async (id) => {
    await hideProjectRequest(id);
    setProjects(
      projects.map((project) =>
        project._id === id ? { ...project, public: false } : project
      )
    );
  };

  const deleteGalleryImage = async (id, imageId) => {
    try {
      setProjectSaveLoading(true);
      const res = await deleteGalleryImageRequest(id, imageId);
      setProjects(
        projects.map((project) => (project._id === id ? res.data : project))
      );
      return true;
    } catch (error) {
      console.log(error);
      return false;
    } finally {
      setProjectSaveLoading(false);
    }
  };

  const deleteProjectVideo = async (id) => {
    try {
      setProjectSaveLoading(true);
      const res = await deleteProjectVideoRequest(id);
      setProjects(
        projects.map((project) => (project._id === id ? res.data : project))
      );
      return true;
    } catch (error) {
      console.log(error);
      return false;
    } finally {
      setProjectSaveLoading(false);
    }
  };

  const deleteProjectPdf = async (id) => {
    try {
      setProjectSaveLoading(true);
      const res = await deleteProjectPdfRequest(id);
      setProjects(
        projects.map((project) => (project._id === id ? res.data : project))
      );
      return true;
    } catch (error) {
      console.log(error);
      return false;
    } finally {
      setProjectSaveLoading(false);
    }
  };

  return (
    <ProjectContext.Provider
      value={{
        projects,
        errors,
        setErrors,
        createProject,
        getProjects,
        getAdminProjects,
        getPublicProjects,
        deleteProject,
        editProject,
        getProject,
        getPublicProject,
        editProjectImage,
        editProjectGallery,
        addImageToGallery,
        editProjectPdf,
        editProjectVideo,
        deleteGalleryImage,
        deleteProjectVideo,
        deleteProjectPdf,
        hideProject,
        showProject,
        projectLoading,
        projectSaveLoading,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
}
