export function ProjectList({ appearance, projects }) {
	const publicProjects = projects.filter((project) => project.public);
	return (
		<>
			{publicProjects.map((project) => (
				<div
					className="flex p-2 overflow-hidden mb-2"
					style={{
						backgroundColor: appearance.projectBackgroundColor,
						borderRadius: appearance.projectShape,
						border: appearance.projectBorder,
						borderColor: appearance.projectBorderColor,
					}}
				>
					<div className="w-[30%]">
						<img
							className="w-12 h-12 object-cover"
							style={{
								borderRadius: appearance.projectPictureShape,
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
