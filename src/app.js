const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const FeedRouter = require("./routes/Feed/Feed.router");

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("combined"));
app.use(FeedRouter);

module.exports = app;
