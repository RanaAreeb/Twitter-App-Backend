const mongoose = require('mongoose');

const tweetSchema = mongoose.Schema({
    tweetId: { type: String, required: true },
    likes: { type: Number, default: 0 },
    retweets: { type: Number, default: 0 },
    comments: { type: Number, default: 0 }
});

module.exports = mongoose.model('Tweet', tweetSchema);
