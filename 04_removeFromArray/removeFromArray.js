const removeFromArray = function(array, ...valuesToRemove) {
  return Array.from(array).filter(value => !valuesToRemove.includes(value));
};

// Do not edit below this line
module.exports = removeFromArray;
