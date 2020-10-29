function catAndMouse(mouse,cat1,cat2) {
    let gato1 = cat1; 
    let gato2 = cat2; 
    let rato = mouse; 
    let distGato1Rato = gato1 - rato; 
    let distRatoGato1 = rato - gato1; 
    let distGato2Rato = gato2 - rato; 
    let distRatoGato2 = rato - gato2; 
    
    if (distGato1Rato < 0){
        distGato1Rato *=-1
    }
    if (distRatoGato1 < 0){
        distRatoGato1 *=-1
    } 
    
    if (distGato2Rato < 0){
        distGato2Rato *=-1
    } 
    if (distRatoGato2 < 0){
        distRatoGato2 *=-1
    }
      
    if (distGato1Rato < distGato2Rato || distRatoGato1 < distRatoGato2) {
      console.log("cat1");
      return "cat1"
    } else if (distGato2Rato < distGato1Rato || distRatoGato2 < distRatoGato1) {
      console.log("cat2");
      return "cat2"
    } else {
      console.log("os gatos trombam e o rato foge");
      return "os gatos trombam e o rato foge"
    }
  } catAndMouse(1,0,2)