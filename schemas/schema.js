
const { MongoClient } = require("mongodb");
const mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
    name: String,
    rate: Number,
    mrp: Number,
    proID: Number
});

const Product = mongoose.model("Product", productSchema);
module.exports.productSchema