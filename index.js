// Code your solution here
function findMatching(array, string) {
    return array.filter(driver => driver.toLowerCase() === string.toLowerCase()) 
}

function fuzzyMatch(array, string) {
    return array.filter(driver => driver.charAt(0) === string.charAt(0))
}

function matchName(array, string) {
    return array.filter(driver => driver.name === string)
}

