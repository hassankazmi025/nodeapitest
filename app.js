const express = require("express");
const app = express();

const userRoues = require("./src/routes/user.routes");

app.use(express.json());

app.use("/user", userRoues);

// const lap

const port = 3000;
app.listen(port, () => {});
