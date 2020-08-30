function findMatching(array, name){
    return array.filter(item => {
    return item.toUpperCase() === name.toUpperCase();
    });
}

