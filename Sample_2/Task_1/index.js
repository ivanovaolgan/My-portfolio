/**
 * @param {String} tweet
 * @returns {String[]}
 */
module.exports = function (tweet) {
	return tweet.split(' ').filter(hashtag => hashtag.startsWith('#')==true).map(element => element.slice(1));
};
