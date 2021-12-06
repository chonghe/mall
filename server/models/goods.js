const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  productId: { type: String },
  productName: String,
  salePrice: Number,
  productImage: String,
  productUrl: String,
  productNum: Number,
  checked: String,
});

module.exports = mongoose.model("Good", productSchema);
