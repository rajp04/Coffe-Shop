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
                message: "Gallery created successfully",
                Gallery: savedGallery,
                success: 1
            });

    } catch (error) {
        return res.json({
            success: 0,
            message: `try again. ${error.message}`
        })
    }
}


const Update = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, category } = req.body;

        const gallery = await Gallery.findById(id);
        if (!gallery) {
            return res.status(404).json({ message: "Gallery not found" });
        }

        let imageUpload;

        if (req.file) {
            imageUpload = await uploadOnCloudinary(req.file.buffer, `gallery/${Date.now()}-image`);
        }

        gallery.name = name || gallery.name;
        gallery.category = category || gallery.category;
        if (imageUpload) gallery.image = imageUpload.secure_url;

        const updatedGallery = await gallery.save();

        return res.status(200).json({
            message: "Gallery updated successfully",
            gallery: updatedGallery,
            success: 1,
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            error: error.message,
        });
    }
};


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


const DeleteById = async (req, res) => {
    try {
        const id = req.params.id
        const result = await Gallery.findOneAndDelete({ _id: id });

        return res.json({
            result,
            success: 1,
            message: "Gallery delete successfully."
        })
    } catch (error) {
        return res.json({
            success: 0,
            message: `try again. ${error.message}`
        })
    }
}


module.exports = { Create, Update, GetGallery, GetByIdGallery, DeleteById }