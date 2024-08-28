const { printSchema } = require("graphql");
const mongoose = require("mongoose");

const schema = mongoose.Schema({
  name: String,
  description: String,
  price: Number

});

const productModel = mongoose.model("product", schema);

module.exports = productModel;
