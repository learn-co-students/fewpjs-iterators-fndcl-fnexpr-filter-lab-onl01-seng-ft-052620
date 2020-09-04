// Code your solution here

function findMatching(array, string) {
    // let caseInsensitive = array.map(driver => driver.toLowerCase());
    // let matchCase = string.toLowerCase()
    // let matchingDrivers = caseInsensitive.filter(n => {
    //     return n == matchCase
    // })
    // let correctedMatch = matchingDrivers.map(driver => if (driver != undefined) {
    //     (driver.charAt[0].toUpperCase() + driver.slice(1))
    // })
    let matchingDrivers = array.filter(x => x.toLowerCase().includes(string.toLowerCase()))
    return matchingDrivers
}

function fuzzyMatch(array, string) {
    let matchingDrivers = array.filter(x => x.substring(0, 1).includes(string.substring(0, 1)))
    return matchingDrivers
}

function matchName(array, string) {
    let matchingDrivers = array.filter(x => x.name == string)
    return matchingDrivers
}