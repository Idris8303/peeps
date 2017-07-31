
const nums = [3, 6, 12, 18, 24, 30];

function underN(n) {
  const collection = [];
  for (let i = 0; i < nums.length; i++) {
    if(nums[i] <= n) {
      collection.push(nums[i]);
    }
  }
  return collection;
}

module.exports = {
  underN: underN
}
