const ftoc = function (num) {
  num = (num - 32) * 0.5556;
  let result = Math.round(num * 10) / 10;
  return result
}

const ctof = function (num) {
  num = (num * 1.8) + 32;
  let result = Math.round(num * 10) / 10;
  return result
}

console.log(ftoc(100))

module.exports = {
  ftoc,
  ctof
}
