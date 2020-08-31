// Code your solution here

function findMatching(array, name){
    return array.filter(d => {return d.toLowerCase() === name.toLowerCase()})
}

function fuzzyMatch(array, name){
    let sliceLength = name.length
    return array.filter(d => {return d.slice(0, sliceLength) === name})
}

function matchName(drivers, name){
        return drivers.filter(d => {return d.name === name})
}