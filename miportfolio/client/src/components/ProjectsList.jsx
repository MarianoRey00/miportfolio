import {useProjects} from '../context/ProjectContext.jsx'
// import { useNavigate } from 'react-router-dom'


export function ProjectList (){
    const {projects} = useProjects()
    // const navigate = useNavigate()
    

    return(
        <>
                 
                {projects.map(project => (                
                    <div key={project._id} className='text-white mb-2'>
                    <div className='flex px-2 py-2 bg-zinc-800 text-white rounded-lg  shadow-black hover:bg-zinc-700'>
                    <img className='w-12 h-12 object-cover rounded' src={project.image.url} alt="" />
                        <div className="ml-2  flex items-center">
                                <h3 className='text-[12px]'>{project.title}</h3>
                        </div>
                    </div>
                </div>
                ))}
            
        </>
    )
}    