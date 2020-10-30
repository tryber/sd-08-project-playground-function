module.exports.greaterValueInArray = function (arr) {
  return arr.reduce(function (a, b) {
    return Math.max(a, b);
  });
};

module.exports.countValueInArray = function (value, arr) {
  return arr.filter((x) => x === value).length;
};
