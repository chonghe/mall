const express = require("express");
const app = express();
const router = express.Router();
const cors = require("cors");

const goodsData = require("../mock/goods.json");

app.use(cors());
router.get("/goods", function (req, res) {
  res.json(goodsData);
});

app.use(router);

app.listen(8080, () => {
  console.log("server running");
});
