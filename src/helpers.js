module.exports.greaterValueInArray = function (arr) {
  return arr.reduce(function (a, b) {
    return Math.max(a, b);
  });
};

module.exports.countValueInArray = function (value, arr) {
  return arr.filter((x) => x === value).length;
};

module.exports.encodeText = function (text) {
  return text
    .split("a")
    .join("1")
    .split("e")
    .join("2")
    .split("i")
    .join("3")
    .split("o")
    .join("4")
    .split("u")
    .join("5");
};

module.exports.decodeText = function (text) {
  return text
    .split("1")
    .join("a")
    .split("2")
    .join("e")
    .split("3")
    .join("i")
    .split("4")
    .join("o")
    .split("5")
    .join("u");
};

module.exports.techListFactory = function (list, name) {
  const result = [];
  list.sort().forEach((item) => {
    result.push({ tech: item, name });
  });
  return result;
};
