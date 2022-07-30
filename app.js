const express = require("express");
const app = express();

const userRoues = require("./src/routes/user.routes");
app.use("/user",userRoues)

const port = 3000;
app.listen(port, () => {});
