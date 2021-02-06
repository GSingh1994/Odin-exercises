let age = []

var d = new Date();
var thisYear = d.getFullYear();

let findTheOldest = function (arr) {
    age = arr.map(function (i) {
        if (!i.yearOfDeath) {
            i.yearOfDeath = thisYear;
            return (i.yearOfDeath - i.yearOfBirth)
        } else {
            return (i.yearOfDeath - i.yearOfBirth)
        }

    })

    let indexOfMax = age.indexOf(Math.max(...age));

    return (arr[indexOfMax])
}

module.exports = findTheOldest








            // console.log(i.yearOfDeath - i.yearOfBirth)
            // console.log(i.yearOfDeath)
            // console.log(i.yearOfDeath - i.yearOfBirth)

// const people = [
//     {
//         name: 'Carly',
//         yearOfBirth: 1942,
//         yearOfDeath: 1970,
//     },
//     {
//         name: 'Ray',
//         yearOfBirth: 1962,
//         yearOfDeath: 2011
//     },
//     {
//         name: 'Jane',
//         yearOfBirth: 1912,
//         yearOfDeath: 1941
//     },
// ]





// console.log(findTheOldest(people).name)