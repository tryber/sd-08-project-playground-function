function hydrate(string) {
  let sum = 0;
  string = string.split('');
  for(let index = 0; index < string.length; index += 1) {
    if(Number.isInteger(parseInt(string[index]))) {
      sum += +string[index];
    }
  }
return `${sum} copos de água`;
}
console.log(hydrate("1 cachaça, 9 cervejas e 1 copo de vinho"));