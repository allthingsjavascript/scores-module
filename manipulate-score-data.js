
const getMinMaxScore = function(scores) {
  if (Array.isArray(scores)) {
    return scores.reduce((acc, score) => [Math.min(acc[0], score), Math.max(acc[1], score)], [100, 0]);
  } else {
    return null;
    //throw new Error('not an array')
  }
};

module.exports = {
  getMinMaxScore: getMinMaxScore
};