function catAndMouse(mouse, cat1, cat2){ 
    let winner;
    if((cat2 - mouse) == (cat1 - mouse)) {
    winner = 'Os gatos trombam e o rato foge'
    }else if((cat1 - mouse) < (cat2 - mouse)){
      winner = 'cat1';
    }else{
      winner = 'cat2';
    }
    return winner;
  }  
console.log(catAndMouse(1, 4, 7));