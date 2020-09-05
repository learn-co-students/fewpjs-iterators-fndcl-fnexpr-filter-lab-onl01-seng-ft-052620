// Code your solution here
 function   findMatching(drivers, string) {
   let driver = drivers.filter(n =>  n === string || n == string.toLowerCase())
      return driver
 
 }
 
function   fuzzyMatch(drivers, string) {
return drivers.filter(n => n.indexOf(string) === 0)
}

function matchName(drivers, string){
  return drivers.filter(name => name.name === string)
}
