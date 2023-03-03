const express = require("express");
const { httpGetAllFeed } = require("./Feed.controller");
const FeedRouter = express.Router();

FeedRouter.get("/feed", httpGetAllFeed);

module.exports = FeedRouter;
