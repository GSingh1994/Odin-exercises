const palindromes = function (str) {
    let regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
    var string = str.replace(regex, '');

    let result = string.split("").reverse().join("").toUpperCase().replace(/\s/g, '');


    if (string.toUpperCase().replace(/\s/g, '') === result) {
        return true
    } else {
        return false
    }
}

module.exports = palindromes






// console.log(result)
// palindromes('A car, a man, a maraca.')
// palindromes('racecar')



    // const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
    // let string = str.replace(regex, '').toUpperCase();
    // let result = string.split(' ').reverse().join('')
    // return result
    // // result = str.split(',')
    // // result = str.split('').reverse().join('');
    // // // return result
    // if (result === string) {
    //     return true
    // } else {
    //     return false
    // }