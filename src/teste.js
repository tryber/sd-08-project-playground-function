// Desafio 7
function catAndMouse(mouse, cat1, cat2){
  if(Math.abs(cat2 - mouse) == Math.abs(cat1 - mouse)) {
  return 'Os gatos trombam e o rato foge';
  }else if(Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)){
    return 'cat1';
  }else{
    return 'cat2';
  }
}  

console.log(catAndMouse(1, 2, 2));