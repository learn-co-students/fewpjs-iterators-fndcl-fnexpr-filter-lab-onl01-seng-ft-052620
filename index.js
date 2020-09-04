// Code your solution here

// 1. This function takes an array of drivers and a string as arguments, and returns the matching list of drivers. The function should be case insensitive.

function findMatching(drivers, string) {
    return drivers.filter(driver => driver.toUpperCase() === string.toUpperCase())
}

// 2. This function takes an array of drivers and a string as arguments for querying the array, and returns all drivers whose names begin with the provided letters.
function fuzzyMatch(drivers, string) {
    return drivers.filter(driver => driver.charAt(0) ===string.charAt(0))
}

// 3. This function takes an array of drivers and a string as arguments. In this function, each element of the drivers array is a JavaScript object that has a property of name. The function should return each element whose name property matches the provided string argument.
function matchName(drivers, string) {
    return drivers.filter(driver => driver.name === string)
}

// let even = arr.filter(n => {return n % 2 === 0})
//   
// 
//// even = [2,4,6]