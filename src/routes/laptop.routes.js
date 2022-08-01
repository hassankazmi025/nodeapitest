const express = require("express");
const router = express.Router();

const laptops = [
  {
    id: "1",
    naame: "hp",
    Ram: "8gb",
    price: "40000",
  },
  {
    id: "2",
    naame: "dell",
    Ram: "8gb",
    price: "40000",
  },
  {
    id: "3",
    naame: "mac",
    Ram: "8gb",
    price: "80000",
  },
];

router.route("/").get((req, res, next) => {
  res.send(laptops);
});


module.exports = router;