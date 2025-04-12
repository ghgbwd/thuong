const { Products } = require("../models/product")

const createProductController = async (req, res) => {
    const { productName, categoryName, price, description } = req.body;
    try {
        const product = new Products({
            productName: productName,
            categoryName: categoryName,
            price: price,
            description: description ? description : "",
            createdAt: new Date(),
            updatedAt: new Date(),
        })
        await Products.create(product);
        res.status(201).json({
            message: "Tao thanh cong",
            product
        })
    } catch (error) {
        console.log("Error from server!", error);
        res.status(500).json({ message: "error fro server!" });
    }
}

module.exports = {
    createProductController: createProductController,
}