const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { httpGetAllFeed } = require("./routes/Feed/Feed.controller");

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("combined"));
app.use(httpGetAllFeed);

module.exports = app;
