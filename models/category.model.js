const mongoose = require("mongoose");

const schema = mongoose.Schema({
  name: String,
});

const categoryModel = mongoose.model("category", schema);

module.exports = categoryModel;
