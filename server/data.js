const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://mongodb:ricekitchen@cluster0.aznp9.mongodb.net/mall?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("success");
  })
  .catch((err) => {
    console.log(err, "fail");
  });

/**
 * 创建数据库
 */

// 第一步 设定集合规则
const courseSchema = new mongoose.Schema({
  productId: { type: String },
  productName: String,
  salePrice: Number,
  productImage: String,
  productUrl: String,
});

//第二步 创建集合并应用规则
//返回值Course是一个构造函数
//参数一：集合名称  参数二：集合规则
const Course = mongoose.model("Good", courseSchema); // 数据库内的表名是 courses

/**
 *  第二种插入数据方法
 *  参数一
 *  参数二
 */
// Course.create(
//   {
//     name: "Java",
//     author: "Lily",
//     isPublished: false,
//   },
//   (err, result) => {
//     console.log(err);
//     console.log(result);
//   }
// );
//promise方式

Course.create({
  productId: "201710003",
  productName: "Balance car",
  salePrice: 1999,
  productImage: "pingheng.jpg",
  productUrl: "",
}).then((doc) => console.log(doc));

Course.create({
  productId: "201710004",
  productName: "headphones-3",
  salePrice: 80,
  productImage: "2.jpg",
  productUrl: "",
}).then((doc) => console.log(doc));
Course.create({
  productId: "201710005",
  productName: "Mi Laptop",
  salePrice: 3549,
  productImage: "note.jpg",
  productUrl: "",
}).then((doc) => console.log(doc));
Course.create({
  productId: "201710006",
  productName: "Mi 10",
  salePrice: 2499,
  productImage: "mi6.jpg",
  productUrl: "",
}).then((doc) => console.log(doc));
Course.create({
  productId: "201710002",
  productName: "Patch panel",
  salePrice: 59,
  productImage: "6.jpg",
  productUrl: "",
}).then((doc) => console.log(doc));
Course.create({
  productId: "201710007",
  productName: "Selfie stick",
  salePrice: 39,
  productImage: "zipai.jpg",
  productUrl: "",
}).then((doc) => console.log(doc));
Course.create({
  productId: "201710008",
  productName: "Water Purifier",
  salePrice: 1999,
  productImage: "8.jpg",
  productUrl: "",
}).then((doc) => console.log(doc));
Course.create({
  productId: "201710009",
  productName: "Rice cooker",
  salePrice: 999,
  productImage: "9.jpg",
  productUrl: "",
}).then((doc) => console.log(doc));
Course.create({
  productId: "201710010",
  productName: "Mi TV",
  salePrice: 2099,
  productImage: "10.jpg",
  productUrl: "",
}).then((doc) => console.log(doc));
Course.create({
  productId: "201710011",
  productName: "Ear1000",
  salePrice: 1000,
  productImage: "11.jpg",
  productUrl: "",
}).then((doc) => console.log(doc));
Course.create({
  productId: "201710012",
  productName: "Ear1100",
  salePrice: 1100,
  productImage: "12.jpg",
  productUrl: "",
}).then((doc) => console.log(doc));
Course.create({
  productId: "201710013",
  productName: "Ear2000",
  salePrice: 2000,
  productImage: "13.jpg",
  productUrl: "",
}).then((doc) => console.log(doc));
Course.create({
  productId: "201710014",
  productName: "Ear1600",
  salePrice: 1600,
  productImage: "14.jpg",
  productUrl: "",
}).then((doc) => console.log(doc));
Course.create({
  productId: "201710015",
  productName: "Ear1200",
  salePrice: 1200,
  productImage: "15.jpg",
  productUrl: "",
}).then((doc) => console.log(doc));
Course.create({
  productId: "201710016",
  productName: "Ear700",
  salePrice: 700,
  productImage: "16.jpg",
  productUrl: "",
}).then((doc) => console.log(doc));
Course.create({
  productId: "201710017",
  productName: "Bluetooth Speaker",
  salePrice: 129,
  productImage: "1.jpg",
  productUrl: "",
}).then((doc) => console.log(doc));
Course.create({
  productId: "201710018",
  productName: "Smart camera",
  salePrice: 389,
  productImage: "photo.jpg",
  productUrl: "",
}).then((doc) => console.log(doc));

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

mongoose
  .model("User", userShema)
  .create({
    userId: "100000077",
    userName: "admin",
    userPwd: "123456",
    orderList: [],
    cartList: [
      {
        productImage: "1.jpg",
        salePrice: "129",
        productName: "Bluetooth Speaker",
        productId: "201710017",
        productNum: "6",
        checked: "0",
      },
      {
        productImage: "mi6.jpg",
        salePrice: "2499",
        productName: "Mi 10",
        productId: "201710006",
        productNum: "6",
        checked: "0",
      },
      {
        productImage: "9.jpg",
        salePrice: "999",
        productName: "Rice cooker",
        productId: "201710009",
        productNum: "1",
        checked: "1",
      },
      {
        productImage: "note.jpg",
        salePrice: "3549",
        productName: "Mi Laptop",
        productId: "201710005",
        productNum: "1",
        checked: "1",
      },
      {
        productImage: "6.jpg",
        salePrice: "59",
        productName: "Patch panel",
        productId: "201710002",
        productNum: "1",
      },
    ],
    addressList: [],
  })
  .then((doc) => console.log(doc));
