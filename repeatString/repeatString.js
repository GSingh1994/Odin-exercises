
const repeatString = function (str, num) {
    if (num == 0) {
        return ''
    } else if (Math.sign(num) === 1) {
        let test = str;
        for (i = 1; i < num; i++) {
            test = test + str;
        }
        return test;
    } else {
        return 'ERROR'
    }

}

console.log(repeatString('hey', -1));



module.exports = repeatString
