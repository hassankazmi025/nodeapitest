const express = require("express");
const router = express.Router();

router
  .route("/")
  .get((req, res, next) => {
    res.send("get all api");
  })
  .post((req, res, next) => {
    res.send("create api");
  });
router
  .route("/:id")
  .get((req, res, next) => {
    res.send("get single api");
  })
  .patch((req, res, next) => {
    res.send("update api ");
  })
  .delete((req, res, next) => {
    res.send("delete api ");
  });

module.exports = router;
