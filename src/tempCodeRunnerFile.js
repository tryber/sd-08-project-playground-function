function techList(array, name) {
  if(array.length == 0) {
    return 'Vazio!';
  }
  array.sort();
  let techName = [];
  for(let index = 0; index < array.length; index += 1) {
    let list = {
      tech: array[index],
      name: name,
    }
    techName.push(list);
  }
  return techName;
}
console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"],
"Lucas"));