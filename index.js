function capitalize(str){
  return str[0].toUpperCase() + str.slice(1);
}

function findMatching(drivers, term){
  return drivers.filter(driver => capitalize(driver) === capitalize(term));
}

function fuzzyMatch(drivers, letters){
  return drivers.filter(driver => driver.slice(0, letters.length) === letters);
}

function matchName(drivers, name){
  return drivers.filter(driver => driver.name === name);
}