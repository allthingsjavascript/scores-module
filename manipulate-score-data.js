//Functions
const computeTotal = function(scores) {
  return scores.reduce((sum, score) => sum + score, 0);
};

const computeNonZeroAverage = function(scores) {
  return computeTotal(scores) / scores.reduce((cnt, score) => (score !== 0) ? cnt + 1 : cnt, 0);
};

const getMinMaxScore = function(scores) {
  if (Array.isArray(scores)) {
    return scores.reduce((acc, score) => [Math.min(acc[0], score), Math.max(acc[1], score)], [100, 0]);
  } else {
    return null;
    //throw new Error('not an array')
  }
};
//Export
module.exports = {
  computeTotal: computeTotal,
  computeNonZeroAverage: computeNonZeroAverage,
  getMinMaxScore: getMinMaxScore
};