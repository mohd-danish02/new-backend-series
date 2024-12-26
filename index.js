const dotenv = require("dotenv");
dotenv.config();
const express = require("express");

const app = express();

const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello Express from chai or code ");
});

app.listen(port, () => {
  console.log(`server is running on local host : ${port}`);
});
