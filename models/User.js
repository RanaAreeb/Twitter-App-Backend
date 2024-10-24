const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    twitterId: { type: String, required: true, unique: true },
    username: { type: String, required: true },
    points: { type: Number, default: 0 },
    interactions: [{ tweetId: String }]
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
