function hydrate(string) {
    let count = 0
    for(let i in string){
        if(string[i] > 0){
            count += parseInt(string[i])
        }
    }
    if(count == 1){return "1 copo de água"}
    return `${count} copos de água`
  }

  console.log(hydrate("1 cachaça"))
  console.log(hydrate("1 cachaça, 5 cervejas e 1 copo de vinho"))
  console.log(hydrate("5 cervejas e 1 copo de vinho"))