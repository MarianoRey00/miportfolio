import React from 'react'
import {useForm} from 'react-hook-form'
import {useProjects} from '../context/ProjectContext'
import {useNavigate, Link, useParams} from 'react-router-dom'

function EditFormPage() {

    const {register, handleSubmit} = useForm()
    const {editProject} = useProjects()
    const {id} =  useParams()
    const navigate = useNavigate()

    const onSubmit = handleSubmit(async(project) => {
        try {
            await editProject(id, project)
            navigate('/admin')
        } catch (error) {
            console.log(error)
        }
    })
  
  
  
    return (
      <div>
        <form onSubmit={onSubmit} className='text-black'>
          <input type="text" placeholder='Título' 
          {...register('title')}
          autoFocus
          />
          <textarea name="description" rows="10" placeholder='Descripción'
          {...register('description')}
          ></textarea>
          <div className='text-white'>
            <button>Guardar</button>
            <Link to="/admin"><button>Volver atrás</button></Link>
          </div>
          
        </form>
      </div>
    )
}

export default EditFormPage