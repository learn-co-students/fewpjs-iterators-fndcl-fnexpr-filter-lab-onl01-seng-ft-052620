// Code your solution here
function findMatching(drivers, string) {
    let match = drivers.filter(driver => driver.toLowerCase() === string.toLowerCase())
    return match
}

function fuzzyMatch(drivers, string) {
    let match = drivers.filter(driver => driver.charAt(0) === string.charAt(0))
    return match
}
//Write fuzzyMatch - This function takes an array of drivers 
//and a string as arguments for querying the array, 
//and returns all drivers whose names begin with the 
//provided letters.

function matchName(drivers, string) {
    let match = drivers.filter(driver => driver.name === string)
    return match
}
