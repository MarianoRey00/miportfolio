import { createContext, useContext, useState, useEffect } from "react";
import {createProjectRequest, getProjectsRequest, deleteProjectRequest, editProjectRequest, getProjectRequest} from '../api/projects.js'

const ProjectContext = createContext()

export const useProjects = () => {
    const context = useContext(ProjectContext)
    return context
}


export function ProjectProvider({children}) {

    const [projects, setProjects] = useState([])

    // const createProject = async(project) => {
    //     try {
    //         const res = await createProjectRequest(project)
    //         console.log(res)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    // const getProjects = async() => {
    //     try {
    //         const res = await getProjectsRequest()
    //         setProjects(res.data)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    // const deleteProject = async (id) => {
    //     try {
    //         const res = await deleteProjectRequest(id)
    //         if(res.status === 204){
    //             setProjects(projects.filter((project) => {project._id !== id}))
    //         }
    //     } catch (error) {
    //         console.log(error)
    //     }
        
    // }

    // const getProject = async (id) => {
    //     const res = await getProjectRequest(id)
    // }

    // const editProject = async(id, project) => {
    //     try {
    //         await editProjectRequest(id, project)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    const getProjects = async () => {
        const res = await getProjectsRequest()
        setProjects(res.data)
    }

    useEffect(() => {
        getProjects()
      }, [])
      

    const createProject = async (project) => {
        const res = await createProjectRequest(project)
        console.log(res.data)
        setProjects([...projects, res.data])
    }

    const deleteProject = async (id) => {
        const res = await deleteProjectRequest(id)
        if(res.status === 204){
            setProjects(projects.filter((project) => project._id !== id))

        }
    }

    const getProject = async (id) => {
        const res = await getProjectRequest(id)
        return res.data
    }

    const editProject = async(id, project) => {
        const res = await editProjectRequest(id, project)
        setProjects(projects.map(project => project._id === id ? res.data : project))
    }


    return(
        <ProjectContext.Provider value={{
            projects,
            createProject,
            getProjects,
            deleteProject,
            editProject,
            getProject,
        }}>
            {children}
        </ProjectContext.Provider>
    )
}