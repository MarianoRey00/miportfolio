export function ProjectList({ appearance, projects }) {
  const publicProjects = projects.filter((project) => project.public);

  const modifiedProjectShape =
    appearance.projectShape === "18px" ? "12px" : appearance.projectShape;

  const modifiedProjectPictureShape =
    appearance.projectPictureShape === "12px"
      ? "8px"
      : appearance.projectPictureShape;

  console.log(modifiedProjectPictureShape);

  return (
    <>
      {publicProjects.map((project) => (
        <div
          className="flex p-2 overflow-hidden mb-2"
          style={{
            backgroundColor: appearance.projectBackgroundColor,
            borderRadius: modifiedProjectShape,
            border: appearance.projectBorder,
            borderColor: appearance.projectBorderColor,
          }}
        >
          <div className="w-[30%]">
            <img
              className="w-12 h-12 object-cover"
              style={{
                borderRadius: modifiedProjectPictureShape,
              }}
              src={project.image?.url}
              alt=""
            />
          </div>
          <div className="flex items-center w-[70%]">
            <h2
              className="text-[11px] break-words line-clamp-3 w-full"
              style={{ color: appearance.projectTextColor }}
            >
              {project.title}
            </h2>
          </div>
        </div>
      ))}
    </>
  );
}
