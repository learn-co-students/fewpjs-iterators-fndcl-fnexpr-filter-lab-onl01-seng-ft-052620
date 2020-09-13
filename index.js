// Code your solution here
function findMatching(drivers, str){
    let match = drivers.filter(person =>{
        return person.toLowerCase() === str.toLowerCase();
    })

    return match
}

function fuzzyMatch(drivers, str){
    let match = drivers.filter(person =>{
        let bool = true;
        for(let i = 0; i < str.length; i++){
            if (person[i] !== str[i]){
                bool = false;
            }
        }
        if (bool){
            return person;
        }
    })
    return match
}

function matchName(drivers, str){
    let match = drivers.filter(person =>{
        return person.name === str;
    })

    return match;
}
