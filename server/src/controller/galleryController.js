const Gallery = require('../models/galleryModel.js');
const uploadOnCloudinary = require('../utils/cloudinary.js');


const Create = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: "Image is required" });
        }

        const imageUpload = await uploadOnCloudinary(req.file.buffer, `gallery/${Date.now()}-image`);

        const newGallery = new Gallery({
            name: req.body.name,
            category: req.body.category,
            image: imageUpload.secure_url,
        });

        const savedGallery = await newGallery.save();

        return res.status(201)
            .json({
                message: "Service created successfully",
                Gallery: savedGallery
            });

    } catch (error) {
        return res.json({
            success: 0,
            message: `try again. ${error.message}`
        })
    }
}


const GetGallery = async (req, res) => {
    try {
        const result = await Gallery.find();

        return res.json({
            result,
            success: 1,
            message: "Gallery data get successfully."
        })
    } catch (error) {
        return res.json({
            success: 0,
            message: `try again. ${error.message}`
        })
    }
}


const GetByIdGallery = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await Gallery.findById(id);

        return res.json({
            result,
            success: 1,
            message: "Gallery data get successfully."
        })
    } catch (error) {
        return res.json({
            success: 0,
            message: `try again. ${error.message}`
        })
    }
}


module.exports = { Create, GetGallery, GetByIdGallery }