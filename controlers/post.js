const productService = require('../servises/productService')

module.exports = {

    addProduct:async (req, res) => {
        try {
            const result = await productService.addProductDetail(req.body)
            res.status(200).json(result);
        } catch(error) {
            res.status(500).json(`Add product content error ${error}`);
        }

    }
}