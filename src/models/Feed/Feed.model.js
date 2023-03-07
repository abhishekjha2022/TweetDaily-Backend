let Feed = new Map();
let newUserId = 1;

let FeedData = {
  userId: 1,
  name: "Abhishek",
  userName: "abhishek",
  profileDescription: "Full Stack Mobile Engineer",
  profileImage:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlgsycxGQ33pTbY0962te9tYTEHQofrfXEOoigLp5fkuwQ1t-Itnj04izxTAS2V9unk-4&usqp=CAU",
  coverImage:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlgsycxGQ33pTbY0962te9tYTEHQofrfXEOoigLp5fkuwQ1t-Itnj04izxTAS2V9unk-4&usqp=CAU",
  location: "Kathmandu, Nepal",
  accountCreationDate: "March 5, 2023",
  myTweets: [
    {
      tweetId: 1,
      content: "This is my First tweet retrieve from backend",
      tweetDate: "March 5, 2023",
      impression: "555",
      likesBy: [
        {
          userId: 2,
        },
        {
          userId: 3,
        },
      ],
      commentsBy: [
        {
          userId: 2,
          comment: "Really nice tweet",
        },
        {
          userId: 3,
          comment: "I loved the application you built",
        },
      ],
    },
  ],
  myFollowers: [
    {
      userId: 2,
    },
    {
      userId: 3,
    },
  ],
  followedByMe: [
    {
      userId: 2,
    },
    {
      userId: 3,
    },
  ],
};

Feed.set(FeedData.userId, FeedData);
const getFeed = () => {
  return Array.from(Feed.values());
};

function addNewUser(FeedData) {
  newUserId++;
  Feed.set(
    newUserId,
    Object.assign(FeedData, {
      userId: newUserId,
    })
  );
}

module.exports = {
  getFeed,
  addNewUser,
};
