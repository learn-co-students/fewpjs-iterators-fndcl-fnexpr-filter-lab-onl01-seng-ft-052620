// let arr = [1,2,3,4]

// let even = [];

// for(var i = 0; i< arr.length; i++) {
//     if (arr[i] % 2 === 0) even.push(arr[i]);
// }


// let even = arr.filter(n => {
//     return n % 2 === 0;
// });


function findMatching(drivers, string) {
    return drivers.filter(driver => {return driver.toUpperCase() === string.toUpperCase()})
}

function fuzzyMatch(drivers, string) {
    return drivers.filter(driver => driver.startsWith(string))
}

function matchName(drivers, string) {
    return drivers.filter(driver => driver.name === string)
}