const Service = require('../models/serviceModel.js');
const uploadOnCloudinary = require("../utils/cloudinary.js");

const Create = async (req, res) => {
    try {
        if (!req.files || !req.files.image || !req.files.subImage) {
            return res.status(400).json({ message: "Image and SubImage are required" });
        }

        const imageUpload = await uploadOnCloudinary(req.files.image[0].buffer, `services/${Date.now()}-image`);
        const subImageUpload = await uploadOnCloudinary(req.files.subImage[0].buffer, `services/${Date.now()}-subImage`);

        const newService = new Service({
            name: req.body.name,
            description: req.body.description,
            image: imageUpload.secure_url,
            subImage: subImageUpload.secure_url,
        });

        const savedService = await newService.save();

        return res.status(201)
            .json({
                message: "Service created successfully",
                service: savedService
            });
    } catch (error) {
        return res.status(500)
            .json({
                message: "Internal server error",
                error: error.message
            });
    }
}


const Data = async (req, res) => {
    try {
        const result = await Service.find();

        return res.json({
            result,
            success: 1,
            message: "Service data get successfully."
        })
    } catch (error) {
        return res.json({
            success: 0,
            message: `try again. ${error.message}`
        })
    }
}

module.exports = { Create }