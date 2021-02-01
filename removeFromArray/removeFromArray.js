const removeFromArray = function (arr, num1, num2, num3, num4) {
    arr = arr.filter((n) => n !== num1 && n !== num2 && n !== num3 && n !== num4);
    return arr;
}

// console.log(removeFromArray([1, 2, 3, 4], 3))

module.exports = removeFromArray



    // for (i = 0; i < arr.length; i++) {
    //     if (arr[i] == num) {
    //         arr[i] = []
    //     }

    // }
    // return arr