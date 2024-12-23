const Banner = require('../models/bannerModel.js');
const uploadOnCloudinary = require('../utils/cloudinary.js');


const Create = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: "No file uploaded" });
        }

        const imageUpload = await uploadOnCloudinary(req.file.buffer, `banner/${Date.now()}-image`);

        const newBanner = new Banner({
            title: req.body.title,
            description: req.body.description,
            message: req.body.message,
            image: imageUpload.secure_url,
        });

        const savedBanner = await newBanner.save();

        return res.status(201)
            .json({
                message: "Banner created successfully",
                Banner: savedBanner,
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
        const { title, description, message } = req.body;

        const banner = await Banner.findById(id);
        if (!banner) {
            return res.status(404).json({ message: "banner not found" });
        }

        let imageUpload;
        if (req.file) {
            imageUpload = await uploadOnCloudinary(req.file.buffer, `banner/${Date.now()}-image`);
        }

        banner.title = title || banner.title;
        banner.description = description || banner.description;
        banner.message = message || banner.message;
        if (imageUpload) banner.image = imageUpload.secure_url;

        const updatedBanner = await banner.save();

        return res.status(200).json({
            message: "Banner updated successfully",
            banner: updatedBanner,
            success: 1,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Internal server error",
            error: error.message,
        });
    }
};


const GetBanner = async (req, res) => {
    try {
        const result = await Banner.find();

        return res.json({
            result,
            success: 1,
            message: "Banner data get successfully."
        })
    } catch (error) {
        return res.json({
            success: 0,
            message: `try again. ${error.message}`
        })
    }
}


module.exports = { Create, Update, GetBanner }