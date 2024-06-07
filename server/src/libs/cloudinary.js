import {v2 as cloudinary} from 'cloudinary'

cloudinary.config({
    cloud_name: "deky8xc8w",
    api_key: "544569372693139",
    api_secret: "C7bShYcaXUAB5K8w8aUhybOPMh0"
})

export const uploadImage = async filePath => {
    return await cloudinary.uploader.upload(filePath, {
        folder: 'cover',
    })
}

export const deleteImage = async id => {
   return await cloudinary.uploader.destroy(id)
}