const Testimonial = require('../models/testimonialModel.js')

const Create = async (req, res) => {
    try {

        const newtestimonial = new Testimonial({
            name: req.body.name,
            description: req.body.description,
        });

        const savedtestimonial = await newtestimonial.save();

        return res.status(201)
            .json({
                message: "testimonial created successfully",
                success: 1,
                testimonial: savedtestimonial
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
        const id = req.params.id;
        const { name, description } = req.body;

        if (!id || !name || !description ) {
            return res.status(400).json({
                success: 0,
                message: "All fields are required"
            });
        }

        const updatedtestimonial = await Testimonial.findByIdAndUpdate(
            id, 
            { name, description}, 
            { new: true } 
        );

        if (!updatedtestimonial) {
            return res.status(404).json({
                success: 0,
                message: "testimonial not found"
            });
        }

        return res.status(200).json({
            success: 1,
            message: "testimonial updated successfully",
            testimonial: updatedtestimonial
        });

    } catch (error) {
        return res.status(500).json({
            success: 0,
            message: `Try again. ${error.message}`
        });
    }
};


const GetTestimonial = async (req, res) => {
    try {
        const result = await Testimonial.find();

        return res.json({
            result,
            success: 1,
            message: "testimonial data get successfully."
        })
    } catch (error) {
        return res.json({
            success: 0,
            message: `try again. ${error.message}`
        })
    }
}


const GetByIdTestimonial = async (req, res) => {
    try {
        const id = req.params.id
        const result = await Testimonial.findById(id);

        return res.json({
            result,
            success: 1,
            message: "testimonial get by id successfully."
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
        const result = await Testimonial.findOneAndDelete({_id:id});

        return res.json({
            result,
            success: 1,
            message: "testimonial delete successfully."
        })
    } catch (error) {
        return res.json({
            success: 0,
            message: `try again. ${error.message}`
        })
    }
}

module.exports = { Create, GetByIdTestimonial, GetTestimonial, DeleteById, Update }