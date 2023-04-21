const router = require('express').Router();
const constants = require('../constant/apiConstant')
const post = require('../controlers/post') 
const get = require('../controlers/get') 
const del = require('../controlers/del')


router.get(constants.PATH_GET_Product, (req, res) => {
    get.getAllProductDetails(req, res);
  });
router.post(constants.PATH_ADD_Product, (req, res) => {
    post.addProduct(req, res);
  });

router.delete(constants.PATH_DELETE_Product, (req, res) => {
    del.deleteProduct(req, res);
  });
  router.get(constants.PATH_GET_Product_WITH_ID, (req, res) => {
    get.getProductDetail(req, res);
  });

  module.exports = router;
