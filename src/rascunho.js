function catAndMouse(mouse, cat1, cat2) {
    let distance1;
    let distance2;
    if(cat1 > mouse){
        distance1 = cat1 - mouse;
    }
    else if(cat1 < mouse){
        distance1 = mouse - cat1;
    }
    if(cat2 > mouse){
        distance2 = cat2 - mouse;
    }
    else if(cat2 < mouse){
        distance2 = mouse - cat2;
    }
    if(distance1 < distance2){
        return "cat1"
    }
    else if(distance2 < distance1){
        return "cat2"
    }
    else if(distance1 == distance2){
        return "os gatos trombam e o rato foge"
    }
  }

  console.log(catAndMouse(5, 4, 1));
  console.log(catAndMouse(1, 5, 2));
  console.log(catAndMouse(4, 2, 6));
