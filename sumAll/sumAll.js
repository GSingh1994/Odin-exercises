let sumResult = 0;

const sumAll = function (n1, n2) {
    if (Math.sign(n1) === 1 && Math.sign(n2) === 1 && typeof n1 === 'number' && typeof n2 === 'number') {
        if (n2 > n1) {
            for (i = n1; i <= n2; i++) {
                sumResult += i;
            }
            return sumResult;
        } else {
            for (i = n1; i >= n2; i--) {
                sumResult += i;
            }
            return sumResult;
            // console.log(sumResult)
        }
    } else {
        return 'ERROR'
    }

}

// console.log(sumAll(-5, 2))
module.exports = sumAll
