// import toast from 'react-hot-toast'
import { useProjects } from "../context/ProjectContext";
import { AiOutlineDelete } from "react-icons/ai";
import { AiOutlineEdit } from "react-icons/ai";
import { RxSwitch } from "react-icons/rx";
import { AiOutlineDrag } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export function ProjectCard({ project }) {
	const navigate = useNavigate();
	const { deleteProject } = useProjects();

	//    const handleDelete = (_id) => {
	//         toast ((t) => (
	//             <div>
	//                 <p>¿Desea eliminar el proyecto?</p>
	//                 <div>
	//                     <button className='bg-red-500 hover:bg-red-400 px-3 py-2 text-sm text-white rouded-sm mx-2'
	//                     onClick={() => {
	//                         deletePost(_id)
	//                         toast.dismiss(t.id)
	//                         navigate('/')
	//                     }}>
	//                     Eliminar
	//                     </button>
	//                     <button className='bg-slate-400 hover:bg-slate-500 px-3 py-2 text-white rounded-sm mx-2' onClick={() => toast.dismiss(t.id)}>Cancelar</button>
	//                 </div>
	//             </div>
	//         ))
	//    }

	return (
		<div className="flex bg-zinc-800 text-white rounded-xl shadow-black shadow-md">
			<div className="flex items-center mx-3">
				<AiOutlineDrag className=" w-[20px] h-[20px]" />
			</div>

			<div className="bg-zinc-800 pt-2 pr-2 pb-2 mx-3">
				<img
					className="w-32 h-32 rounded object-cover"
					src={project.image.url}
					alt=""
				/>
			</div>
			<div className=" w-[400px] h-36 px-4 py-7  ">
				<div className="flex justify-between ">
					<div className="px-2 flex-col">
						<p className="text-xl font-normal">{project.title}</p>
						<div className="h-12 overflow-hidden">
							<p>{project.description}</p>
						</div>
					</div>
					<div className="flex flex-col pl-4 border-l border-white ">
						<div>
							<button
								className="text-sm px-2 py-1 rounded-sm hover:bg-gray-200 hover:text-black"
								onClick={() => navigate(`/admin/${project._id}/delete`)}
							>
								<AiOutlineDelete className="w-[20px] h-[20px]" />
							</button>
						</div>

						<div>
							<button
								className="text-sm px-2 py-1 rounded-sm hover:bg-gray-200 hover:text-black"
								onClick={() => navigate(`/admin/${project._id}/edit`)}
							>
								<AiOutlineEdit className=" w-[20px] h-[20px]" />
							</button>
						</div>
						<div>
							<RxSwitch className="m-auto w-[25px] h-[25px]" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
