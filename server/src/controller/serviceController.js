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
                service: savedService,
                success: 1
            });
    } catch (error) {
        return res.status(500)
            .json({
                message: "Internal server error",
                error: error.message
            });
    }
}


const Update = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description } = req.body;

        const service = await Service.findById(id);
        if (!service) {
            return res.status(404).json({ message: "Service not found" });
        }

        let imageUpload, subImageUpload;

        if (req.files?.image) {
            imageUpload = await uploadOnCloudinary(req.files.image[0].buffer, `services/${Date.now()}-image`);
        }

        if (req.files?.subImage) {
            subImageUpload = await uploadOnCloudinary(req.files.subImage[0].buffer, `services/${Date.now()}-subImage`);
        }

        service.name = name || service.name;
        service.description = description || service.description;
        if (imageUpload) service.image = imageUpload.secure_url;
        if (subImageUpload) service.subImage = subImageUpload.secure_url;

        const updatedService = await service.save();

        return res.status(200).json({
            message: "Service updated successfully",
            service: updatedService,
            success: 1,
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            error: error.message,
        });
    }
};


const GetService = async (req, res) => {
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


const GetByIdService = async (req, res) => {
    try {
        const id = req.params.id
        const result = await Service.findById(id);

        return res.json({
            result,
            success: 1,
            message: "Service get by id successfully."
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
        const result = await Service.findOneAndDelete({ _id: id });

        return res.json({
            result,
            success: 1,
            message: "Service delete successfully."
        })
    } catch (error) {
        return res.json({
            success: 0,
            message: `try again. ${error.message}`
        })
    }
}


module.exports = { Create, Update, GetService, GetByIdService, DeleteById }