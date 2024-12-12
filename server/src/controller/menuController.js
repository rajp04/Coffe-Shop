const Menu = require('../models/menuModel.js')

const Create = async (req, res) => {
    try {

        const newMenu = new Menu({
            name: req.body.name,
            description: req.body.description,
            category: req.body.category,
            price: req.body.price,
        });

        const savedMenu = await newMenu.save();

        return res.status(201)
            .json({
                message: "Menu created successfully",
                Menu: savedMenu
            });

    } catch (error) {
        return res.json({
            success: 0,
            message: `try again. ${error.message}`
        })
    }
}


const GetMenu = async (req, res) => {
    try {
        const result = await Menu.find();

        return res.json({
            result,
            success: 1,
            message: "Menu data get successfully."
        })
    } catch (error) {
        return res.json({
            success: 0,
            message: `try again. ${error.message}`
        })
    }
}


const GetByIdMenu = async (req, res) => {
    try {
        const id = req.params.id
        const result = await Menu.findById(id);

        return res.json({
            result,
            success: 1,
            message: "Menu get by id successfully."
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
        const result = await Menu.findByIdAndDelete(id);

        return res.json({
            result,
            success: 1,
            message: "Menu delete successfully."
        })
    } catch (error) {
        return res.json({
            success: 0,
            message: `try again. ${error.message}`
        })
    }
}

module.exports = { Create, GetByIdMenu, GetMenu, DeleteById }