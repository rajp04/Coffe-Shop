const Blog = require('../models/blogModel.js');
const uploadOnCloudinary = require('../utils/cloudinary.js');


const Create = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: "No file uploaded" });
        }

        const imageUpload = await uploadOnCloudinary(req.file.buffer, `blog/${Date.now()}-image`);

        const newBlog = new Blog({
            title: req.body.title,
            description: req.body.description,
            category: req.body.category,
            image: imageUpload.secure_url,
        });

        const savedBlog = await newBlog.save();

        return res.status(201)
            .json({
                message: "Blog created successfully",
                Blog: savedBlog
            });

    } catch (error) {
        return res.json({
            success: 0,
            message: `try again. ${error.message}`
        })
    }
}


const GetBlog = async (req, res) => {
    try {
        const result = await Blog.find();

        return res.json({
            result,
            success: 1,
            message: "Blog data get successfully."
        })
    } catch (error) {
        return res.json({
            success: 0,
            message: `try again. ${error.message}`
        })
    }
}


const GetByIdBlog = async (req, res) => {
    try {
        const id = req.params.id
        const result = await Blog.findById(id);

        return res.json({
            result,
            success: 1,
            message: "Blog get by id successfully."
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
        const result = await Blog.findByIdAndDelete(id);

        return res.json({
            result,
            success: 1,
            message: "Blog delete successfully."
        })
    } catch (error) {
        return res.json({
            success: 0,
            message: `try again. ${error.message}`
        })
    }
}


const FilterByTitle = async (req, res) => {
    try {
        const { title } = req.query;

        if (!title) {
            return res.status(400).json({ message: "Title query parameter is required" });
        }

        const blogs = await Blog.find({ title: { $regex: title, $options: "i" } });

        return res.status(200).json({
            message: "Blogs fetched successfully",
            success: 1,
            blogs,
        });
    } catch (error) {
        console.error("Error in FilterByTitle:", error.message);
        return res.status(500).json({
            success: 0,
            message: `Something went wrong. ${error.message}`,
        });
    }
};




module.exports = { Create, GetBlog, GetByIdBlog, DeleteById, FilterByTitle }