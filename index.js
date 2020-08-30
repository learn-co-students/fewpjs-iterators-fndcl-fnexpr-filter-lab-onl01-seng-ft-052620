function findMatching(array, name){
    return array.filter(item => {
    return item.toUpperCase() === name.toUpperCase();
    });
}

function fuzzyMatch(array, string){
    return array.filter(item => {
    return item.startsWith(string);
    });
}

