
const findMatching = (drivers, name) => {
    let result = drivers.filter(driver => driver.toLowerCase() === name.toLowerCase()) 
    return result
    }

const fuzzyMatch = (drivers, name) => {
let result = drivers.filter(driver => driver.toLowerCase().indexOf(name.toLowerCase()) === 0
)

return result
}

const matchName = (drivers, name ) => {
    let result = drivers.filter(s => s.name === name )
    return result
} 
