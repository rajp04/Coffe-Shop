const Team = require('../models/teamModel.js');
const uploadOnCloudinary = require('../utils/cloudinary.js');

const Create = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: "Image is required" });
        }

        const imageUpload = await uploadOnCloudinary(req.file.buffer, `team/${Date.now()}-image`);

        const newTeam = new Team({
            name: req.body.name,
            expertise: req.body.expertise,
            facebook: req.body.facebook,
            instagram: req.body.instagram,
            twitter: req.body.twitter,
            linkedin: req.body.linkedin,
            image: imageUpload.secure_url,
        });

        const savedTeam = await newTeam.save();

        return res.status(201).json({
            message: "Team member created successfully",
            team: savedTeam,
            success: 1
        });

    } catch (error) {
        return res.json({
            success: 0,
            message: `try again. ${error.message}`
        });
    }
};

const Update = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, expertise, facebook, instagram, twitter, linkedin } = req.body;

        const teamMember = await Team.findById(id);
        if (!teamMember) {
            return res.status(404).json({ message: "Team member not found" });
        }

        let imageUpload;

        if (req.file) {
            imageUpload = await uploadOnCloudinary(req.file.buffer, `team/${Date.now()}-image`);
        }

        teamMember.name = name || teamMember.name;
        teamMember.expertise = expertise || teamMember.expertise;
        teamMember.facebook = facebook || teamMember.facebook;
        teamMember.instagram = instagram || teamMember.instagram;
        teamMember.twitter = twitter || teamMember.twitter;
        teamMember.linkedin = linkedin || teamMember.linkedin;
        if (imageUpload) teamMember.image = imageUpload.secure_url;

        const updatedTeamMember = await teamMember.save();

        return res.status(200).json({
            message: "Team member updated successfully",
            team: updatedTeamMember,
            success: 1,
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            error: error.message,
        });
    }
};

const GetTeam = async (req, res) => {
    try {
        const result = await Team.find();

        return res.json({
            result,
            success: 1,
            message: "Team data retrieved successfully."
        });
    } catch (error) {
        return res.json({
            success: 0,
            message: `try again. ${error.message}`
        });
    }
};

const GetByIdTeam = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await Team.findById(id);

        return res.json({
            result,
            success: 1,
            message: "Team member data retrieved successfully."
        });
    } catch (error) {
        return res.json({
            success: 0,
            message: `try again. ${error.message}`
        });
    }
};

const DeleteById = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await Team.findOneAndDelete({ _id: id });

        return res.json({
            result,
            success: 1,
            message: "Team member deleted successfully."
        });
    } catch (error) {
        return res.json({
            success: 0,
            message: `try again. ${error.message}`
        });
    }
};

module.exports = { Create, Update, GetTeam, GetByIdTeam, DeleteById };