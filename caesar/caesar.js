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
//     return result.join('')
// }

// module.exports = caesar


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
        if (typeof strToChar[i] === "number") {
            if (strToChar[i] > 64 && strToChar[i] < 91) {
                result.push(String.fromCharCode(strToChar[i]))
            } else if (strToChar[i] > 96 && strToChar[i] < 123) {
                result.push(String.fromCharCode(strToChar[i]))
            } else if ((Math.sign(num) === 1) && (num < 52)) {
                strToChar[i] = strToChar[i] - 26;
                result.push(String.fromCharCode(strToChar[i]))
            } else if ((Math.sign(num) === -1) && (num < 0)) {
                strToChar[i] = strToChar[i] + 26;
                result.push(String.fromCharCode(strToChar[i]))
            } else {
                strToChar[i] = strToChar[i] - 78;
                result.push(String.fromCharCode(strToChar[i]))
            }
        } else {
            result.push(strToChar[i])
        }
    }

    // console.log(strToChar)
    console.log(result.join(""))
}

caesar('Hello, World!', 75);
caesar('Hello, World!', -29)
caesar('Hello, World!', 5);
caesar('Mjqqt, Btwqi!', -5);
// 'Ebiil, Tloia!'






// const caesar = function (str, num) {
//     let strToChar = [];
//     for (i = 0; i < str.length; i++) {
//         
//     }

//     let result = [];
//     for (i = 0; i < strToChar.length; i++) {
//         if (strToChar[i] !== ',' && strToChar[i] !== '!' && strToChar[i] !== ' ' && (strToChar[i] > 64 && strToChar[i] < 91) || strToChar[i] > 96 && strToChar[i] < 123) {
//             // console.log(strToChar[i])
//             result.push(String.fromCharCode(strToChar[i]))

//         }else if(typeof strToChar[i] === "number"){
//             result.push
//         } else {
//             result.push(strToChar[i])
//         }
//     }



//     return result.join('')

// }


