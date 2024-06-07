import React from 'react'
import {useProjects} from '../context/ProjectContext'
import { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'

function ProjectDetailPage() {

    const { getProject, deleteProject } = useProjects()
    const params = useParams()
    const navigate = useNavigate()
    const [project, setProject] = useState({
        title:'',
        description:'',
        image: '',
    
      });
    
      useEffect(() => {
        (async() => {
          if(params.id) {
            const project = await getProject(params.id)
            setProject(project)
          }
        })();
    
      }, [])



  return (
    <div className='flex justify-between items-center 0 p-20'>
    <div className=''>
        <img className='w-96 h-96 object-cover' src={project.image.url} alt=""/>
    </div>
    <div className=' w-[400px] h-80 '>
        <p className='text-xl font-semibold'>{project.title}</p>
        <p className=''>{project.description}</p>
    
        <button className='bg-[#D9D9D9] px-3 py-2 text-sm text-black rounded mt-[250px]' onClick={() => navigate(`/${params.user}`)}>Volver</button>
    </div>
</div>
  )
}

export default ProjectDetailPage