const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Goods = require("../models/goods");

//connect mongodb
//mongoose.connect("mongodb://168.138.40.98/maill");
mongoose.connect(
  "mongodb+srv://mongodb:ricekitchen@cluster0.aznp9.mongodb.net/mall?retryWrites=true&w=majority"
);

//   .then(() => {
//     console.log("success");
//   })
//   .catch((err) => {
//     console.log(err, "fail");
//   });

//监听
mongoose.connection.on("connected", function () {
  console.log("MongoDB connected success.");
});

mongoose.connection.on("error", function () {
  console.log("MongoDB connected fail.");
});

mongoose.connection.on("disconnected", function () {
  console.log("MongoDB connected disconnected.");
});

//get list
router.get("/", function (req, res, next) {
  // const page = parseInt(req.param("page"));
  // const pageSize = parseInt(req.param("pageSize"));
  // const sort = req.param("sort");
  // const skip = (page - 1) * pageSize;
  // const params = {};
  // const goodsModel = Goods.find(params).skip(skip).limit(pageSize);
  // goodsModel.sort({ salePrice: sort });
  Goods.find({}, function (err, doc) {
    if (err) {
      res.json({
        status: "1",
        msg: err.message,
      });
    } else {
      res.json({
        status: "0",
        msg: "",
        result: {
          count: doc.length,
          list: doc,
        },
      });
    }
  });
});

//add to cart
router.post("/addCart", function (req, res, next) {
  // const userId = req.body.userId;
  const userId = "100000077";
  const productId = req.body.productId;
  const User = require("../models/user");

  User.findOne(
    {
      userId: userId,
    },
    function (err, userDoc) {
      if (err) {
        res.json({
          status: "1",
          msg: err.message,
        });
      } else {
        if (userDoc) {
          const goodsItem = "";
          userDoc.cartList.forEach(function (item) {
            if (item.productId == productId) {
              goodsItem = item;
              // item.productNum++;
              item.productNum++;
            }
          });
          if (goodsItem) {
            userDoc.save(function (err2, doc2) {
              if (err2) {
                res.json({
                  status: "1",
                  msg: err2.message,
                });
              } else {
                res.json({
                  status: "0",
                  msg: "",
                  result: "suc",
                });
              }
            });
          } else {
            Goods.findOne({ productId: productId }, function (err1, doc) {
              if (err1) {
                res.json({
                  status: "1",
                  msg: err1.message,
                });
              } else {
                if (doc) {
                  doc.productNum = 1;
                  doc.checked = 1;
                  userDoc.cartList.push(doc);
                  console.log(userDoc.cartList);
                  userDoc.save(function (err2, doc2) {
                    if (err2) {
                      res.json({
                        status: "1",
                        msg: err2.message,
                      });
                    } else {
                      res.json({
                        status: "0",
                        msg: "",
                        result: "suc",
                      });
                    }
                  });
                }
              }
            });
          }
        }
      }
    }
  );
  router.post("/getDetail", function (req, res, next) {
    const productId = req.body.productId;
    //const productId = "201710003";
    Goods.findOne({ productId: productId }, function (err, doc) {
      if (err) {
        res.json({
          status: "1",
          msg: err.message,
        });
      } else {
        res.json({
          status: "0",
          msg: "",
          result: {
            // count: doc.length,
            list: doc,
          },
        });
      }
    });
  });
  // User.findOne({ userId: userId })
  //   .then((userDoc) => {
  //     console.log(userDoc);
  //     if (userDoc) {
  //       Goods.findOne({ productId: productId })
  //         .then((doc) => {
  //           //console.log(doc);
  //           doc.productNum = 1;
  //           doc.checked = 1;
  //           //console.log(doc);
  //           userDoc.cartList.push(doc);
  //           userDoc
  //             .save()
  //             .then((doc2) => {
  //               res.json({
  //                 status: "0",
  //                 msg: "",
  //                 result: "suc",
  //               });
  //             })
  //             .catch((err2) => {
  //               res.json({
  //                 status: "1",
  //                 msg: err.message,
  //               });
  //             });
  //         })
  //         .catch((err) => {
  //           res.json({
  //             status: "1",
  //             msg: err.message,
  //           });
  //         });
  //     }
  //   })
  //   .catch((err) => {
  //     res.json({
  //       status: "1",
  //       msg: err.message,
  //     });
  //   });
});

module.exports = router;
