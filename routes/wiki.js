const router = require("express").Router();
const layout = require("../views/layout");
const addPage = require("../views/addPage");

router.get("/", (req, res, next) => {
  res.send(layout("test here"));
});

router.post("/", (req, res, next) => {
  res.send("test post");
});

router.get("/add", (req, res, next) => {
  res.send(addPage());
});

module.exports = router;
