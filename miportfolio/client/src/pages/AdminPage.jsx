import React, { useEffect } from "react";
import { useProjects } from "../context/ProjectContext";
import { Link } from "react-router-dom";
import { ProjectCard } from "../components/ProjectCard.jsx";
import { Preview } from "../components/Preview.jsx";
import { HiOutlinePlus } from "react-icons/hi";
import { useAuth } from "../context/AuthContext";

function AdminPage() {
	const { getProjects, projects } = useProjects();
	const { user } = useAuth();

	useEffect(() => {
		getProjects();
	}, []);

	return (
		<>
			<div className="flex justify-center w-[765px] h-screen">
				<div className="">
					<Link to="/admin/create">
						<button className="bg-neutral-900 hover:bg-neutral-800 border-white border-2 p-2 rounded-xl mt-3 mb-6 w-[595px] flex justify-center items-center gap-2 h-14 font-xl">
							<HiOutlinePlus className="w-[24px] h-[24px]" />
							Crear nuevo proyecto
						</button>
					</Link>
					{/* <Link to={`/${user.username}`}> */}
					<button className="bg-neutral-900 hover:bg-neutral-800 border-white border-2 p-2 rounded-xl mt-3 mb-6 w-[595px] flex justify-center items-center gap-2 h-14">
						Ver portfolio
					</button>
					{/* </Link>        */}
					{projects.map((project) => (
						<div key={project._id} className="text-white mb-3">
							<ProjectCard project={project} key={project._id} />
						</div>
					))}
				</div>
			</div>

			<Preview />
		</>
	);
}

export default AdminPage;
