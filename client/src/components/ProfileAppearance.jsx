import { useAppearance } from "../context/AppearanceContext";
import PulseLoader from "react-spinners/PulseLoader";
import InputColor from "../components/InputColor";
function ProfileAppearance() {
  const { appearance, editAppearance, appearanceLoading } = useAppearance();

  const handlePictureShapeChange = (shape) => {
    const newAppearance = { ...appearance, pictureShape: shape };
    editAppearance(newAppearance);
  };

  const handleBackgroundColorChange = async (color) => {
    const newAppearance = { ...appearance, backgroundColor: color };
    await editAppearance(newAppearance);
  };

  const handleTextColorChange = async (color) => {
    const newAppearance = { ...appearance, textColor: color };
    await editAppearance(newAppearance);
  };

  const handleProjectBackgroundColorChange = async (color) => {
    const newAppearance = { ...appearance, projectBackgroundColor: color };
    await editAppearance(newAppearance);
  };

  const handleProjectShapeChange = async (shape) => {
    const newAppearance = { ...appearance, projectShape: shape };
    await editAppearance(newAppearance);
  };

  const handleProjectPictureShapeChange = async (shape) => {
    const newAppearance = { ...appearance, projectPictureShape: shape };
    await editAppearance(newAppearance);
  };

  const handleProjectTextColorChange = async (color) => {
    const newAppearance = { ...appearance, projectTextColor: color };
    await editAppearance(newAppearance);
  };

  const handleProjectBorderChange = async (border) => {
    const newAppearance = { ...appearance, projectBorder: border };
    await editAppearance(newAppearance);
  };

  const handleProjectBorderColorChange = async (color) => {
    const newAppearance = { ...appearance, projectBorderColor: color };
    await editAppearance(newAppearance);
  };

  return (
    <div className="flex flex-col gap-16">
      {appearanceLoading ? (
        <div className="flex justify-center">
          <PulseLoader color="#ffffff" size={10} />
        </div>
      ) : (
        <>
          <div className="flex flex-col gap-2">
            <h2>Forma de la foto de perfil</h2>
            <div className="flex gap-4">
              <button
                className="border-2 border-white bg-neutral-900 w-20 h-20 sm:w-24 sm:h-24 rounded-lg"
                onClick={() => handlePictureShapeChange("18px")}
              >
                {appearance.pictureShape === "18px" && "Selec."}
              </button>
              <button
                className="border-2 border-white bg-neutral-900 w-20 h-20 sm:w-24 sm:h-24 "
                onClick={() => handlePictureShapeChange("")}
              >
                {appearance.pictureShape === "" && "Selec."}
              </button>
              <button
                className="border-2 border-white bg-neutral-900 w-20 h-20 sm:w-24 sm:h-24  rounded-full"
                onClick={() => handlePictureShapeChange("9999px")}
              >
                {appearance.pictureShape === "9999px" && "Selec."}
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-base">Color de fondo del perfil</h2>
            <InputColor
              name="backgroundColor"
              id="Color de fondo"
              onChange={(e) => handleBackgroundColorChange(e.target.value)}
              value={appearance.backgroundColor}
              className="p-1 rounded-lg w-32 h-48 relative"
            />
          </div>

          <div className="flex gap-2 flex-col">
            <h2 className="text-base">Color de texto del perfil</h2>
            <InputColor
              name="backgroundColor"
              id="Color de fondo"
              onChange={(e) => handleTextColorChange(e.target.value)}
              value={appearance.textColor}
              className="w-full px-1 rounded"
            />
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-base">Color de fondo del proyecto</h2>
            <InputColor
              name="backgroundColor"
              id="Color de fondo"
              onChange={(e) =>
                handleProjectBackgroundColorChange(e.target.value)
              }
              value={appearance.projectBackgroundColor}
              className="p-1 w-56 h-16 rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-base">Forma del proyecto</h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="border-2 border-white p-1 bg-neutral-900 w-full sm:w-56 h-16 rounded-lg"
                onClick={() => handleProjectShapeChange("18px")}
              >
                {appearance.projectShape === "18px" && "Seleccionado"}
              </button>
              <button
                className="border-2 border-white p-1 bg-neutral-900 w-full sm:w-56 h-16"
                onClick={() => handleProjectShapeChange("")}
              >
                {appearance.projectShape === "" && "Seleccionado"}
              </button>
              <button
                className="border-2 border-white p-1 bg-neutral-900 w-full sm:w-56 h-16 rounded-full"
                onClick={() => handleProjectShapeChange("9999px")}
              >
                {appearance.projectShape === "9999px" && "Seleccionado"}
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-base">Forma de la foto del proyecto</h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <div
                className="border-2 border-white p-2 bg-neutral-900 w-full sm:w-56 cursor-pointer flex gap-8"
                onClick={() => handleProjectPictureShapeChange("12px")}
              >
                <div className="border-2 border-white bg-neutral-900 w-12 h-12 rounded-lg"></div>
                <p className="mt-3">
                  {appearance.projectPictureShape === "12px" && "Seleccionado"}
                </p>
              </div>
              <div
                className="border-2 border-white p-2 bg-neutral-900 w-full sm:w-56 cursor-pointer flex gap-8"
                onClick={() => handleProjectPictureShapeChange("")}
              >
                <div className="border-2 border-white bg-neutral-900 w-12 h-12"></div>
                <p className="mt-3">
                  {appearance.projectPictureShape === "" && "Seleccionado"}
                </p>
              </div>
              <div
                className="border-2 border-white p-2 bg-neutral-900 w-full sm:w-56 cursor-pointer flex gap-8"
                onClick={() => handleProjectPictureShapeChange("9999px")}
              >
                <div className="border-2 border-white bg-neutral-900 w-12 h-12 rounded-full"></div>
                <p className="mt-3">
                  {appearance.projectPictureShape === "9999px" &&
                    "Seleccionado"}
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-2 flex-col">
            <h2 className="text-base">Color de texto del proyecto</h2>
            <InputColor
              name="backgroundColor"
              id="Color de fondo"
              onChange={(e) => handleProjectTextColorChange(e.target.value)}
              value={appearance.projectTextColor}
              className="w-full px-1 rounded"
            />
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-base">Borde del proyecto</h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className=" p-1 bg-neutral-700 w-full sm:w-56 h-16 rounded-lg"
                onClick={() => handleProjectBorderChange("0px")}
              >
                Sin borde{" "}
                {appearance.projectBorder === "0px" && (
                  <>
                    <br />
                    <p>Seleccionado</p>
                  </>
                )}
              </button>
              <button
                className="border border-white p-1 bg-neutral-900 w-full sm:w-56 h-16 rounded-lg"
                onClick={() => handleProjectBorderChange("1px solid")}
              >
                {appearance.projectBorder === "1px solid" && "Seleccionado"}
              </button>
              <button
                className="border-2 border-white p-1 bg-neutral-900 w-full sm:w-56 h-16 rounded-lg"
                onClick={() => handleProjectBorderChange("2px solid")}
              >
                {appearance.projectBorder === "2px solid" && "Seleccionado"}
              </button>
              <button
                className="border-[3px] border-white p-1 bg-neutral-900 w-full sm:w-56 h-16 rounded-lg"
                onClick={() => handleProjectBorderChange("3px solid")}
              >
                {appearance.projectBorder === "3px solid" && "Seleccionado"}
              </button>
            </div>
          </div>

          {appearance.projectBorder !== "0px" && (
            <div className="flex gap-2 flex-col">
              <h2 className="text-base">Color de borde del proyecto</h2>
              <InputColor
                name="backgroundColor"
                id="Color de fondo"
                onChange={(e) => handleProjectBorderColorChange(e.target.value)}
                value={appearance.projectBorderColor}
                className="w-full px-1 rounded"
              />
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default ProfileAppearance;
