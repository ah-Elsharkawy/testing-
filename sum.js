let sum = (...n) => n.reduce((pre, curr) => pre+curr, 0);

let result = sum(1);
console.log(result);
console.log(typeof(result))
module.exports = sum;