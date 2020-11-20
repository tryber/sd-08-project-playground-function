function decode(string) {
  string = string.split('')
  for(let index = 0; index < string.length; index += 1) {
    if(string[index] === '1') {
      string[index] = 'a';
    }else if(string[index] === '2') {
      string[index] = 'e';
    }else if(string[index] === '3') {
      string[index] = 'i';
    }else if(string[index] === '4') {
      string[index] = 'o';
    }else if(string[index] === '5') {
      string[index] = 'u';
    }
  }
  string = string.join('');
  return string;
}
console.log(decode('h3 th2r2!'));