function findMatching(arr, name) {
    return arr.filter(driver => driver.toLowerCase() == name.toLowerCase())
}

function fuzzyMatch(arr, name) {
    return arr.filter(driver => driver.charAt(0) == name.charAt(0))
}

function matchName(arr, name) {
    return arr.filter(driver => driver.name == name)
}