const leapYears = function (num) {
    if (num % 4 === 0 && num % 100 !== 0 || num % 400 === 0) {
        return true
    } else {
        return false
    }
}
// console.log(leapYears(700))

module.exports = leapYears
