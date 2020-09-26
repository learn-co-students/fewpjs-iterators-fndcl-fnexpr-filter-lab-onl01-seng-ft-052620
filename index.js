// Code your solution here
function findMatching(drivers, args){
    return drivers.filter(driver=>{ return driver.toLowerCase().includes(args.toLowerCase())} )
}
function fuzzyMatch(drivers, args){
    return drivers.filter(driver=>{ return driver.slice(0, args.length).toLowerCase().includes(args.toLowerCase())} )
}

function matchName(drivers, args){
    return drivers.filter(driver=>{ return driver.name === args})
}