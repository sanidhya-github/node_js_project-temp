
const { Timestamp, ObjectId } = require("bson");
const moment = require("moment");
const { MongoClient } = require("mongodb");
const { productSchema } = require("../schemas/schema")
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/product')
    .then(() => console.log('Connected!'));


const Product = mongoose.model("Product", productSchema);


module.exports.addProductDetail = async (requestBody, res) => {

    console.log("add-product: ", requestBody);
    let name = requestBody.Name;
    let rate = requestBody.rate;
    let mrp = requestBody.mrp;
    let proID = '';
    var myData = new Product({ name, rate, mrp });
    myData.save()
        .then(item => {
            res.send("item saved to database");
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
}



module.exports.deleteProductDetail = async (req, res) => {
    // const Id = req.body.id

    await Product.deleteOne({ _id: '643fd8b96c5cf0ec7765ec50' })
}

module.exports.getAllProduct = async (req, res) => {
    const allProducts = await Product.find({});
    res.send({ allProducts })
}
module.exports.getProductById = async (req, res) => {

}


