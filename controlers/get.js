const productService = require('../servises/productService')


module.exports = {

    getAllProductDetails:async (req, res) => {
        try {
            const result = await productService.getAllProduct(req.body, res)
            res.status(200).json(result);
        } catch(error) {
            res.status(500).json(`Get product content error ${error}`);
        }

    },

    getProductDetail:async (req, res) => {
        try {
            const result = await productService.getProductById(req.body, res)
            res.status(200).json(result);
        } catch(error) {
            res.status(500).json(`Get product content error ${error}`);
        }

    }
}