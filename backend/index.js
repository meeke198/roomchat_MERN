const express = require("express");
const app = express();
require("dotenv").config(); //de doc duoc file env bang cach process.env.abc
const bodyParser = require("body-parser");
const auth = require("./routes/auth");
//body request tu front end gui xuong se chay qua cai code nay de parse ve dang json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/auth", auth); //

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
