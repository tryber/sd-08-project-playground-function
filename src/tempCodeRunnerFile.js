function hydrate(string) {
  let sum = 0;
  string = string.split('');
  for(let index = 0; index < string.length; index += 1) {
    if(Number.isInteger(parseInt(string[index]))) {
      sum += +string[index];
    }
  }
  if(sum === 1){
    return `${sum} copo de água`;
  }else{
    return `${sum} copos de água`;
  }
}
console.log(hydrate("1 cachaça"));