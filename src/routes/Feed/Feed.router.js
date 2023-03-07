const express = require("express");
const { httpGetAllFeed, httpAddNewUser } = require("./Feed.controller");
const FeedRouter = express.Router();

FeedRouter.get("/feed", httpGetAllFeed);
FeedRouter.post("/feed/newuser", httpAddNewUser);

module.exports = FeedRouter;
