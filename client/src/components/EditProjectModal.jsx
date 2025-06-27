import { useState, useEffect } from "react";
import { useProjects } from "../context/ProjectContext";
import PulseLoader from "react-spinners/PulseLoader";
import toast from "react-hot-toast";
import Input from "../components/Input";
import InputFile from "../components/InputFile";

function EditProjectModal({ isOpen, onClose, data, id }) {
  if (!isOpen) return null;
  const [titleMaxLength, setTitleMaxLength] = useState(40);
  const [descriptionMaxLength, setDescriptionMaxLength] = useState(300);
  const [prevImage, setPrevImage] = useState();
  const [prevGallery, setPrevGallery] = useState([]);
  const [formName, setFormName] = useState(data);
  const {
    editProject,
    editProjectImage,
    editProjectGallery,
    editProjectPdf,
    getProject,
    addImageToGallery,
    editProjectVideo,
    errors,
    setErrors,
    projectSaveLoading,
  } = useProjects();
  const [projectId, setProjectId] = useState(id);
  const [project, setProject] = useState({
    title: "",
    description: "",
    image: null,
    link: "",
    gallery: [],
    video: null,
    pdf: null,
  });

  useEffect(() => {
    (async () => {
      const project = await getProject(projectId);
      setProject(project);
      setPrevImage(project.image);
      setPrevGallery(project.gallery);
      setErrors([]);
    })();
  }, []);

  function handleChange(e) {
    const { name, value, files } = e.target;

    if (name === "image") {
      setProject({ ...project, image: files[0] });
    } else if (name === "gallery") {
      setProject({ ...project, gallery: Array.from(files) });
    } else if (name === "video") {
      setProject({ ...project, video: files[0] });
    } else if (name === "galleryImage") {
      setProject({ ...project, galleryImage: files[0] });
    } else if (name === "pdf") {
      setProject({ ...project, pdf: files[0] });
    } else {
      setProject({ ...project, [name]: value });
    }
  }

  function handleSubmitForm(e) {
    e.preventDefault();

    if (formName === "portada") {
      handleSubmitImage();
    } else if (formName === "galeria") {
      handleSubmitGallery();
    } else if (formName === "video") {
      handleSubmitVideo();
    } else if (formName === "galleryImage") {
      handleSubmitGalleryImage();
    } else if (formName === "PDF") {
      handleSubmitPdf();
    } else {
      handleSubmit();
    }
  }

  async function handleSubmit() {
    try {
      const success = await editProject(projectId, project);
      if (success) {
        toast.success("¡Proyecto editado con éxito!");
        onClose(true);
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function handleSubmitImage() {
    try {
      const success = await editProjectImage(projectId, project);
      if (success) {
        toast.success("¡Proyecto editado con éxito!");
        onClose(true);
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function handleSubmitGallery() {
    try {
      const formData = new FormData();
      const galleryFiles = project.gallery;

      for (const file of galleryFiles) {
        formData.append("gallery", file);
      }

      const success = await editProjectGallery(projectId, formData);
      if (success) {
        toast.success("¡Proyecto editado con éxito!");
        onClose(true);
      }
    } catch (error) {
      console.error("Error al enviar galería:", error);
    }
  }

  async function handleSubmitGalleryImage() {
    try {
      const success = await addImageToGallery(projectId, project);
      if (success) {
        toast.success("¡Proyecto editado con éxito!");
        onClose(true);
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function handleSubmitPdf() {
    try {
      const success = await editProjectPdf(projectId, project);
      if (success) {
        toast.success("¡Proyecto editado con éxito!");
        onClose(true);
      }
    } catch (error) {}
  }

  async function handleSubmitVideo() {
    try {
      const success = await editProjectVideo(projectId, project);
      if (success) {
        toast.success("¡Proyecto editado con éxito!");
        onClose(true);
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 text-black z-50"
      onClick={onClose}
    >
      <div
        className="relative bg-orange-50 p-6 sm:p-10 rounded-lg w-[95%] xs:w-[80%] sm:w-[75%] md:w-[65%] lg:w-[50%] shadow-lg h-[80%]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-lg"
        >
          X
        </button>
        {formName === "galleryImage" ? (
          <h2 className="text-xl text-center">Agregar imagen a la galeria</h2>
        ) : (
          <h2 className="text-xl text-center">Editar {formName}</h2>
        )}
        <form
          className="flex flex-col justify-between  h-full"
          onSubmit={handleSubmitForm}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSubmitForm();
            }
          }}
        >
          {formName === "titulo" && (
            <div className="flex flex-col mt-10 gap-2">
              <div className="flex justify-between">
                <label htmlFor="titulo">Título *</label>
                <p
                  className={`text-sm ml-auto ${
                    project.title.length > titleMaxLength
                      ? "text-red-600"
                      : "text-neutral-900"
                  }`}
                >
                  {project.title.length}/{titleMaxLength}
                </p>
              </div>
              <Input
                type="text"
                id="titulo"
                name="title"
                value={project.title}
                onChange={handleChange}
                placeholder="Título"
                errors={errors}
              />
            </div>
          )}
          {formName === "descripción" && (
            <div className="flex flex-col mt-10">
              <div className="flex justify-between">
                <label htmlFor="descripcion">Descripción *</label>
                <p
                  className={`text-sm ml-auto ${
                    project.description.length > descriptionMaxLength
                      ? "text-red-600"
                      : "text-neutral-800"
                  }`}
                >
                  {project.description.length}/{descriptionMaxLength}
                </p>
              </div>
              <textarea
                name="description"
                id="descripcion"
                onChange={handleChange}
                value={project.description}
                placeholder="Descripción"
                rows={5}
                className="text-zinc-900 border border-neutral-900 px-3 py-2  rounded-xl bg-orange-50 placeholder-customColor-blue resize-none scrollbar"
              ></textarea>
              <p className="text-red-600">
                {
                  errors?.find((error) => error.field === "description")
                    ?.message
                }
              </p>
            </div>
          )}
          {formName === "link" && (
            <div className="flex flex-col mt-10">
              <label htmlFor="link">Link</label>
              <Input
                type="text"
                id="link"
                name="link"
                value={project.link}
                onChange={handleChange}
                placeholder="https://link.com"
                errors={errors}
              />
            </div>
          )}
          {formName === "galeria" && (
            <div className="flex flex-col mt-10">
              <p className="text-zinc-600 text-sm">
                <span className="font-sans text-base">ⓘ</span> Editar la galeria
                va a borrar toda la galeria previa.
              </p>
              <label htmlFor="galeria">Galeria</label>
              <InputFile
                id="galeria"
                name="gallery"
                onChange={handleChange}
                errors={errors}
                multiple
              />
              {prevGallery.length > 0 && (
                <>
                  <p className="my-1">Galeria previa:</p>
                  <div className="overflow-auto scrollbar py-2">
                    <div className="flex gap-3">
                      {prevGallery.map((image) => (
                        <div key={image._id} className="flex-shrink-0">
                          <img
                            className="w-20 h-20 rounded object-cover"
                            src={image.url}
                            alt=""
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          )}
          {formName === "portada" && (
            <div className="flex flex-col mt-10">
              <label htmlFor="portada">Portada *</label>
              <InputFile
                id="imagen"
                name="image"
                onChange={handleChange}
                errors={errors}
              />
              <div className="flex flex-col gap-2 mt-2">
                <p>Portada previa:</p>
                <img
                  src={prevImage?.url}
                  alt=""
                  className="w-20 h-20 object-cover"
                />
              </div>
            </div>
          )}
          {formName === "video" && (
            <div className="flex flex-col mt-10">
              <label htmlFor="video">Video</label>
              <InputFile
                id="video"
                name="video"
                onChange={handleChange}
                errors={errors}
              />
            </div>
          )}
          {formName === "PDF" && (
            <div className="flex flex-col mt-10">
              <label htmlFor="pdf">PDF</label>
              <InputFile
                id="pdf"
                name="pdf"
                onChange={handleChange}
                errors={errors}
              />
            </div>
          )}
          {formName === "galleryImage" && (
            <div className="flex flex-col mt-10">
              <label htmlFor="galeria">Galeria</label>
              <InputFile
                id="galeria"
                name="galleryImage"
                onChange={handleChange}
                errors={errors}
              />
            </div>
          )}
          <button
            className="text-orange-50 px-3 py-2 bg-neutral-900 rounded-xl hover:bg-neutral-800 mb-5"
            type="submit"
            disabled={projectSaveLoading}
          >
            {projectSaveLoading ? (
              <PulseLoader color="#ffffff" size={7} />
            ) : (
              "Guardar cambios"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditProjectModal;
