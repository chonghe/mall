const mongoose = require("mongoose");

const userShema = new mongoose.Schema({
  userId: String,
  userName: String,
  userPwd: String,
  orderList: Array,
  cartList: [
    {
      productId: String,
      productName: String,
      salePrice: String,
      productImage: String,
      checked: String,
      productNum: String,
    },
  ],
  addressList: Array,
});

module.exports = mongoose.model("User", userShema);
