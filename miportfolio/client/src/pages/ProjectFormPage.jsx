// import {useForm} from 'react-hook-form'
// import {useProjects} from '../context/ProjectContext'
// import {useNavigate} from 'react-router-dom'

// function ProjectFormPage() {

//   const {register, handleSubmit, setValue} = useForm()
//   const {createProject} = useProjects()
//   const navigate = useNavigate()

//   const onSubmit = handleSubmit((data) => {
//     createProject(data)
//     console.log(data)
//     navigate('/admin')
//   })



//   return (
//     <div>
//       <form onSubmit={onSubmit} className='text-black'>
//         <input type="text" placeholder='Título' 
//         {...register('title')}
//         autoFocus
//         />
//         <textarea name="description" rows="10" placeholder='Descripción'
//         {...register('description')}
//         ></textarea>
//         <input type="file" {...register('cover')}/>
//         <input type="file" {...register('gallery')} multiple/>
//         <button>Crear</button>
//       </form>
//     </div>
//   )
// }

// export default ProjectFormPage


import React, { useEffect, useState} from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import {useProjects} from '../context/ProjectContext'
import {useNavigate, useParams} from 'react-router-dom'

function ProjectFormPage() {
  const {createProject, getProject, editProject} = useProjects()
  const navigate = useNavigate()
  const params = useParams()
  const [project, setProject] = useState({
    title:'',
    description:'',
    image:'',

  });
  
  useEffect(() => {
    (async() => {
      if(params.id) {
        const project = await getProject(params.id)
        setProject(project)
      }
    })();

  }, [])

  function title() {
    if(params.id){
      return(<h1 className='text-center text-white text-xl mb-4 '>Editar Proyecto</h1>)
    }else{
      return(
        <h1 className='text-center text-white text-xl mb-4'>Crear Proyecto</h1>
      )
    }
  }
 

  return (
    <section className='flex justify-center items-center h-[450px] w-[800px] bg-zinc-800 container m-auto'>
      <Formik
      initialValues={project}
      validationSchema={Yup.object({
        title: Yup.string().required("El título es requerido"),
        description: Yup.string().required("La descripción es requerida")
        
      })}
      onSubmit={async (values) => {
        if(params.id) {
          await editProject(params.id, values)
        }else{
          await createProject(values)
        }

        navigate('/admin')
      }}
      enableReinitialize
      >
          {( {handleSubmit, setFieldValue} ) => (
            <Form onSubmit={handleSubmit} className='text-black'  >
                <div className='m-auto'>
                  <div>
                    {title()}
                  </div>
                  <div className='mb-4'>
                    <label htmlFor="title" className="block text-gray-200 font-semibold mb-2">Título</label>
                    <Field className='px-3 py-2 bg-white rounded-3xl w-[550px]' name='title' placeholder="title"></Field>
                    <ErrorMessage component="p" className="text-red-400 text-sm" name="title"/>
                    </div>

                  <div className='mb-4'>
                    <label htmlFor="description" className="block text-gray-200 font-semibold mb-2">Descripción</label>
                    <Field className='px-3 py-2 bg-white rounded-3xl  w-[550px]'  name='description' placeholder="description"></Field>
                    <ErrorMessage component="p" name="description" className="text-red-400 text-sm"/>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="image" className="block text-gray-200 font-semibold mb-2">Portada</label>
                    <input type="file" id="portada" name="image" className="w-full text-white focus:outline-none" onChange={(e) => setFieldValue('image', e.target.files[0])}/>
                  </div>
                  <button className='px-3 py-2 bg-white rounded-3xl w-[550px] font-semibold' type='submit'>Guardar</button>
                </div>
           
          </Form>
          )}
      </Formik>
    </section>
  )
}

export default ProjectFormPage