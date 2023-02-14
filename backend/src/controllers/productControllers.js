const productModel = require('../models/productModel');

const productControllers = {

    getProducts: async (req, res) => {

        let products;
        let error = null;

        try {

            products = await productModel.find();

            if (products.length <= 0) {

                return res.status(201).json({
                    success: true,
                    message: 'no hay productos',
                });
            }



        } catch (error) {
            return res.status(400).json({
                success: false,
                message: error,
                console: console.log(error)
            });
        }

        res.status(201).json({
            response: error ? 'ERROR' : products,
            success: error ? false : true,
            error: error,
        })
    },

    addProduct: async (req, res) => {

        if (req.user.role !== 'admin') {
            return res.status(401).send('Unauthorized');
        }

        let { name, image, description, category, stock, price } = req.body;

        if (!name || !image || !description || !category || !stock || !price) {

            return res.status(400).json({
                message: `Faltan datos por enviar`,
            });
        }

        const newProduct = await new productModel({
            name, image, description, category, stock, price
        })

        await newProduct.save();

        return res.status(201).json({
            success: true,
            message: `Producto agregado correctamente`,
            product: newProduct
        });

    },

    removeProduct: async (req, res) => {

        if (req.user.role !== 'admin') {
            return res.status(401).send('Unauthorized');
        }

        if (req.params.id === ':id') {
            return res.status(400).send('id invalido');
        }

        try {

            let product = await productModel.findOneAndDelete({ _id: req.params.id });

            if (product) {

                return res.status(201).json({
                    success: true,
                    message: `producto eliminado`,
                    product: product
                });

            } else {

                return res.status(400).send('id invalido');

            }

        } catch (error) {

            return res.status(400).send('id invalido');

        }


    },

    modifyProduct: async (req, res) => {

        if (req.user.role !== 'admin') {
            return res.status(401).send('Unauthorized');
        }

        if (req.params.id === ':id') {
            return res.status(400).send('id invalido');
        }

        try {

            let product = await productModel.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });

            return res.status(201).json({
                success: true,
                message: `Producto modificado correctamente`,
                product: product
            });

        } catch (error) {

            return res.status(400).json({
                success: false,
                error: 'informacion enviada invalida',
            });

        }

    },

    getOneProduct: async (req, res) => {

        try {

            let product = await productModel.findById(req.params.id);

            if (product) {
                return res.status(201).json({
                    success: true,
                    product: product
                });

            } else {
                return res.status(400).json({
                    success: false,
                    message: 'id invalido',
                });
            }

        } catch (error) {

            return res.status(400).json({
                success: false,
                error: 'usuario no encontrado',
            });
        }
    },

}

module.exports = productControllers;