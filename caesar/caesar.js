const caesar = function (str, num) {
    let strToChar = [];
    for (i = 0; i < str.length; i++) {
        if (str[i] !== ',' && str[i] !== '!' && str[i] !== ' ') {
            strToChar.push(str.charCodeAt(i) + num)
        } else {
            strToChar.push(str[i])
        }
    }

    let result = [];
    for (i = 0; i < strToChar.length; i++) {
        if (strToChar[i] !== ',' && strToChar[i] !== '!' && strToChar[i] !== ' ') {
            result.push(String.fromCharCode(strToChar[i]))
        } else {
            result.push(strToChar[i])
        }
    }

    // let result = String.fromCharCode(...strToChar);
    // return result
    // console.log(strToChar)
    return result.join('')
}

module.exports = caesar



// const caesar = function (str, num) {
//     let strToChar = [];
//     for (i = 0; i < str.length; i++) {
//         if (str[i] !== ',' && str[i] !== '!' && str[i] !== ' ') {
//             strToChar.push(str.charCodeAt(i) + num)
//         } else {
//             strToChar.push(str[i])
//         }
//     }

//     let result = [];
//     for (i = 0; i < strToChar.length; i++) {
//         if (strToChar[i] !== ',' && strToChar[i] !== '!' && strToChar[i] !== ' ') {
//             result.push(String.fromCharCode(strToChar[i]))
//         } else {
//             result.push(strToChar[i])
//         }
//     }

    // let result = String.fromCharCode(...strToChar);
    // return result
//     console.log(strToChar)
//     console.log(result.join(''))
// }

// caesar('Hello, World!', 5);