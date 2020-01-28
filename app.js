
const getMinMaxScore = function(scores) {
  if (Array.isArray(scores)) {
    return scores.reduce((acc, score) => [Math.min(acc[0], score), Math.max(acc[1], score)], [100, 0]);
  } else {
    return null;
  }
};

console.log(getMinMaxScore([90, -10, 110, 60, 40, 50, 0, 5]));