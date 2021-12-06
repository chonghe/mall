const express = require("express");
const router = express.Router();

const User = require("../models/user");

router.post("/login", function (req, res, next) {
  // console.log(req.body);
  User.findOne(
    {
      userName: req.body.userName,
      userPwd: req.body.userPwd,
    },
    function (err, doc) {
      if (err) {
        res.json({
          status: "1",
          msg: err.message,
        });
      } else {
        if (doc) {
          res.cookie("userId", doc.userId, {
            path: "/",
            maxAge: 1000 * 60 * 60,
          });
          // req.session.user = doc;
          console.log(req.cookies);
          res.json({
            status: "0",
            msg: "",
            result: {
              userName: doc.userName,
              cartList: doc.cartList,
            },
          });
        }
      }
    }
  );
});

// logout
router.post("/logout", function (req, res, next) {
  res.cookie("userId", "", {
    path: "/",
    maxAge: -1,
  });
  res.json({
    status: "0",
    msg: "",
    result: "",
  });
});

router.get("/cartList", function (req, res, next) {
  const userId = parseInt(req.param("userId"));
  User.findOne({ userId: userId }, function (err, doc) {
    if (err) {
      res.json({
        status: "1",
        msg: err.message,
        result: "",
      });
    } else {
      if (doc) {
        res.json({
          status: "0",
          msg: "",
          result: doc.cartList,
        });
      }
    }
  });
});

router.post("/cartDel", function (req, res, next) {
  var userId = req.body.userId,
    productId = req.body.productId;
  User.update(
    {
      userId: userId,
    },
    {
      $pull: {
        cartList: {
          productId: productId,
        },
      },
    },
    function (err, doc) {
      if (err) {
        res.json({
          status: "1",
          msg: err.message,
          result: "",
        });
      } else {
        res.json({
          status: "0",
          msg: "",
          result: "suc",
        });
      }
    }
  );
});

//修改商品数量
router.post("/cartEdit", function (req, res, next) {
  const userId = "100000077";
  const productId = req.body.productId;
  const productNum = req.body.productNum;
  User.update(
    { userId: userId, "cartList.productId": productId },
    {
      "cartList.$.productNum": productNum,
    },
    function (err, doc) {
      if (err) {
        res.json({
          status: "1",
          msg: err.message,
          result: "",
        });
      } else {
        res.json({
          status: "0",
          msg: "",
          result: "suc",
        });
      }
    }
  );
});
module.exports = router;
