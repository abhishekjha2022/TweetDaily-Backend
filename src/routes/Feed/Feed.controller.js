const { getFeed, addNewUser } = require("../../models/Feed/Feed.model");

const httpGetAllFeed = (req, res) => {
  return res.status(200).json(getFeed());
};

const httpAddNewUser = (req, res) => {
  const user = req.body;
  if (!user.name || !user.userName) {
    return res.status(400).json({
      error: "Please provide full data",
    });
  }
  try {
    return res.status(201).json(addNewUser(user));
  } catch (error) {
    return res.status(400).json({
      error: "Invalid data",
    });
  }
};
module.exports = {
  httpGetAllFeed,
  httpAddNewUser,
};
