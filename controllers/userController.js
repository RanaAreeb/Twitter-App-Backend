const User = require('../models/User');
const { getTweetInteraction } = require('../utils/twitterAPI');

// Login or register user
exports.loginUser = async (req, res) => {
    const { twitterId, username } = req.body;
    let user = await User.findOne({ twitterId });
    if (!user) {
        user = new User({ twitterId, username });
        await user.save();
    }
    res.json(user);
};

// Add points after valid interaction
exports.addPoints = async (req, res) => {
    const { userId, tweetId } = req.body;
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ msg: 'User not found' });

    const tweetData = await getTweetInteraction(tweetId);
    if (tweetData) {
        user.points += 10;  // Add 10 points for interaction
        user.interactions.push({ tweetId });
        await user.save();
        res.json({ points: user.points });
    } else {
        res.status(400).json({ msg: 'Invalid tweet interaction' });
    }
};
