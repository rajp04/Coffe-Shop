const Specialities = require('../models/specialitiesModel.js');
const uploadOnCloudinary = require('../utils/cloudinary.js');

// Create speciality
const Create = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: "Image is required" });
        }

        const imageUpload = await uploadOnCloudinary(req.file.buffer, `specialities/${Date.now()}-image`);

        const newSpeciality = new Specialities({
            name: req.body.name,
            description: req.body.description,
            image: imageUpload.secure_url,
        });

        const savedSpeciality = await newSpeciality.save();

        return res.status(201).json({
            message: "Speciality created successfully",
            speciality: savedSpeciality,
            success: 1
        });

    } catch (error) {
        return res.json({
            success: 0,
            message: `Try again. ${error.message}`
        });
    }
}

// Update speciality
const Update = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description } = req.body;

        const speciality = await Specialities.findById(id);
        if (!speciality) {
            return res.status(404).json({ message: "Speciality not found" });
        }

        let imageUpload;

        if (req.file) {
            imageUpload = await uploadOnCloudinary(req.file.buffer, `specialities/${Date.now()}-image`);
        }

        speciality.name = name || speciality.name;
        speciality.description = description || speciality.description;
        if (imageUpload) speciality.image = imageUpload.secure_url;

        const updatedSpeciality = await speciality.save();

        return res.status(200).json({
            message: "Speciality updated successfully",
            speciality: updatedSpeciality,
            success: 1
        });

    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            error: error.message,
        });
    }
};

// Get all specialities
const GetSpecialities = async (req, res) => {
    try {
        const result = await Specialities.find();

        return res.json({
            result,
            success: 1,
            message: "Specialities data fetched successfully."
        });

    } catch (error) {
        return res.json({
            success: 0,
            message: `Try again. ${error.message}`
        });
    }
};

// Get speciality by ID
const GetByIdSpeciality = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await Specialities.findById(id);

        if (!result) {
            return res.status(404).json({ message: "Speciality not found" });
        }

        return res.json({
            result,
            success: 1,
            message: "Speciality data fetched successfully."
        });

    } catch (error) {
        return res.json({
            success: 0,
            message: `Try again. ${error.message}`
        });
    }
};

// Delete speciality by ID
const DeleteById = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await Specialities.findOneAndDelete({ _id: id });

        if (!result) {
            return res.status(404).json({ message: "Speciality not found" });
        }

        return res.json({
            result,
            success: 1,
            message: "Speciality deleted successfully."
        });

    } catch (error) {
        return res.json({
            success: 0,
            message: `Try again. ${error.message}`
        });
    }
};

module.exports = { Create, Update, GetSpecialities, GetByIdSpeciality, DeleteById };