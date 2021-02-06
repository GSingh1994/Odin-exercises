
let fib = [];

const fibonacci = function (num) {
    if (Math.sign(+num) === -1) {
        return "OOPS"
    } else {
        fib[0] = 1;
        fib[1] = 1;
        for (i = 2; i < +num; i++) {
            fib[i] = fib[i - 2] + fib[i - 1]
        }
        return fib[+num - 1]
    }

}
module.exports = fibonacci





// [1,1,2,3,5,8,13...]
// fibonacci("4")

// console.log(+"-2")