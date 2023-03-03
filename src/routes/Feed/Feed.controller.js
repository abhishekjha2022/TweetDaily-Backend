const { FeedData } = require("../../models/Feed/Feed.model");

const httpGetAllFeed = (req, res) => {
  return res.status(200).json(FeedData);
};

module.exports = {
  httpGetAllFeed,
};
