// Code your solution here
function findMatching(array, name) {
    return array.filter(s => {return s.toLowerCase() == name.toLowerCase()})
}

function fuzzyMatch(array, name) {
    let nameLength = name.length
    return array.filter(s => {return s.slice(0, nameLength) === name})
}

function matchName(drivers, name) {
    return drivers.filter(s => {return s.name === name})
}