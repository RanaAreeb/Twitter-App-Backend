const axios = require('axios');

const getTweetInteraction = async (tweetId) => {
    const url = `https://api.twitter.com/2/tweets/${tweetId}`;
    try {
        const response = await axios.get(url, {
            headers: { Authorization: `Bearer ${process.env.TWITTER_BEARER_TOKEN}` }
        });
        return response.data;
    } catch (error) {
        console.error('Twitter API error:', error);
        return null;
    }
};

module.exports = { getTweetInteraction };
