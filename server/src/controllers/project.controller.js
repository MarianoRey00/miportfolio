import Project from '../models/project.model.js'
import {uploadImage} from '../libs/cloudinary.js'
import fs from 'fs-extra'

export const getProjects = async(req, res) => {
    const projects = await Project.find({
        user: req.user.id
    }).populate('user')
    res.json(projects)
}

export const createProject = async(req, res) => {
    const {title, description} = req.body
    let image;
    // let gallery = []

    // if(req.files?.gallery){
    //     const files = Array.isArray(req.files.gallery) ? req.files.gallery : [req.files.gallery];
    //     for (const file of files) {
    //        const res = await uploadImage(file.tempFilePath);
    //        const image = {
    //           url: res.secure_url,
    //           public_id: res.public_id,
    //        };
    //        await fs.remove(file.tempFilePath);
    //        gallery.push(image);
    //     }
    // }

    if(req.files?.image){
        const result = await uploadImage(req.files.image.tempFilePath)
        image = {
         url: result.secure_url,
         public_id: result.public_id,
        }
        await fs.remove(req.files.image.tempFilePath)
        
     }

    const newProject = new Project({
        title,
        description,
        image,
        user: req.user.id
    })
    const createdProject = await newProject.save()
    res.json(createdProject)
}

export const getProject = async(req, res) => {
    const project = await Project.findById(req.params.id)
    if(!project){
        return res.status(404).json({message: "Project no found"})
    }
    res.json(project)
}

export const deleteProject = async(req, res) => {
    const project = await Project.findByIdAndDelete(req.params.id)
    if(!project){
        return res.status(404).json({message: "Project doesn't exist"})
    }
    return res.sendStatus(204)
}

export const editProject = async(req, res) => {

    try {
       if (req.files?.image) {
          const result = await uploadImage(req.files.image.tempFilePath);
          const newImage = {
             url: result.secure_url,
             public_id: result.public_id,
          };
          await fs.remove(req.files.image.tempFilePath);
          req.body.image = newImage;

          const project = await Project.findByIdAndUpdate(req.params.id, req.body, {new: true})
        //   if(!project){
        //       return res.status(404).json({message: "Project no found"})
        //   }
          res.json(project)

       } } catch (error) {
        return res.status(500).json({ message: error.message });
     }

}
