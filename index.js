function findMatching(drivers, string) {
    let match = drivers.filter(driver => driver.toLowerCase() === string.toLowerCase())
    return match
}

function fuzzyMatch(drivers, string) {
    let match = drivers.filter(driver => driver.charAt(0) === string.charAt(0))
    return match
}

function matchName(drivers, string) {
    let match = drivers.filter(driver => driver.name === string)
    return match
}