import {useProjects} from '../context/ProjectContext'
import { useNavigate, Link } from 'react-router-dom'

function PortfolioPage () {

    const navigate = useNavigate()
    const {projects} = useProjects()

    return(
            <div className=''>
                <div className='flex justify-center mb-4'>
                              <div className='w-32 h-32 rounded-full bg-neutral-800 flex items-center justify-center'>
                                <p className='p-6 font-sans text-2xl'>MR</p>
                              </div>
                </div>
                {projects.map(project => (    
                    <Link to={project._id}>            
                        <div key={project._id} className='text-white mb-2 flex justify-center'>
                            <div className='flex px-2 py-2 bg-zinc-800 text-white rounded-lg  shadow-black hover:bg-zinc-700 w-[800px] '>
                                <img className='w-32 h-32 object-cover rounded' src={project.image.url} alt="" />
                            <div className="ml-10 flex items-center">
                                    <h3 className='text-[20px]'>{project.title}</h3>
                            </div>
                        </div>
                    </div>
                    </Link>
                    ))}
            </div>       
    )
}

export default PortfolioPage