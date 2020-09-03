// Code your solution here

function findMatching(drivers, name) {
  return drivers.filter( driver => driver.toLowerCase()
   === name.toLowerCase())
}

function fuzzyMatch(drivers, string) {
  return drivers.filter( possibleMatch => {
    debugger;
    return possibleMatch.toLowerCase().indexOf(string.toLowerCase()) === 0;

  })
}

function matchName(array, name) {
  return array.filter( object => object.name === name)
}