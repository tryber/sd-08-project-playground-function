function concatName(last_first) {
    let arrayName = [];
    for(let index = 0; index < last_first.length; index++){
     arrayName.push(last_first[index]);
     
}
    return(arrayName[arrayName.length-1] + ", " + arrayName[0])
}

console.log(concatName(['Bruno', 'Candido', 'Morais']));