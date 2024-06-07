import axios from './axios'

export const getProjectsRequest = () => axios.get('/projects')

export const getProjectRequest = (id) => axios.get(`/projects/${id}`)

// export const createProjectRequest = (project) => {
//     axios.post('/projects', project, {
//     headers: {
//         "Content-Type": "multipart/form-data"
//     }
// })
// }
export const editProjectRequest = (id, project) => axios.put(`/projects/${id}/edit`, project, {
    headers: {
        "Content-Type": "multipart/form-data"
    }
})

export const deleteProjectRequest = (id) => axios.delete(`/projects/${id}`)


export const createProjectRequest = (project) => {
    
    const form = new FormData()

    for(let key in project) {
        form.append(key, project[key])
    }

    return axios.post('/projects', form, {
    headers: {
        "Content-Type": "multipart/form-data"
    }
})
}

