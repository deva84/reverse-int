module.exports = function reverse (n) {
  let reversedNum = Number(String(Math.abs(n)).split('').reverse().join(''));
  
  return reversedNum;
}
