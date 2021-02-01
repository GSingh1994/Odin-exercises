const reverseString = function (str) {
    let test = str.split('');
    let test2;
    // console.log(test)
    test2 = test.reverse()
    // console.log(test2)
    let test3 = test2.join('')
    // console.log(test3)
    return test3;
}

reverseString('gagan')

module.exports = reverseString
