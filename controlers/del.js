const productService = require('../servises/productService')

module.exports = {

    deleteProduct:async (req, res) => {
        try {
            const result = await productService.deleteProductDetail(req.body)
            res.status(200).json(result);
        } catch(error) {
            res.status(500).json(`delete product content error ${error}`);
        }

    }
}